import { html, virtual } from "@pionjs/pion";

export const Toaster = ({ toasterMessage }) => {
  return html`<div class="toaster">${toasterMessage}</div>
    <style>
      .toaster {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #647c90;
        color: #e2ded0;
        padding: 15px 20px;
        border-radius: 4px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease;
      }

      @keyframes slideIn {
        from {
          transform: translateX(400px);
        }
        to {
          transform: translateX(0);
        }
      }
    </style>`;
};
