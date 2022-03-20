import {Room} from "./Room";

export function Rooms() {
    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Rooms subpage');


    const urlPath = () => {
        let currentURL = window.location.href;

        window.history.replaceState({}, currentURL, "/" + "Rooms");
    }
   
    urlPath();


    // ----- My own routing ----- end

    section.innerHTML = `
        <h2>Rooms</h2>
        <p id="loading">Loading...</p>
    `;

    fetch('https://my-json-server.typicode.com/goldipl/SPA_shop_application/rooms')
        .then(response => response.json())
        .then(rooms => {
            const div = document.createElement('div');

            const lis = rooms.map(room => Room(room));

            div.append(...lis);

            section.querySelector('#loading').remove();
            section.append(div);
        });
    console.log('Rooms subpage');
    return section;
}