import { BackButton } from '../../common/BackButton';
import { Rooms } from './Rooms';

export function HouseDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <p id="loading">Loading...</p>
    `;
    // Local version
    fetch(`http://localhost:3000/houses/${id}`)
    // Live - Github Version
    // fetch(`https://my-json-server.typicode.com/goldipl/SPA_shop_application/houses/${id}`)
        .then(response => response.json())
        .then(house => {
            const { name, beds, guests, price, description, img } = house;

            const article = document.createElement('article');

            article.innerHTML = `
                <h1>${name}</h1>

                <hr>
                <img src=${img} width=auto height=150></img>
                <p></p>

                <p>${beds} x 🛏️</p>
                <p>${guests} x 💁</p>

                <p>${description}</p>

                <footer>
                    <strong>${price.toFixed(2)}</strong>
                    ${price < 100 ? '✔️' : '❌'}
                </footer>
            `;

            section.querySelector('#loading').remove();
            section.append(article, BackButton(Rooms));
        });

    return section;
}