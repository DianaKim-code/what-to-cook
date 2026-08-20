const recipes = [
  { name: "Пышный омлет", icon: "◒", time: 15, description: "Нежный завтрак с золотистой корочкой — простой и сытный.", ingredients: ["яйца", "молоко", "масло", "соль"], method: "Взбейте яйца с молоком и солью. Вылейте на смазанную сковороду и готовьте под крышкой 7–10 минут." },
  { name: "Яичница с овощами", icon: "☼", time: 15, description: "Яркая яичница со свежими овощами для бодрого начала дня.", ingredients: ["яйца", "помидоры", "перец", "лук", "масло", "соль"], method: "Обжарьте нарезанные овощи 5 минут, добавьте яйца, посолите и доведите до готовности." },
  { name: "Жареный картофель", icon: "◇", time: 35, description: "Румяный картофель с хрустящими краями и ароматным луком.", ingredients: ["картофель", "лук", "масло", "соль"], method: "Нарежьте картофель брусочками и жарьте на масле 20 минут. Добавьте лук, соль и готовьте ещё 7 минут." },
  { name: "Картофель с сыром", icon: "▱", time: 45, description: "Мягкий запечённый картофель под тягучей сырной корочкой.", ingredients: ["картофель", "сыр", "масло", "чеснок", "соль"], method: "Нарежьте картофель, смешайте с маслом и чесноком. Запекайте 30 минут, посыпьте сыром и подрумяньте." },
  { name: "Рис с овощами", icon: "✣", time: 30, description: "Рассыпчатый рис с разноцветными овощами на каждый день.", ingredients: ["рис", "морковь", "лук", "перец", "горошек", "масло", "соль"], method: "Отварите рис. Обжарьте овощи до мягкости, добавьте рис, соль и прогрейте всё вместе 5 минут." },
  { name: "Рис с курицей", icon: "◉", time: 40, description: "Сытное блюдо из сочной курицы и ароматного рассыпчатого риса.", ingredients: ["курица", "рис", "морковь", "лук", "масло", "соль"], method: "Обжарьте курицу и овощи. Всыпьте рис, добавьте воду и соль, тушите под крышкой около 25 минут." },
  { name: "Макароны с сыром", icon: "≈", time: 20, description: "Сливочная домашняя классика, которая нравится всей семье.", ingredients: ["макароны", "сыр", "молоко", "масло", "соль"], method: "Отварите макароны. Растопите масло с молоком, добавьте сыр и перемешайте с горячими макаронами." },
  { name: "Паста с томатами", icon: "✺", time: 25, description: "Лёгкая ароматная паста с сочным томатным соусом.", ingredients: ["макароны", "помидоры", "чеснок", "лук", "масло", "соль"], method: "Отварите пасту. Обжарьте лук и чеснок, добавьте помидоры и тушите 10 минут. Соедините с пастой." },
  { name: "Овощной салат", icon: "❋", time: 10, description: "Свежий, хрустящий и лёгкий салат за несколько минут.", ingredients: ["помидоры", "огурцы", "перец", "лук", "масло", "соль"], method: "Нарежьте овощи, добавьте тонко нарезанный лук, масло и соль. Аккуратно перемешайте." },
  { name: "Горячие бутерброды", icon: "▰", time: 15, description: "Хрустящий хлеб с расплавленным сыром и сочными помидорами.", ingredients: ["хлеб", "сыр", "помидоры", "масло"], method: "Смажьте хлеб маслом, выложите помидоры и сыр. Запекайте 8–10 минут при 200 °C." },
  { name: "Домашние сырники", icon: "●", time: 25, description: "Румяные творожные сырники — нежные внутри и золотистые снаружи.", ingredients: ["творог", "яйца", "мука", "сахар", "масло"], method: "Смешайте творог, яйцо, сахар и муку. Сформируйте сырники и обжарьте на среднем огне с двух сторон." },
  { name: "Тонкие блины", icon: "◎", time: 35, description: "Эластичные тонкие блины для сладких и несладких начинок.", ingredients: ["мука", "яйца", "молоко", "сахар", "масло", "соль"], method: "Взбейте яйца с молоком, добавьте муку, сахар и соль. Влейте масло и жарьте тонкие блины." },
  { name: "Куриный суп", icon: "∪", time: 55, description: "Лёгкий согревающий суп с курицей, картофелем и овощами.", ingredients: ["курица", "картофель", "морковь", "лук", "вермишель", "соль"], method: "Сварите курицу. Добавьте картофель и овощи, через 15 минут — вермишель. Посолите и варите до готовности." },
  { name: "Овощной суп", icon: "♨", time: 40, description: "Простой суп из сезонных овощей — лёгкий и уютный.", ingredients: ["картофель", "морковь", "лук", "капуста", "помидоры", "соль"], method: "В кипящую воду добавьте картофель, затем остальные нарезанные овощи. Посолите и варите 25–30 минут." },
  { name: "Запечённая курица", icon: "◈", time: 60, description: "Сочная курица с чесноком и аппетитной румяной корочкой.", ingredients: ["курица", "чеснок", "масло", "соль", "черный перец"], method: "Натрите курицу маслом, солью, чесноком и перцем. Запекайте при 190 °C около 45–50 минут." },
  { name: "Картофельная запеканка", icon: "▦", time: 60, description: "Сытная запеканка из картофеля, яиц и сыра для всей семьи.", ingredients: ["картофель", "яйца", "сыр", "молоко", "лук", "соль"], method: "Выложите слоями тонкий картофель и лук. Залейте яйцами с молоком, посыпьте сыром и запекайте 45 минут." },
  { name: "Гречка с грибами", icon: "✤", time: 35, description: "Ароматная гречка с обжаренными грибами и луком.", ingredients: ["гречка", "грибы", "лук", "морковь", "масло", "соль"], method: "Отварите гречку. Обжарьте грибы с луком и морковью, соедините с крупой и прогрейте." },
  { name: "Тушёная капуста", icon: "◌", time: 40, description: "Мягкая капуста с овощами и лёгкой томатной кислинкой.", ingredients: ["капуста", "морковь", "лук", "помидоры", "масло", "соль"], method: "Обжарьте лук и морковь, добавьте капусту и помидоры. Посолите и тушите под крышкой 25 минут." }
];

const LEGACY_RECIPE_META = {
  "Пышный омлет": ["easy", "pan", "breakfast", ["яйца"]],
  "Яичница с овощами": ["easy", "pan", "breakfast", ["яйца"]],
  "Жареный картофель": ["easy", "pan", "side", ["картофель"]],
  "Картофель с сыром": ["medium", "oven", "main", ["картофель", "сыр"]],
  "Рис с овощами": ["easy", "pan", "side", ["рис"]],
  "Рис с курицей": ["medium", "stew", "main", ["рис", "курица"]],
  "Макароны с сыром": ["easy", "boil", "main", ["макароны", "сыр"]],
  "Паста с томатами": ["easy", "pan", "main", ["макароны", "помидоры"]],
  "Овощной салат": ["easy", "no-cook", "salad", ["помидоры", "огурцы"]],
  "Горячие бутерброды": ["easy", "oven", "snack", ["хлеб", "сыр"]],
  "Домашние сырники": ["easy", "pan", "breakfast", ["творог"]],
  "Тонкие блины": ["medium", "pan", "breakfast", ["мука", "яйца"]],
  "Куриный суп": ["medium", "boil", "soup", ["курица"]],
  "Овощной суп": ["medium", "boil", "soup", ["картофель", "капуста"]],
  "Запечённая курица": ["medium", "oven", "main", ["курица"]],
  "Картофельная запеканка": ["medium", "oven", "main", ["картофель"]],
  "Гречка с грибами": ["medium", "pan", "main", ["гречка", "грибы"]],
  "Тушёная капуста": ["medium", "stew", "main", ["капуста"]]
};

recipes.forEach(recipe => {
  const [difficulty, methodType, mealType, mainIngredients] = LEGACY_RECIPE_META[recipe.name];
  Object.assign(recipe, { difficulty, methodType, mealType, mainIngredients });
  recipe.cuisine = inferRecipeCuisine(recipe);
});
recipes.push(...EXPANDED_RECIPES);
recipes.forEach(recipe => {
  const video = RECIPE_VIDEOS[recipe.name];
  if (video) Object.assign(recipe, video);
});

const aliases = {
  "яйцо": "яйца", "яички": "яйца", "картошка": "картофель", "картошечка": "картофель",
  "помидор": "помидоры", "томат": "помидоры", "томаты": "помидоры", "огурец": "огурцы",
  "морковка": "морковь", "луковица": "лук", "лучок": "лук", "чеснока": "чеснок",
  "паста": "макароны", "спагетти": "макароны", "лапша": "вермишель",
  "куриное филе": "курица", "куриная грудка": "курица", "филе курицы": "курица", "грудка": "курица",
  "болгарский перец": "перец", "сладкий перец": "перец", "перец болгарский": "перец",
  "растительное масло": "масло", "подсолнечное масло": "масло", "сливочное масло": "масло",
  "зеленый горошек": "горошек", "шампиньоны": "грибы", "твердый сыр": "сыр",
  "сыр твердый": "сыр", "сыр твердого сорта": "сыр", "сахарный песок": "сахар",
  "молочка": "молоко", "капусту": "капуста", "говяжий фарш": "фарш",
  "фарш говяжий": "фарш", "свиной фарш": "фарш",
  "фарш свиной": "фарш", "смешанный фарш": "фарш", "фарш смешанный": "фарш"
};

const form = document.querySelector("#ingredients-form");
const input = document.querySelector("#ingredients");
const suggestionsList = document.querySelector("#suggestions");
const addManualButton = document.querySelector("#add-manual-button");
const message = document.querySelector("#form-message");
const selectedProductsWrap = document.querySelector("#selected-products-wrap");
const productChips = document.querySelector("#product-chips");
const productsCount = document.querySelector("#products-count");
const cuisineFilter = document.querySelector("#cuisine-filter");
const photoInput = document.querySelector("#photo-input");
const cameraInput = document.querySelector("#camera-input");
const photoPanel = document.querySelector("#photo-panel");
const photoPreview = document.querySelector("#photo-preview");
const photoPanelTitle = document.querySelector("#photo-panel-title");
const photoStatus = document.querySelector("#photo-status");
const recognitionLoader = document.querySelector("#recognition-loader");
const recognizedProducts = document.querySelector("#recognized-products");
const photoActions = document.querySelector("#photo-actions");
const confirmPhotoButton = document.querySelector("#confirm-photo-button");
const cancelPhotoButton = document.querySelector("#cancel-photo-button");
const resultsSection = document.querySelector("#results-section");
const resultsGrid = document.querySelector("#recipe-grid");
const resultsSummary = document.querySelector("#results-summary");
const moreResults = document.querySelector("#more-results");
const showMoreButton = document.querySelector("#show-more-button");
const moreResultsNote = document.querySelector("#more-results-note");
const clearButton = document.querySelector("#clear-button");
const editButton = document.querySelector("#edit-button");
const fillExampleButton = document.querySelector("#fill-example");

const selectedIngredients = [];
let visibleSuggestions = [];
let activeSuggestionIndex = -1;
let previewUrl = "";
let rankedRecommendations = [];
let visibleRecipeCount = 3;
let visionWorker;
let recognitionRequestId = 0;

function normalizeText(value) {
  return value.toLowerCase().replace(/ё/g, "е").replace(/[^а-яa-z\s-]/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeIngredient(value) {
  const clean = normalizeText(value);
  return aliases[clean] || clean;
}

function parseIngredients(value) {
  return [...new Set(value.split(/[,;\n]+/).map(normalizeIngredient).filter(Boolean))];
}

function getSuggestions(query) {
  const cleanQuery = normalizeText(query);
  if (!cleanQuery) return [];
  const relatedQueries = [cleanQuery];
  if (aliases[cleanQuery]) relatedQueries.push(normalizeText(aliases[cleanQuery]));
  if (cleanQuery.startsWith("пом")) relatedQueries.push("томат");
  if (cleanQuery.startsWith("томат")) relatedQueries.push("помид");

  return PRODUCT_CATALOG
    .map(product => {
      const normalized = normalizeText(product);
      const positions = relatedQueries.map(term => normalized.indexOf(term)).filter(position => position >= 0);
      if (!positions.length) return null;
      const position = Math.min(...positions);
      const score = position === 0 ? 0 : normalized.split(" ").some(word => relatedQueries.some(term => word.startsWith(term))) ? 1 : 2;
      return { product, score, position };
    })
    .filter(Boolean)
    .filter(item => !selectedIngredients.includes(normalizeIngredient(item.product)))
    .sort((a, b) => a.score - b.score || a.position - b.position || a.product.length - b.product.length)
    .slice(0, 7)
    .map(item => item.product);
}

function renderSuggestions() {
  suggestionsList.innerHTML = "";
  visibleSuggestions.forEach((product, index) => {
    const item = document.createElement("li");
    item.setAttribute("role", "option");
    item.id = `suggestion-${index}`;
    item.setAttribute("aria-selected", String(index === activeSuggestionIndex));
    const button = document.createElement("button");
    button.type = "button";
    button.className = `suggestion-option${index === activeSuggestionIndex ? " is-active" : ""}`;
    button.dataset.product = product;
    button.textContent = product;
    item.append(button);
    suggestionsList.append(item);
  });
  const isOpen = visibleSuggestions.length > 0;
  suggestionsList.hidden = !isOpen;
  input.setAttribute("aria-expanded", String(isOpen));
  if (isOpen && activeSuggestionIndex >= 0) input.setAttribute("aria-activedescendant", `suggestion-${activeSuggestionIndex}`);
  else input.removeAttribute("aria-activedescendant");
}

function closeSuggestions() {
  visibleSuggestions = [];
  activeSuggestionIndex = -1;
  renderSuggestions();
}

function updateSuggestions() {
  visibleSuggestions = getSuggestions(input.value);
  activeSuggestionIndex = -1;
  renderSuggestions();
}

function renderSelectedProducts() {
  productChips.innerHTML = "";
  selectedIngredients.forEach(product => {
    const chip = document.createElement("span");
    chip.className = "user-product-chip";
    chip.append(document.createTextNode(product));
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "remove-product";
    removeButton.dataset.product = product;
    removeButton.setAttribute("aria-label", `Удалить ${product}`);
    removeButton.textContent = "×";
    chip.append(removeButton);
    productChips.append(chip);
  });
  productsCount.textContent = String(selectedIngredients.length);
  selectedProductsWrap.hidden = selectedIngredients.length === 0;
}

function addProduct(product, announce = true) {
  const normalized = normalizeIngredient(product);
  if (!normalized) return false;
  if (selectedIngredients.includes(normalized)) {
    if (announce) message.textContent = `«${normalized}» уже есть в списке.`;
    return false;
  }
  selectedIngredients.push(normalized);
  renderSelectedProducts();
  input.removeAttribute("aria-invalid");
  message.textContent = "";
  return true;
}

function addFromInput() {
  const products = parseIngredients(input.value);
  if (!products.length) return;
  products.forEach(product => addProduct(product, products.length === 1));
  input.value = "";
  closeSuggestions();
  input.focus();
}

const BASIC_PANTRY = new Set(["соль", "масло", "вода", "черный перец"]);
const DIFFICULTY_LABELS = { easy: "Просто", medium: "Средне", hard: "Посложнее" };
const CUISINE_LABELS = {
  european: "Европейская",
  asian: "Азиатская",
  italian: "Итальянская",
  "central-asian": "Центральноазиатская",
  georgian: "Грузинская",
  mediterranean: "Средиземноморская",
  "middle-eastern": "Ближневосточная",
  home: "Домашняя",
  healthy: "Лёгкая",
  quick: "Быстрая"
};
const FILTERABLE_CUISINES = ["european", "asian", "italian", "central-asian", "georgian", "mediterranean", "middle-eastern", "home"];

function getCuisineLabel(recipe) {
  const primaryCuisine = recipe.cuisine.find(cuisine => FILTERABLE_CUISINES.includes(cuisine)) || recipe.cuisine[0] || "home";
  return CUISINE_LABELS[primaryCuisine];
}

function scoreRecipe(recipe, userIngredients) {
  const matched = recipe.ingredients.filter(ingredient => userIngredients.includes(ingredient));
  const missing = recipe.ingredients.filter(ingredient => !userIngredients.includes(ingredient));
  const ingredientWeight = ingredient => recipe.mainIngredients.includes(ingredient) ? 2.4 : BASIC_PANTRY.has(ingredient) ? .25 : 1;
  const totalWeight = recipe.ingredients.reduce((sum, ingredient) => sum + ingredientWeight(ingredient), 0);
  const matchedWeight = matched.reduce((sum, ingredient) => sum + ingredientWeight(ingredient), 0);
  const percentage = Math.round((matchedWeight / totalWeight) * 100);
  const matchedMainCount = recipe.mainIngredients.filter(ingredient => userIngredients.includes(ingredient)).length;
  const mainCoverage = matchedMainCount / recipe.mainIngredients.length;
  const usefulMatches = matched.filter(ingredient => !BASIC_PANTRY.has(ingredient)).length;
  const usefulMissing = missing.filter(ingredient => !BASIC_PANTRY.has(ingredient)).length;
  const baseScore = percentage * .6 + mainCoverage * 22 + usefulMatches * 5 - usefulMissing * 3.5 - (matchedMainCount ? 0 : 9);
  return { ...recipe, matched, missing, percentage, baseScore, mainCoverage };
}

function mainIngredientSimilarity(first, second) {
  const firstSet = new Set(first.mainIngredients);
  const secondSet = new Set(second.mainIngredients);
  const intersection = [...firstSet].filter(item => secondSet.has(item)).length;
  const union = new Set([...firstSet, ...secondSet]).size;
  return union ? intersection / union : 0;
}

function diversityPenalty(candidate, selected) {
  const context = selected.length < 3 ? selected : selected.slice(-3);
  const strength = selected.length < 3 ? 1 : .35;
  return context.reduce((penalty, existing) => {
    let nextPenalty = penalty;
    if (candidate.methodType === existing.methodType) nextPenalty += 18 * strength;
    if (candidate.mealType === existing.mealType) nextPenalty += 7 * strength;
    const similarity = mainIngredientSimilarity(candidate, existing);
    if (similarity >= .75) nextPenalty += 18 * strength;
    else if (similarity >= .4) nextPenalty += 8 * strength;
    return nextPenalty;
  }, 0);
}

function buildDiverseRanking(scoredRecipes) {
  const remaining = [...scoredRecipes].sort((a, b) => b.baseScore - a.baseScore || b.percentage - a.percentage || a.time - b.time);
  const selected = [];
  while (remaining.length) {
    let bestIndex = 0;
    let bestAdjustedScore = -Infinity;
    remaining.forEach((candidate, index) => {
      const adjustedScore = candidate.baseScore - diversityPenalty(candidate, selected);
      if (adjustedScore > bestAdjustedScore) {
        bestAdjustedScore = adjustedScore;
        bestIndex = index;
      }
    });
    selected.push(remaining.splice(bestIndex, 1)[0]);
  }
  return selected;
}

function chips(items, type) {
  if (!items.length) return `<span class="chip empty">Ничего докупать не нужно</span>`;
  return items.map(item => `<span class="chip ${type}">${item}</span>`).join("");
}

function recipeCard(recipe, index) {
  return `
    <article class="recipe-card">
      <div class="card-top">
        <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        <span class="card-icon" aria-hidden="true">${recipe.icon}</span>
        <div class="match-row">
          <span class="match-label">Совпадение</span>
          <span class="match-value">${recipe.percentage}%</span>
        </div>
        <div class="progress" role="progressbar" aria-label="Совпадение с рецептом ${recipe.name}" aria-valuenow="${recipe.percentage}" aria-valuemin="0" aria-valuemax="100"><span style="width:${recipe.percentage}%"></span></div>
      </div>
      <div class="card-body">
        <div class="recipe-meta"><span class="meta-left"><span>Вариант ${index + 1}</span><span class="cuisine-badge">${getCuisineLabel(recipe)}</span><span class="difficulty-badge difficulty-${recipe.difficulty}">${DIFFICULTY_LABELS[recipe.difficulty]}</span></span><span class="time">${recipe.time} минут</span></div>
        <h3 class="recipe-title">${recipe.name}</h3>
        <p class="recipe-description">${recipe.description}</p>
        <div class="ingredient-block">
          <h4>У вас уже есть</h4>
          <div class="chips">${recipe.matched.length ? chips(recipe.matched, "") : `<span class="chip empty">Пока нет совпадений</span>`}</div>
        </div>
        <div class="ingredient-block">
          <h4>Понадобится докупить</h4>
          <div class="chips">${chips(recipe.missing, "missing")}</div>
        </div>
        <div class="method">
          <h4>Как приготовить</h4>
          <p>${recipe.method}</p>
        </div>
        ${recipe.youtubeUrl ? `<a class="recipe-video-link" href="${recipe.youtubeUrl}" rel="external" aria-label="Смотреть видео приготовления блюда «${recipe.name}» на YouTube">▶ Смотреть видео на YouTube</a>` : ""}
      </div>
    </article>`;
}

function showRecipes(userIngredients) {
  const selectedCuisine = cuisineFilter.value;
  const availableRecipes = selectedCuisine === "any" ? recipes : recipes.filter(recipe => recipe.cuisine.includes(selectedCuisine));
  rankedRecommendations = buildDiverseRanking(availableRecipes.map(recipe => scoreRecipe(recipe, userIngredients)));
  visibleRecipeCount = 3;
  renderRecipeResults();
  const best = rankedRecommendations[0]?.percentage || 0;
  const cuisineSuffix = selectedCuisine === "any" ? "" : ` · ${CUISINE_LABELS[selectedCuisine].toLowerCase()} кухня`;
  resultsSummary.textContent = best > 0
    ? `Нашли лучшие варианты для ${userIngredients.length} ${pluralizeProducts(userIngredients.length)}${cuisineSuffix}`
    : "Точных совпадений нет, но вот самые близкие идеи";
  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderRecipeResults() {
  const visibleRecipes = rankedRecommendations.slice(0, visibleRecipeCount);
  resultsGrid.innerHTML = visibleRecipes.map(recipeCard).join("");
  const remainingCount = rankedRecommendations.length - visibleRecipes.length;
  moreResults.hidden = remainingCount <= 0;
  moreResultsNote.textContent = remainingCount > 0 ? `Ещё ${remainingCount} подходящих идей` : "";
}

showMoreButton.addEventListener("click", () => {
  visibleRecipeCount = Math.min(visibleRecipeCount + 6, rankedRecommendations.length);
  renderRecipeResults();
});

function pluralizeProducts(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "продукта";
  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return "продуктов";
  return "продуктов";
}

function clearAll() {
  input.value = "";
  selectedIngredients.splice(0);
  cuisineFilter.value = "any";
  renderSelectedProducts();
  closeSuggestions();
  resetPhotoPanel();
  input.removeAttribute("aria-invalid");
  message.textContent = "";
  resultsSection.hidden = true;
  resultsGrid.innerHTML = "";
  moreResults.hidden = true;
  rankedRecommendations = [];
  input.focus();
}

form.addEventListener("submit", event => {
  event.preventDefault();
  if (input.value.trim()) addFromInput();
  if (!selectedIngredients.length) {
    input.setAttribute("aria-invalid", "true");
    message.textContent = "Добавьте хотя бы несколько продуктов, которые есть у вас дома.";
    input.focus();
    return;
  }
  input.removeAttribute("aria-invalid");
  message.textContent = "";
  showRecipes([...selectedIngredients]);
});

input.addEventListener("input", () => {
  if (input.value.trim()) {
    input.removeAttribute("aria-invalid");
    message.textContent = "";
  }
  updateSuggestions();
});
input.addEventListener("keydown", event => {
  if (event.key === "ArrowDown" && visibleSuggestions.length) {
    event.preventDefault();
    activeSuggestionIndex = (activeSuggestionIndex + 1) % visibleSuggestions.length;
    renderSuggestions();
  } else if (event.key === "ArrowUp" && visibleSuggestions.length) {
    event.preventDefault();
    activeSuggestionIndex = activeSuggestionIndex < 0 ? visibleSuggestions.length - 1 : (activeSuggestionIndex - 1 + visibleSuggestions.length) % visibleSuggestions.length;
    renderSuggestions();
  } else if (event.key === "Enter") {
    event.preventDefault();
    const suggestionToAdd = visibleSuggestions[activeSuggestionIndex] || visibleSuggestions[0];
    if (suggestionToAdd) {
      addProduct(suggestionToAdd);
      input.value = "";
      closeSuggestions();
    } else addFromInput();
  } else if (event.key === "Escape") closeSuggestions();
});
suggestionsList.addEventListener("mousedown", event => event.preventDefault());
suggestionsList.addEventListener("click", event => {
  const button = event.target.closest("[data-product]");
  if (!button) return;
  addProduct(button.dataset.product);
  input.value = "";
  closeSuggestions();
  input.focus();
});
addManualButton.addEventListener("click", addFromInput);
productChips.addEventListener("click", event => {
  const button = event.target.closest(".remove-product");
  if (!button) return;
  const index = selectedIngredients.indexOf(button.dataset.product);
  if (index >= 0) selectedIngredients.splice(index, 1);
  renderSelectedProducts();
});
document.addEventListener("click", event => {
  if (!event.target.closest(".input-wrap")) closeSuggestions();
});
clearButton.addEventListener("click", clearAll);
editButton.addEventListener("click", () => { input.focus(); input.scrollIntoView({ behavior: "smooth", block: "center" }); });
fillExampleButton.addEventListener("click", () => {
  ["курица", "рис", "морковь", "лук"].forEach(product => addProduct(product, false));
  input.focus();
});
cuisineFilter.addEventListener("change", () => {
  if (!resultsSection.hidden && selectedIngredients.length) showRecipes([...selectedIngredients]);
});

async function handlePhotoChange(event) {
  const file = event.currentTarget.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    message.textContent = "Выберите изображение в формате JPG, PNG, WEBP или HEIC.";
    return;
  }
  if (file.size > 15 * 1024 * 1024) {
    message.textContent = "Фотография слишком большая. Выберите файл размером до 15 МБ.";
    return;
  }

  resetPhotoPanel(false);
  previewUrl = URL.createObjectURL(file);
  photoPreview.src = previewUrl;
  photoPanel.hidden = false;
  photoPanelTitle.textContent = "Распознаём продукты…";
  photoStatus.textContent = "Готовим локальную модель. При первом запуске это может занять несколько минут.";
  photoStatus.classList.remove("is-error");
  recognitionLoader.hidden = false;

  try {
    const candidates = await analyzeImage(file);
    showRecognitionResult(candidates);
  } catch (error) {
    showRecognitionResult([], error.message);
  }
}
[photoInput, cameraInput].forEach(fileInput => fileInput.addEventListener("change", handlePhotoChange));

function getVisionWorker() {
  if (!window.Worker) throw new Error("Этот браузер не поддерживает локальное распознавание в фоновом потоке.");
  if (!visionWorker) visionWorker = new Worker("vision-worker.js", { type: "module" });
  return visionWorker;
}

function analyzeImage(file) {
  const worker = getVisionWorker();
  const id = ++recognitionRequestId;
  const labels = Object.entries(PRODUCT_VISION_LABELS)
    .filter(([product]) => PRODUCT_CATALOG.includes(product))
    .map(([product, label]) => ({ product, label }));

  return new Promise((resolve, reject) => {
    const handleMessage = event => {
      const data = event.data || {};
      if (data.type === "progress") {
        const suffix = data.progress ? ` ${data.progress}%` : "";
        photoStatus.textContent = `Загружаем модель распознавания${suffix}. Фото остаётся на устройстве.`;
        return;
      }
      if (data.id !== id) return;
      if (data.type === "status") {
        photoStatus.textContent = data.status === "analysis"
          ? "Ищем отдельные продукты на фотографии…"
          : "Запускаем локальную модель распознавания…";
        return;
      }
      if (data.type === "result") {
        cleanup();
        resolve(data.candidates);
      } else if (data.type === "error") {
        cleanup();
        reject(new Error(data.message));
      }
    };
    const handleError = () => {
      cleanup();
      reject(new Error("Не удалось загрузить локальную модель. Проверьте подключение к интернету и попробуйте снова."));
    };
    const cleanup = () => {
      worker.removeEventListener("message", handleMessage);
      worker.removeEventListener("error", handleError);
    };
    worker.addEventListener("message", handleMessage);
    worker.addEventListener("error", handleError);
    worker.postMessage({ type: "analyze", id, file, labels });
  });
}

function showRecognitionResult(candidates, errorMessage = "") {
  recognitionLoader.hidden = true;
  recognizedProducts.innerHTML = "";
  recognizedProducts.hidden = candidates.length === 0;
  photoActions.hidden = false;
  confirmPhotoButton.hidden = candidates.length === 0;

  if (!candidates.length) {
    photoPanelTitle.textContent = "Нужна другая фотография";
    photoStatus.textContent = errorMessage
      ? `Распознавание не завершено: ${errorMessage}`
      : "Не удалось уверенно определить продукты. Попробуйте другое фото или добавьте продукты вручную.";
    photoStatus.classList.add("is-error");
    return;
  }

  photoPanelTitle.textContent = "Мы нашли на фото:";
  photoStatus.textContent = "Это предварительные подсказки. Снимите выбор с неверных продуктов перед добавлением.";
  candidates.forEach(({ product, confidence }) => {
    const label = document.createElement("label");
    label.className = "recognized-option";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = product;
    checkbox.checked = true;
    const text = document.createElement("span");
    const name = product.charAt(0).toUpperCase() + product.slice(1);
    text.textContent = `${name} — ${Math.round(confidence * 100)}%`;
    label.append(checkbox, text);
    recognizedProducts.append(label);
  });
}

confirmPhotoButton.addEventListener("click", () => {
  const checked = [...recognizedProducts.querySelectorAll("input:checked")];
  if (!checked.length) {
    photoStatus.textContent = "Выберите хотя бы один продукт или нажмите «Отмена».";
    photoStatus.classList.add("is-error");
    return;
  }
  checked.forEach(item => addProduct(item.value, false));
  resetPhotoPanel();
  message.textContent = "Продукты с фотографии добавлены в общий список.";
});
cancelPhotoButton.addEventListener("click", () => resetPhotoPanel());

function resetPhotoPanel(clearFile = true) {
  if (previewUrl) URL.revokeObjectURL(previewUrl);
  previewUrl = "";
  photoPreview.removeAttribute("src");
  photoPanel.hidden = true;
  recognitionLoader.hidden = true;
  recognizedProducts.hidden = true;
  recognizedProducts.innerHTML = "";
  photoActions.hidden = true;
  confirmPhotoButton.hidden = false;
  photoStatus.classList.remove("is-error");
  if (clearFile) {
    photoInput.value = "";
    cameraInput.value = "";
  }
}
