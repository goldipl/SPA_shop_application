import { Treatment } from "./Treatment";

export function Treatments() {

    const section = document.createElement('section');

    section.innerHTML = `
      <h2>Treatments</h2>
      <p id="loading">Loading...</p>
  `;


    fetch('https://my-json-server.typicode.com/goldipl/SPA_shop_application/treatments')
        .then(response => response.json())
        .then(treatments => {
            const articles = treatments.map(treatment => Treatment(treatment));

            section.querySelector('#loading').remove();
            section.append(...articles);
        });


    return section;

}