import { Treatment } from "./Treatment";

export function Treatments() {

    const section = document.createElement('section');

    section.innerHTML = `
      <h2>Treatments</h2>
      <p id="loading">Loading...</p>
  `;


    fetch('http://localhost:3000/treatments')
        .then(response => response.json())
        .then(treatments => {
            const articles = treatments.map(treatment => Treatment(treatment));

            section.querySelector('#loading').remove();
            section.append(...articles);
        });


    return section;

}