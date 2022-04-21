import { BackButton } from '../../common/BackButton';
import { Houses } from '../housesView/Houses';

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
            const { name, beds, guests, price, description, img, rooms, bathrooms } = house;

            const article = document.createElement('article');

            article.innerHTML = `
                <h2 style="text-decoration: none !important">${name} ${price < 750 ? '⭐⭐⭐⭐' : '⭐⭐⭐⭐⭐'}</h2>

                <hr>
                <img src=${img} width=auto height=150></img>
                <p></p>

                <p>${beds} x beds 🛏️</p>
                <p>${guests} x guests 💁</p>
                <p>${rooms} x rooms 🚪</p>
                <p>${bathrooms} x bathrooms 🚽</p>

                <p>${description}</p>

                <footer>
                    <strong>${price.toFixed(2)}</strong> USD
                </footer>
            `;

            section.querySelector('#loading').remove();
            section.append(article, BackButton(Houses));
        });

    return section;
}