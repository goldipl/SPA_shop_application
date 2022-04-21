import {House} from "./House";
import {Router} from "../../router/Router";

export function Houses() {
    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Houses subpage');
    const endpoint = 'Houses';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
        <h2>Houses</h2>
        <p id="loading">Loading...</p>
    `;
    // Live - Github Version
    // fetch('https://my-json-server.typicode.com/goldipl/SPA_shop_application/houses')
    // Local version
    fetch('http://localhost:3000/houses')
        .then(response => response.json())
        .then(houses => {
            const h2 = document.createElement('h2');
            h2.innerText = "Houses";
            const div2 = document.createElement('div');
            div2.classList.add("housesContainer");

            const lis = houses.map(house => House(house));

            div2.append(...lis);

            section.querySelector('#loading').remove();
            section.append(div2); 
        });
 
    return section;
}