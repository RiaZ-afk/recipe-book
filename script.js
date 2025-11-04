const recipes = [
    {
        title: "Classic Chocolate Chip Cookies",
        time: "30 min",
        servings: "24 cookies",
        difficulty: "Easy",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup packed brown sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Mix flour, baking soda, and salt in a small bowl.",
            "Beat butter, granulated sugar, brown sugar, and vanilla in a large mixer bowl until creamy.",
            "Add eggs, one at a time, beating well after each addition.",
            "Gradually beat in flour mixture.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons onto ungreased baking sheets.",
            "Bake for 9 to 11 minutes or until golden brown.",
            "Cool on baking sheets for 2 minutes; remove to wire racks to cool completely."
        ]
    },
    {
        title: "Spaghetti Carbonara",
        time: "25 min",
        servings: "4 servings",
        difficulty: "Medium",
        ingredients: [
            "1 pound spaghetti",
            "8 ounces pancetta or bacon, diced",
            "4 large eggs",
            "1 cup grated Parmesan cheese",
            "1/2 cup grated Pecorino Romano cheese",
            "4 cloves garlic, minced",
            "Freshly ground black pepper",
            "Salt to taste",
            "Fresh parsley, chopped (optional)"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
            "While pasta cooks, heat a large skillet over medium heat and cook pancetta until crispy.",
            "In a bowl, whisk together eggs, both cheeses, and black pepper.",
            "Drain pasta, reserving 1 cup of pasta water.",
            "Add hot pasta to the skillet with pancetta, remove from heat.",
            "Quickly toss pasta with egg mixture, adding pasta water as needed to create a creamy sauce.",
            "Serve immediately with extra cheese and pepper on top."
        ]
    },
    {
        title: "Grilled Salmon with Lemon Butter",
        time: "20 min",
        servings: "4 servings",
        difficulty: "Easy",
        ingredients: [
            "4 salmon fillets (6 oz each)",
            "4 tablespoons butter, melted",
            "2 lemons, juiced and zested",
            "3 cloves garlic, minced",
            "2 tablespoons fresh dill, chopped",
            "Salt and pepper to taste",
            "Olive oil for grilling",
            "Lemon wedges for serving"
        ],
        instructions: [
            "Preheat grill to medium-high heat.",
            "Pat salmon fillets dry and season with salt and pepper.",
            "Mix melted butter, lemon juice, lemon zest, garlic, and dill in a small bowl.",
            "Brush grill grates with olive oil.",
            "Place salmon on grill, skin-side down, and cook for 5-6 minutes.",
            "Flip carefully and cook for another 4-5 minutes until fish flakes easily.",
            "Brush with lemon butter mixture during the last 2 minutes of cooking.",
            "Serve with lemon wedges and drizzle remaining butter sauce over the top."
        ]
    },
    {
        title: "Vegetarian Buddha Bowl",
        time: "35 min",
        servings: "2 servings",
        difficulty: "Easy",
        ingredients: [
            "1 cup quinoa",
            "1 sweet potato, cubed",
            "1 cup chickpeas, drained and rinsed",
            "2 cups kale, chopped",
            "1 avocado, sliced",
            "1/2 cup cherry tomatoes, halved",
            "2 tablespoons olive oil",
            "1 tablespoon tahini",
            "1 lemon, juiced",
            "Salt and pepper to taste",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Cook quinoa according to package directions and set aside.",
            "Toss sweet potato cubes with 1 tablespoon olive oil, salt, and pepper.",
            "Roast sweet potatoes for 20-25 minutes until tender.",
            "In a bowl, massage kale with remaining olive oil and lemon juice.",
            "Heat chickpeas in a pan until slightly crispy.",
            "Divide quinoa between two bowls.",
            "Arrange sweet potatoes, chickpeas, kale, avocado, and tomatoes on top.",
            "Drizzle with tahini and sprinkle with sesame seeds."
        ]
    },
    {
        title: "Beef Stroganoff",
        time: "40 min",
        servings: "4 servings",
        difficulty: "Medium",
        ingredients: [
            "1 pound beef sirloin, cut into strips",
            "8 ounces egg noodles",
            "1 tablespoon butter",
            "1 onion, sliced",
            "8 ounces mushrooms, sliced",
            "2 cloves garlic, minced",
            "2 tablespoons all-purpose flour",
            "1 1/2 cups beef broth",
            "1 cup sour cream",
            "2 tablespoons Worcestershire sauce",
            "Salt and pepper to taste",
            "Fresh parsley, chopped"
        ],
        instructions: [
            "Cook egg noodles according to package directions and set aside.",
            "Season beef strips with salt and pepper.",
            "Heat butter in a large skillet over medium-high heat.",
            "Cook beef until browned, then remove and set aside.",
            "Add onions and mushrooms to the same pan and cook until tender.",
            "Add garlic and cook for 1 minute more.",
            "Sprinkle flour over vegetables and stir.",
            "Gradually add beef broth, stirring constantly.",
            "Return beef to the pan and simmer for 10 minutes.",
            "Remove from heat and stir in sour cream and Worcestershire sauce.",
            "Serve over noodles and garnish with fresh parsley."
        ]
    }
];

let currentRecipeIndex = 0;

function displayRecipe(index) {
    const recipe = recipes[index];
    const recipeCard = document.getElementById('recipeCard');
    
    recipeCard.innerHTML = `
        <h2 class="recipe-title">${recipe.title}</h2>
        <div class="recipe-meta">
            <div class="meta-item">
                <strong>⏱️ Time:</strong>
                <span>${recipe.time}</span>
            </div>
            <div class="meta-item">
                <strong>🍽️ Servings:</strong>
                <span>${recipe.servings}</span>
            </div>
            <div class="meta-item">
                <strong>📊 Difficulty:</strong>
                <span>${recipe.difficulty}</span>
            </div>
        </div>
        
        <div class="recipe-section">
            <h3 class="section-title">Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        
        <div class="recipe-section">
            <h3 class="section-title">Instructions</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>
    `;
    
    // Update recipe indicator
    document.getElementById('recipeNumber').textContent = index + 1;
    document.getElementById('totalRecipes').textContent = recipes.length;
    
    // Update button states
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').disabled = index === recipes.length - 1;
}

function nextRecipe() {
    if (currentRecipeIndex < recipes.length - 1) {
        currentRecipeIndex++;
        displayRecipe(currentRecipeIndex);
    }
}

function prevRecipe() {
    if (currentRecipeIndex > 0) {
        currentRecipeIndex--;
        displayRecipe(currentRecipeIndex);
    }
}

// Event listeners
document.getElementById('nextBtn').addEventListener('click', nextRecipe);
document.getElementById('prevBtn').addEventListener('click', prevRecipe);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevRecipe();
    } else if (e.key === 'ArrowRight') {
        nextRecipe();
    }
});

// Initialize with first recipe
displayRecipe(0);

