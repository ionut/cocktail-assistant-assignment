import { fn } from "storybook/test";
import { expect } from "storybook/test";
import { SearchBar } from "../components/SearchBar";

export default {
  title: "Example/SearchBar",
  tags: ["autodocs"],
  render: (args) => SearchBar(args),

  args: { onSearch: fn() },
};

export const EmptySearchBarInput = {};

export const FilledSearchBarInput = {
  play: async ({ args, canvas, userEvent }) => {
    console.log(canvas);
    await userEvent.type(
      canvas.getByPlaceholderText("Search for a cocktail"),
      "marga"
    );

    await userEvent.click(canvas.getByRole("button", { name: "Search" }));

    await expect(args.onSearch).toHaveBeenCalled();
  },
};
