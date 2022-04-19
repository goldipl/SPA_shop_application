import {Treatment} from "./Treatment";
import {Router} from "./../../router/Router";
import "./treatment.scss"

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
            const treatmentsContainer = document.createElement('div');
            treatmentsContainer.classList.add("treatmentsSection");
            const articles = treatments.map(treatment => Treatment(treatment));

            section.querySelector('#loading').remove();
            treatmentsContainer.append(...articles);
            section.append(treatmentsContainer);
        });

    return section;
}