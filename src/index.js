import { html, component, useState, useRef } from "@pionjs/pion";
import "./components/SearchBar";
import { SearchBar } from "./components/SearchBar";
import { CocktailList } from "./components/CocktailList";
import { Toaster } from "./components/Toaster";
import { ShoppingList } from "./components/ShoppingList";
import {
  deduplicateIngredients,
  extractCocktailData,
} from "./utils/cocktailHelper";
import { useToaster } from "./hooks/useToaster";
import { searchCocktails } from "./api/cocktailApi";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const { message: toasterMessage, showToast } = useToaster(5000);

  const handleSearch = async (query) => {
    setIsSearching(true);
    showToast("Searching...");
    try {
      const drinks = await searchCocktails(query);
      setCocktails(drinks);
      showToast(
        drinks.length > 0 ? "Here are the results." : "No results found."
      );
    } catch (error) {
      showToast("Error searching cocktails.");
      console.error(error);
    } finally {
      setIsSearching(false);
    }
  };

  const addToShopingList = (cocktail) => {
    const ingredients = extractCocktailData(cocktail);

    setShoppingList((prevList) => {
      const { newList, addedCount } = deduplicateIngredients(
        prevList,
        ingredients
      );

      showToast("Ingredients added to shopping list.");

      return newList;
    });
  };

  const removeFromShoppingList = (ingredientName) => {
    setShoppingList((prevList) =>
      prevList.filter((item) => item.name !== ingredientName)
    );
    showToast("Ingredient removed from shopping list.");
  };

  const handlePrint = () => {
    window.print();
  };

  return html`<main>
      <section class="container">
        <div class="search-section">
          ${SearchBar({ onSearch: handleSearch })}
        </div>
        <div class="main-section">
          <div class="results-section">
            ${CocktailList({ cocktails, addToShopingList })}
          </div>
          <div class="shopping-section">
            <h2 class="list-header">Shopping List</h2>
            ${ShoppingList({ shoppingList, removeFromShoppingList })}
            <button
              class="print-button"
              @click=${handlePrint}
              ?disabled=${shoppingList.length === 0}
            >
              Print
            </button>
          </div>
        </div>
      </section>
    </main>
    ${toasterMessage ? Toaster({ toasterMessage }) : ""}
    <style>
      h1,
      h2,
      h3,
      h4,
      h5,
      ul {
        margin: 0;
      }
      .container {
        max-width: 64rem;
        margin: 0 auto;
        padding-block: 2rem;
      }
      .search-section {
        margin-bottom: 2rem;
      }
      .main-section {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 1rem;
      }
      .results-section {
        grid-column: span 2;
      }
      .shopping-section {
        position: sticky;
        top: 2rem;
        border: 1px solid #e2ded0;
        border-radius: 0.5rem;
        padding: 1rem;
      }
      .list-header {
        color: #4e4f50;
        font-size: 1.2rem;
      }
      @media (min-width: 768px) {
        .main-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          align-items: start;
        }
      }
      @media print {
        /* Ascunde tot except shopping list */
        .search-section,
        .results-section,
        h1,
        .print-button,
        .remove-button {
          display: none !important;
        }

        .shopping-section {
          border: none;
          padding: 0;
        }
      }
    </style>`;
}

customElements.define("cocktail-assistant", component(App));
