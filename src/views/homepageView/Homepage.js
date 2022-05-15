import {Router} from "../../router/Router";
import "./homepage.scss";
import { Rooms } from '../roomsView/Rooms';
import { Houses } from '../housesView/Houses';
import { Treatments } from '../treatmentsView/Treatments';

export function Homepage() {

    const sectionHomepage = document.createElement('section');
    sectionHomepage.classList.add("homePage");

    // ----- My own routing ----- start
    console.log('homePage subpage');
    const endpoint = 'homepage';

    Router(endpoint);
    // ----- My own routing ----- end

    sectionHomepage.innerHTML = `
    <img class="bigImage" src="https://raw.githubusercontent.com/goldipl/SPA_shop_application/master/src/images/backgroundimage.jpg" width=1304 height=307><br><br>
    <h2 class="homepageTitle">Welcome to our homepage</h2>
    <p>Our SPA offers multiple places to rest</p>
    `;

    function RoomsButton() {
        const roomsButton = document.createElement('button');
        roomsButton.setAttribute('type', 'button');
        roomsButton.innerHTML = `
            <div><img src="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg" width="auto" height="150">Rooms</div>`;
        roomsButton.classList.add('btn', 'btn-primary', 'hero-buttons');
        roomsButton.style.marginBottom = '1em';
        roomsButton.style.fontFamily = "Merriweather";
        roomsButton.style.fontSize = "24px";
        roomsButton.style.marginRight = "16px";
        roomsButton.style.borderRadius = "24px";
    
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
        housesButton.innerHTML = `
            <div><img src="https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg" width="auto" height="150">Houses</div>`;
        housesButton.classList.add('btn', 'btn-primary', 'hero-buttons');
        housesButton.style.marginBottom = '1em';
        housesButton.style.fontFamily = "Merriweather";
        housesButton.style.fontSize = "24px";
        housesButton.style.borderRadius = "24px";
    
        const navigateEventToHouses = new CustomEvent('navigate', {
            detail: () => Houses()
        });
    
        housesButton.addEventListener('click', () => {
            document.body.dispatchEvent(navigateEventToHouses);
        });
    
        return housesButton;
    }

    function TreatmentsInfoText() {
        const treatmentsInfoText = document.createElement('p');
        treatmentsInfoText.innerText = `
            We also have a lot of treatments in our offer. Check it out.
        `;
        return treatmentsInfoText;
    };
    
    function TreatmentsButton() {
        const treatmentsButton = document.createElement('button');
        treatmentsButton.setAttribute('type', 'button');
        treatmentsButton.innerHTML = `
            <div><img src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg" width="auto" height="150">Treatments</div>`;
        treatmentsButton.classList.add('btn', 'btn-primary', 'hero-buttons');
        treatmentsButton.style.marginBottom = '1em';
        treatmentsButton.style.fontFamily = "Merriweather";
        treatmentsButton.style.fontSize = "24px";
        treatmentsButton.style.borderRadius = "24px";
    
        const navigateEventToTreatments = new CustomEvent('navigate', {
            detail: () => Treatments()
        });
    
        treatmentsButton.addEventListener('click', () => {
            document.body.dispatchEvent(navigateEventToTreatments);
        });
    
        return treatmentsButton;
    }

    sectionHomepage.append(RoomsButton());
    sectionHomepage.append(HousesButton());
    sectionHomepage.append(TreatmentsInfoText());
    sectionHomepage.append(TreatmentsButton());

    return sectionHomepage;

}