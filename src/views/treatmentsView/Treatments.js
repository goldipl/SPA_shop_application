import {Treatment} from "./Treatment";
import {Router} from "./../../router/Router";

export function Treatments() {

    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Treatments subpage');
    const endpoint = 'Treatments';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
      <h2>Treatments</h2>
      <p id="loading">Loading...</p>
  `;

    // Live - Github Version
    // fetch('https://my-json-server.typicode.com/goldipl/SPA_shop_application/treatments')
    // Local version
    fetch('http://localhost:3000/treatments')
        .then(response => response.json())
        .then(treatments => {
            const articles = treatments.map(treatment => Treatment(treatment));

            section.querySelector('#loading').remove();
            section.append(...articles);
        });

    return section;
}