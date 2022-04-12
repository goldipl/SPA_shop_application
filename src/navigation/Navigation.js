import { Rooms } from '../views/roomsView/Rooms';
import { Treatments } from '../views/treatmentsView/Treatments';
import { Cart } from '../views/cartView/Cart';
import { NavigationButton } from './NavigationButton';
import { LoginSignup } from '../views/loginSignupView/LoginSignup';
import { Calculate } from '../views/calculateView/Calculate';
import { Reservations } from '../views/reservationView/Reservations';
import './navigation.scss';


// tablica zawiera elementy menu do pokazania na stronie
const navigationItems = [
    //      jaki widok, tekst na guziku
    { component: Rooms, name: 'Rooms 🚪' },
    { component: Treatments, name: 'Treatments 💊' },
    { component: Cart, name: 'Cart 🛒' },
    { component: LoginSignup, name: 'Log in / Sign up 🔒' },
    { component: Calculate, name: 'Calculate Your Funds 💰' },
    { component: Reservations, name: 'Reservations 🔑' }
];


export function Navigation() {

    const nav = document.createElement('nav');

    const navigationButtons = navigationItems.map(item => {
        const { component, name } = item;
        //                     jaki widok, tekst na guziku
        return NavigationButton(component, name);
    });

    navigationButtons[0].classList.add('active-btn');

    nav.innerHTML = `
    <div class="logoSPAText">Welcome to our <span>IT SPA</span></div>
    `;

    nav.append(...navigationButtons);

    return nav;

}