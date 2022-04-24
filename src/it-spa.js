import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import { Homepage } from './views/homepageView/Homepage';
import { Navigation } from './navigation/Navigation';
import { CartQuantity } from './cart/CartQuantity';

window.onload = CartQuantity;

const main = document.querySelector('main');

//wstawiamy nawigację przed element main
main.before(Navigation());

//na start wstawiamy widok z strona glowna
main.append(Homepage());

document.body.addEventListener('navigate', e => {
    const { detail: Component } = e;

    main.innerHTML = '';

    //wstawiamy nawigację do elementu main
    main.append(Component());
});