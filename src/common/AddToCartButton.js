import { cartManager } from '../cart/CartManager';

export function AddToCartButton(item) {
   const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-info');
    button.style.marginBottom = '1em';
    button.style.marginRight = '1em';
    button.innerText = 'Add to 🛒';

    button.addEventListener('click', () => {
        cartManager.add(item);
    });

    return button;
}