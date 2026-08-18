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
  { name: "Запечённая курица", icon: "◈", time: 60, description: "Сочная курица с чесноком и аппетитной румяной корочкой.", ingredients: ["курица", "чеснок", "масло", "соль", "перец специя"], method: "Натрите курицу маслом, солью, чесноком и перцем. Запекайте при 190 °C около 45–50 минут." },
  { name: "Картофельная запеканка", icon: "▦", time: 60, description: "Сытная запеканка из картофеля, яиц и сыра для всей семьи.", ingredients: ["картофель", "яйца", "сыр", "молоко", "лук", "соль"], method: "Выложите слоями тонкий картофель и лук. Залейте яйцами с молоком, посыпьте сыром и запекайте 45 минут." },
  { name: "Гречка с грибами", icon: "✤", time: 35, description: "Ароматная гречка с обжаренными грибами и луком.", ingredients: ["гречка", "грибы", "лук", "морковь", "масло", "соль"], method: "Отварите гречку. Обжарьте грибы с луком и морковью, соедините с крупой и прогрейте." },
  { name: "Тушёная капуста", icon: "◌", time: 40, description: "Мягкая капуста с овощами и лёгкой томатной кислинкой.", ingredients: ["капуста", "морковь", "лук", "помидоры", "масло", "соль"], method: "Обжарьте лук и морковь, добавьте капусту и помидоры. Посолите и тушите под крышкой 25 минут." }
];

const aliases = {
  "яйцо": "яйца", "яички": "яйца", "картошка": "картофель", "картошечка": "картофель",
  "помидор": "помидоры", "томат": "помидоры", "томаты": "помидоры", "огурец": "огурцы",
  "морковка": "морковь", "луковица": "лук", "лучок": "лук", "чеснока": "чеснок",
  "макароны": "макароны", "паста": "макароны", "спагетти": "макароны", "лапша": "вермишель",
  "куриное филе": "курица", "куриная грудка": "курица", "филе курицы": "курица", "грудка": "курица",
  "болгарский перец": "перец", "сладкий перец": "перец", "перец болгарский": "перец",
  "растительное масло": "масло", "подсолнечное масло": "масло", "сливочное масло": "масло",
  "зелёный горошек": "горошек", "зеленый горошек": "горошек", "шампиньоны": "грибы",
  "сыр твердый": "сыр", "твёрдый сыр": "сыр", "сыр твердого сорта": "сыр",
  "сахарный песок": "сахар", "молочка": "молоко", "капусту": "капуста"
};

const form = document.querySelector("#ingredients-form");
const input = document.querySelector("#ingredients");
const message = document.querySelector("#form-message");
const resultsSection = document.querySelector("#results-section");
const resultsGrid = document.querySelector("#recipe-grid");
const resultsSummary = document.querySelector("#results-summary");
const clearButton = document.querySelector("#clear-button");
const editButton = document.querySelector("#edit-button");
const fillExampleButton = document.querySelector("#fill-example");

function normalizeIngredient(value) {
  const clean = value.toLowerCase().replace(/ё/g, "е").replace(/[^а-яa-z\s-]/g, " ").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  return aliases[clean] || clean;
}

function parseIngredients(value) {
  const pieces = value.split(/[,;\n]+/);
  return [...new Set(pieces.map(normalizeIngredient).filter(Boolean))];
}

function scoreRecipe(recipe, userIngredients) {
  const matched = recipe.ingredients.filter(ingredient => userIngredients.includes(ingredient));
  const missing = recipe.ingredients.filter(ingredient => !userIngredients.includes(ingredient));
  const percentage = Math.round((matched.length / recipe.ingredients.length) * 100);
  return { ...recipe, matched, missing, percentage };
}

function chips(items, type) {
  if (!items.length) return `<span class="chip empty">Ничего докупать не нужно</span>`;
  return items.map(item => `<span class="chip ${type}">${item}</span>`).join("");
}

function recipeCard(recipe, index) {
  return `
    <article class="recipe-card">
      <div class="card-top">
        <span class="card-index">0${index + 1}</span>
        <span class="card-icon" aria-hidden="true">${recipe.icon}</span>
        <div class="match-row">
          <span class="match-label">Совпадение</span>
          <span class="match-value">${recipe.percentage}%</span>
        </div>
        <div class="progress" role="progressbar" aria-label="Совпадение с рецептом ${recipe.name}" aria-valuenow="${recipe.percentage}" aria-valuemin="0" aria-valuemax="100"><span style="width:${recipe.percentage}%"></span></div>
      </div>
      <div class="card-body">
        <div class="recipe-meta"><span>Вариант ${index + 1}</span><span class="time">${recipe.time} минут</span></div>
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
      </div>
    </article>`;
}

function showRecipes(userIngredients) {
  const ranked = recipes
    .map(recipe => scoreRecipe(recipe, userIngredients))
    .sort((a, b) => b.percentage - a.percentage || a.missing.length - b.missing.length || a.time - b.time)
    .slice(0, 3);

  resultsGrid.innerHTML = ranked.map(recipeCard).join("");
  const best = ranked[0].percentage;
  resultsSummary.textContent = best > 0
    ? `Нашли лучшие варианты для ${userIngredients.length} ${pluralizeProducts(userIngredients.length)}`
    : "Точных совпадений нет, но вот самые близкие идеи";
  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function pluralizeProducts(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return "продукта";
  if (mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14)) return "продуктов";
  return "продуктов";
}

function clearAll() {
  input.value = "";
  input.removeAttribute("aria-invalid");
  message.textContent = "";
  resultsSection.hidden = true;
  resultsGrid.innerHTML = "";
  input.focus();
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const userIngredients = parseIngredients(input.value);
  if (!userIngredients.length) {
    input.setAttribute("aria-invalid", "true");
    message.textContent = "Напишите хотя бы несколько продуктов, которые есть у вас дома.";
    input.focus();
    return;
  }
  input.removeAttribute("aria-invalid");
  message.textContent = "";
  showRecipes(userIngredients);
});

input.addEventListener("input", () => {
  if (input.value.trim()) {
    input.removeAttribute("aria-invalid");
    message.textContent = "";
  }
});
clearButton.addEventListener("click", clearAll);
editButton.addEventListener("click", () => { input.focus(); input.scrollIntoView({ behavior: "smooth", block: "center" }); });
fillExampleButton.addEventListener("click", () => { input.value = "курица, рис, морковь, лук"; input.focus(); message.textContent = ""; input.removeAttribute("aria-invalid"); });
