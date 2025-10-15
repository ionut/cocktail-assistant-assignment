import { fn } from "storybook/test";
import { expect } from "storybook/test";
import { SearchBar } from "../components/SearchBar";

export default {
  title: "Example/SearchBar",
  tags: ["autodocs"],
  render: (args) => SearchBar(args),

  args: { onSearch: fn() },
};

export const EmptySearchBarInput = {
  play: async ({ args, canvas, userEvent, step }) => {
    await step("Empty input", async () => {
      await userEvent.click(canvas.getByRole("button", { name: "Search" }));

      await expect(args.onSearch).not.toHaveBeenCalled();
    });

    await step("Empty string", async () => {
      await userEvent.type(
        canvas.getByPlaceholderText("Search for a cocktail"),
        "       "
      );
      await userEvent.click(canvas.getByRole("button", { name: "Search" }));

      await expect(args.onSearch).not.toHaveBeenCalled();
    });
  },
};

export const FilledSearchBarInput = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.type(
      canvas.getByPlaceholderText("Search for a cocktail"),
      "marga"
    );

    await userEvent.click(canvas.getByRole("button", { name: "Search" }));

    await expect(args.onSearch).toHaveBeenCalled();
  },
};
