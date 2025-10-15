import { expect, fn } from "storybook/test";

import { ShoppingList } from "../components/ShoppingList";

export default {
  title: "Example/ShoppingList",
  tags: ["autodocs"],
  render: (args) => ShoppingList(args),

  args: { removeFromShoppingList: fn() },
};

export const ShoppingListEmpty = {
  args: {
    shoppingList: [],
  },
};

export const ShoppingListWithItems = {
  args: {
    shoppingList: [{ name: "name", measure: "1/2oz" }],
  },
  play: async ({ args, canvas, userEvent }) => {
    const shoppingList = canvas.getAllByRole("shopping-item");

    await expect(shoppingList).toHaveLength(1);

    const submitButton = canvas.getByRole("button");
    await userEvent.click(submitButton);
    await expect(args.removeFromShoppingList).toHaveBeenCalledWith("name");
  },
};

export const ShoppingListWithMultipleItems = {
  args: {
    shoppingList: [
      { name: "Item", measure: "1/2oz" },
      { name: "Item 2", measure: "1/2oz" },
      { name: "Item 3", measure: "1/2oz" },
    ],
  },

  play: async ({ args, canvas }) => {
    const shoppingList = canvas.getAllByRole("shopping-item");

    await expect(shoppingList).toHaveLength(3);

    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(3);
  },
};
