import { Rooms } from '../views/Rooms';
import { Treatments } from '../views/Treatments';
import { Cart } from '../views/Cart';
import { NavigationButton } from './NavigationButton';
import { LoginSignup } from '../views/LoginSignup';
import { Calculate } from '../views/Calculate';
import './navigation.scss';


// tablica zawiera elementy menu do pokazania na stronie
const navigationItems = [
    //      jaki widok, tekst na guziku
    { component: Rooms, name: 'Rooms 🚪' },
    { component: Treatments, name: 'Treatments 💊' },
    { component: Cart, name: 'Cart 🛒' },
    { component: LoginSignup, name: 'Log in / Sign up 🔒' },
    { component: Calculate, name: 'Calculate Your Funds 💰' },
];


export function Navigation() {

    const nav = document.createElement('nav');

    const navigationButtons = navigationItems.map(item => {
        const { component, name } = item;
        //                     jaki widok, tekst na guziku
        return NavigationButton(component, name);
    });

    navigationButtons[0].classList.add('active-btn');

    nav.append(...navigationButtons);

    return nav;

}