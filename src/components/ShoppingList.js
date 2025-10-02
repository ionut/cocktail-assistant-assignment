import { html, virtual } from "@pionjs/pion";

export const ShoppingList = virtual(
  ({ shoppingList, removeFromShoppingList }) => {
    return html`
      <ul class="shopping-list">
        ${shoppingList.map(
          (item) => html`
            <li class="shopping-item">
              <span class="item-text">
                ${item.measure
                  ? html`<span class="measure">${item.measure}</span>`
                  : ""}
                ${item.name}
              </span>
              <button
                class="remove-button"
                @click=${() => removeFromShoppingList(item.name)}
              >
                ×
              </button>
            </li>
          `
        )}
      </ul>
      <style>
        .shopping-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .shopping-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0.5rem;
          border-bottom: 1px solid #e2ded0;
          gap: 0.75rem;
          transition: background 0.2s ease;
        }

        .shopping-item:hover {
          background: #f9f8f6;
        }

        .shopping-item:last-child {
          border-bottom: none;
        }

        .item-text {
          flex: 1;
          color: #4e4f50;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        .measure {
          color: #647c90;
          font-weight: 500;
          margin-right: 0.25rem;
        }

        .remove-button {
          background: #dc3545;
          color: white;
          border: none;
          border-radius: 4px;
          width: 28px;
          height: 28px;
          cursor: pointer;
          font-size: 20px;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .remove-button:hover {
          background: #c82333;
          transform: scale(1.1);
        }

        .remove-button:active {
          transform: scale(0.95);
        }
      </style>
    `;
  }
);
