import { cartManager } from '../cart/CartManager';
import { Cart } from '../views/cartView/CartAndReservation';

export function RemoveFromCartButton(item) {
   const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn');
    button.innerText = '🗑️';

     button.addEventListener('click', () => {
        cartManager.remove(item);

        const navigateEvent = new CustomEvent('navigate', {
            detail: Cart
        });

        document.body.dispatchEvent(navigateEvent);
    });

    return button;
}