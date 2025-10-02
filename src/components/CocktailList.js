import { html, virtual } from "@pionjs/pion";

const CocktailCard = virtual(({ cocktail, addToShopingList }) => {
  return html`<li class="cocktail-card">
      <img
        src="${cocktail.strDrinkThumb}"
        alt="${cocktail.strDrink} image"
        class="cocktail-image"
      />
      <div>
        <h3>${cocktail.strDrink}</h3>
        <p>${cocktail.strInstructions}</p>
      </div>
      <button class="add-button" @click=${() => addToShopingList(cocktail)}>
        +
      </button>
    </li>
    <style>
      .cocktail-card {
        border: 1px solid #e2ded0;
        border-radius: 0.5rem;
        padding: 1rem;
        display: grid;
        gap: 1rem;
        grid-template-columns: 100px 1fr auto;
      }
      .cocktail-image {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }

      .add-button {
        width: 40px;
        height: 40px;
        background: #28a745;
        color: white;
        border: none;
        cursor: pointer;
        font-size: 20px;
        line-height: 1;
        border-radius: 4px;
        align-self: end;
        transition: all 0.2s ease;
      }

      .add-button:hover {
        background: #67cc7eff;
        transform: scale(1.1);
      }

      .add-button:active {
        transform: scale(0.95);
      }
    </style> `;
});

export const CocktailList = virtual(({ cocktails, addToShopingList }) => {
  return html`<ul>
      ${cocktails.map((cocktail) =>
        CocktailCard({ cocktail, addToShopingList })
      )}
    </ul>
    <style>
      ul {
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    </style> `;
});
