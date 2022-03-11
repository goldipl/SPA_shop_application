import { Room } from "./Room";

export function Rooms() {
    const section = document.createElement('section');

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

    return section;
}