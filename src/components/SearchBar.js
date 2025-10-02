import { html, useState, virtual } from "@pionjs/pion";

export const SearchBar = virtual(({ onSearch }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // const query = e.target.cocktail.value;
    if (!query.trim()) return;
    onSearch(query);
  };
  return html`<form @submit=${handleSubmit}>
      <input
        type="text"
        name="cocktail"
        placeholder="Search for a cocktail"
        .value=${query}
        @input=${(e) => setQuery(e.target.value)}
      />
      <button type="submit" class="search-button">Search</button>
    </form>
    <style>
      form {
        display: flex;
        gap: 1rem;
        height: 3rem;
      }
      input {
        border: 1px solid #e2ded0;
        padding-inline: 1rem;
        flex: 1;
      }

      .search-button {
        background-color: #647c90;
        color: #e2ded0;
        padding-inline: 2rem;
        font-size: 1.3rem;
        border: none;
        cursor: pointer;
      }
    </style>`;
});
