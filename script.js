
const robotText = document.getElementById('robot-text');
const categoryTitle = document.getElementById('category-title');
const recipesList = document.getElementById('recipes-list');
const categoryButtons = document.querySelectorAll('.category-btn');

const greetings = {
    morning: "Bom dia! Receitas leves para começar bem.",
    lunch: "Hora do almoço! Vamos comer saudável?",
    afternoon: "Boa tarde! Hora de um lanchinho saudável.",
    evening: "Boa noite! Receitas leves para o jantar."
};

let currentCategory = 'breakfast';

document.addEventListener('DOMContentLoaded', () => {
    const hour = new Date().getHours();
    if (hour >= 12 && hour < 15) currentCategory = 'lunch';
    else if (hour >= 15 && hour < 18) currentCategory = 'snack';
    else if (hour >= 18 || hour < 6) currentCategory = 'dinner';
    else currentCategory = 'breakfast';

    robotText.textContent = greetings[currentCategory] || greetings.morning;

    loadRecipes(currentCategory);
    categoryButtons.forEach(button => {
        if (button.dataset.category === currentCategory) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentCategory = button.dataset.category;
            loadRecipes(currentCategory);
        });
    });
});

function loadRecipes(category) {
    categoryTitle.textContent = {
        breakfast: "Café da Manhã",
        lunch: "Almoço",
        snack: "Lanche da Tarde",
        dinner: "Jantar"
    }[category] || "Receitas";

    recipesList.innerHTML = "";
    const categoryRecipes = recipes[category];
    categoryRecipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "recipe-card";
        card.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredientes:</strong></p>
            <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
            <p><strong>Preparo:</strong></p>
            <ol>${recipe.preparation.map(step => `<li>${step}</li>`).join('')}</ol>
            <div class="nutrition-info">
                <span>Calorias: ${recipe.nutrition.calories}</span>
                <span>Gorduras: ${recipe.nutrition.fat}g</span>
                <span>Proteínas: ${recipe.nutrition.protein}g</span>
                <span>Carboidratos: ${recipe.nutrition.carbs}g</span>
            </div>
        `;
        recipesList.appendChild(card);
    });
}
