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
    <img src="https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg" width=600 height=auto><br><br>
    <p>Our SPA offers multiple places to rest</p>
    `;

    function RoomsButton() {
        const roomsButton = document.createElement('button');
        roomsButton.setAttribute('type', 'button');
        roomsButton.innerText = '🡺 Rooms 🡸';
        roomsButton.classList.add('btn', 'btn-primary');
        roomsButton.style.marginBottom = '1em';
        roomsButton.style.fontFamily = "Merriweather";
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
        housesButton.style.fontFamily = "Merriweather";
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