import {Room} from "./Room";
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
 
    return section;
}