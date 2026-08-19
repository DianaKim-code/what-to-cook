import { env, pipeline, RawImage } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1";

env.allowLocalModels = false;
env.useBrowserCache = true;

const MODEL_ID = "Xenova/owlvit-base-patch32";
const MIN_CONFIDENCE = 0.06;
const MAX_RESULTS = 12;
let detectorPromise;

function getDetector() {
  if (!detectorPromise) {
    detectorPromise = pipeline("zero-shot-object-detection", MODEL_ID, {
      dtype: "q4",
      progress_callback: progress => {
        if (progress.status !== "progress") return;
        self.postMessage({
          type: "progress",
          progress: Math.round(progress.progress || 0),
          file: progress.file || ""
        });
      }
    }).catch(error => {
      detectorPromise = undefined;
      throw error;
    });
  }
  return detectorPromise;
}

function intersectionOverUnion(first, second) {
  const left = Math.max(first.xmin, second.xmin);
  const top = Math.max(first.ymin, second.ymin);
  const right = Math.min(first.xmax, second.xmax);
  const bottom = Math.min(first.ymax, second.ymax);
  const intersection = Math.max(0, right - left) * Math.max(0, bottom - top);
  if (!intersection) return 0;
  const firstArea = Math.max(0, first.xmax - first.xmin) * Math.max(0, first.ymax - first.ymin);
  const secondArea = Math.max(0, second.xmax - second.xmin) * Math.max(0, second.ymax - second.ymin);
  return intersection / (firstArea + secondArea - intersection);
}

function selectDistinctProducts(detections, labelToProduct) {
  const selected = [];
  const seenProducts = new Set();

  for (const detection of detections.sort((a, b) => b.score - a.score)) {
    const product = labelToProduct.get(detection.label);
    if (!product || detection.score < MIN_CONFIDENCE || seenProducts.has(product)) continue;
    if (selected.some(item => intersectionOverUnion(item.box, detection.box) > 0.62)) continue;
    selected.push({ product, confidence: detection.score, box: detection.box });
    seenProducts.add(product);
    if (selected.length === MAX_RESULTS) break;
  }
  return selected;
}

self.addEventListener("message", async event => {
  if (event.data?.type !== "analyze") return;
  const { id, file, labels } = event.data;

  try {
    self.postMessage({ type: "status", id, status: "model" });
    const detector = await getDetector();
    self.postMessage({ type: "status", id, status: "analysis" });
    const image = await RawImage.fromBlob(file);
    const candidateLabels = labels.map(item => item.label);
    const labelToProduct = new Map(labels.map(item => [item.label, item.product]));
    const output = await detector(image, candidateLabels, { threshold: MIN_CONFIDENCE, top_k: 50 });
    self.postMessage({ type: "result", id, candidates: selectDistinctProducts(output, labelToProduct) });
  } catch (error) {
    self.postMessage({ type: "error", id, message: error?.message || "Не удалось запустить распознавание." });
  }
});
