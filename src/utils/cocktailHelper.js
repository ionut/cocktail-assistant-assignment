export function extractCocktailData(cocktail) {
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];

    if (ingredient) {
      ingredients.push({
        name: ingredient,
      });
    }
  }

  return ingredients;
}

export function deduplicateIngredients(existingList, ingredients) {
  const newList = [...existingList];
  let addedCount = 0;

  ingredients.forEach((ingredient) => {
    const exists = newList.find(
      (item) => item.name.toLowerCase() === ingredient.name.toLowerCase()
    );

    if (!exists) {
      newList.push(ingredient);
      addedCount++;
    }
  });

  return { newList, addedCount };
}
