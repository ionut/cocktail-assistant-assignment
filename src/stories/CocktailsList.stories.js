import { fn } from "storybook/test";

import { CocktailList } from "../components/CocktailList";

export default {
  title: "Example/CocktailsList",
  tags: ["autodocs"],
  render: (args) => CocktailList(args),

  args: { addToShopingList: fn() },
};

export const CocktailsEmpty = {
  args: {
    cocktails: [],
  },
};

export const CocktailsWithItems = {
  args: {
    cocktails: [
      {
        strDrink: "Margarita",
        strInstructions:
          "Place all ingredients in a blender and blend until smooth. This makes one drink.",
        strDrinkThumb: "test",
      },
    ],
  },
};

export const CocktailsWithMultipleItems = {
  args: {
    cocktails: [
      {
        strDrink: "Margarita",
        strInstructions:
          "Place all ingredients in a blender and blend until smooth. This makes one drink.",
        strDrinkThumb: "test",
      },
      {
        strDrink: "Margarita 2",
        strInstructions:
          "Place all ingredients in a blender and blend until smooth. This makes one drink.",
        strDrinkThumb: "test",
      },
      {
        strDrink: "Margarita 3",
        strInstructions:
          "Place all ingredients in a blender and blend until smooth. This makes one drink.",
        strDrinkThumb: "test",
      },
    ],
  },
};
