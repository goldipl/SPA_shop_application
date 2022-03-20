import {Treatment} from "./Treatment";

export function Treatments() {

    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Treatments subpage');

    const urlPath = () => {
        let currentURL = window.location.href;

        window.history.replaceState({}, currentURL, "/" + "Treatments");
    }

    urlPath();

    // ----- My own routing ----- end

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
    console.log('Treatments subpage');

    return section;

}