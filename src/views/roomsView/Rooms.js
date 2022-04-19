import {Room} from "./Room";
import {House} from "./House";
import {Router} from "../../router/Router";

export function Rooms() {
    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Rooms subpage');
    const endpoint = 'Rooms';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
        <h2>Rooms</h2>
        <p id="loading">Loading...</p>
    `;
    // Live - Github Version
    // fetch('https://my-json-server.typicode.com/goldipl/SPA_shop_application/rooms')
    // Local version
    fetch('http://localhost:3000/rooms')
        .then(response => response.json())
        .then(rooms => {
            const div = document.createElement('div');
            div.classList.add("roomsContainer");

            const lis = rooms.map(room => Room(room));

            div.append(...lis);

            section.querySelector('#loading').remove();
            section.append(div);
        });

        fetch('http://localhost:3000/houses')
        .then(response => response.json())
        .then(houses => {
            const h2 = document.createElement('h2');
            h2.innerText = "Houses";
            const div2 = document.createElement('div');
            div2.classList.add("housesContainer");

            const lis = houses.map(house => House(house));

            div2.append(...lis);

            section.append(h2); 
            section.append(div2); 
        });
 
    return section;
}