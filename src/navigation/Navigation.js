import { Rooms } from '../views/Rooms';
import { Treatments } from '../views/Treatments';
import { Cart } from '../views/Cart';
import { NavigationButton } from './NavigationButton';
import { LoginSignup } from '../views/LoginSignup';
import './navigation.scss';


// tablica zawiera elementy menu do pokazania na stronie
const navigationItems = [
    //      jaki widok, tekst na guziku
    { component: Rooms, name: 'Rooms' },
    { component: Treatments, name: 'Treatments' },
    { component: Cart, name: '🛒' },
    { component: LoginSignup, name: 'Log in / Sign up' }
];


export function Navigation() {

    const nav = document.createElement('nav');

    nav.style.backgroundColor = '#0d6efd';
    nav.style.margin = '1em 0';


    const navigationButtons = navigationItems.map(item => {
        const { component, name } = item;
        //                     jaki widok, tekst na guziku
        return NavigationButton(component, name);
    });

    navigationButtons[0].classList.add('active-btn');

    nav.append(...navigationButtons);

    return nav;

}