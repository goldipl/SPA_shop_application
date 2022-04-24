import {Router} from "../../router/Router";
import "./homepage.scss";
import { Rooms } from '../roomsView/Rooms';
import { Houses } from '../housesView/Houses';

export function Homepage() {

    const sectionHomepage = document.createElement('section');
    sectionHomepage.classList.add("homePage");

    // ----- My own routing ----- start
    console.log('homePage subpage');
    const endpoint = 'homepage';

    Router(endpoint);
    // ----- My own routing ----- end

    sectionHomepage.innerHTML = `
    <h2 class="homepageTitle">Welcome to our homepage</h2>
    <p>Our SPA offers multiple places to rest</p>
    `;

    function RoomsButton() {
        const roomsButton = document.createElement('button');
        roomsButton.setAttribute('type', 'button');
        roomsButton.innerText = '🡺 Rooms 🡸';
        roomsButton.classList.add('btn', 'btn-primary');
        roomsButton.style.marginBottom = '1em';
        roomsButton.style.fontFamily = "Lobster";
        roomsButton.style.fontSize = "24px";
        roomsButton.style.marginRight = "16px";
    
        const navigateEventToRooms = new CustomEvent('navigate', {
            detail: () => Rooms()
        });
    
        roomsButton.addEventListener('click', () => {
            document.body.dispatchEvent(navigateEventToRooms);
        });
    
        return roomsButton;
    }

    function HousesButton() {
        const housesButton = document.createElement('button');
        housesButton.setAttribute('type', 'button');
        housesButton.innerText = '🡺 Houses 🡸';
        housesButton.classList.add('btn', 'btn-warning');
        housesButton.style.marginBottom = '1em';
        housesButton.style.fontFamily = "Lobster";
        housesButton.style.fontSize = "24px";
    
        const navigateEventToHouses = new CustomEvent('navigate', {
            detail: () => Houses()
        });
    
        housesButton.addEventListener('click', () => {
            document.body.dispatchEvent(navigateEventToHouses);
        });
    
        return housesButton;
    }

    sectionHomepage.append(RoomsButton());
    sectionHomepage.append(HousesButton());

    return sectionHomepage;

}