import { Rooms } from '../views/roomsView/Rooms';
import { Treatments } from '../views/treatmentsView/Treatments';
import { Cart } from '../views/cartView/CartAndReservation';
import { NavigationButton } from './NavigationButton';
import { LoginSignup } from '../views/loginSignupView/LoginSignup';
import { Calculate } from '../views/calculateView/Calculate';
import './navigation.scss';
import { Houses } from '../views/housesView/Houses';
import { Homepage } from '../views/homepageView/Homepage';


// tablica zawiera elementy menu do pokazania na stronie
const navigationItems = [
    //      jaki widok, tekst na guziku
    { component: Homepage, name: 'Homepage 🍃' },
    { component: Rooms, name: 'Rooms 🚪' },
    { component: Houses, name: 'Houses 🏠' },
    { component: Treatments, name: 'Treatments 💊' },
    { component: Cart, name: 'Cart 🛒 & Reservation 🔑' },
    { component: LoginSignup, name: 'Log in / Sign up 🔒' },
    { component: Calculate, name: 'Calculate Your Funds 💰' },
    { name: 'Cart Quantity 🔢' },
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
    <div class="logoSPAText" style="text-align: center;margin-bottom: 16px;">SPA<span>Center</span>
    <span class="text" style="font-size: 12px;position: absolute;top: 62px;left: 0;right: 0;margin-left: 14px;">Spend your free time with us</span></div>
    `;

    nav.append(...navigationButtons);

    return nav;

}