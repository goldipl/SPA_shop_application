import { BackButton } from '../../common/BackButton';
import { Rooms } from './Rooms';

export function RoomDetails(id) {
    const section = document.createElement('section');

    section.innerHTML = `
        <p id="loading">Loading...</p>
    `;
    // Local version
    fetch(`http://localhost:3000/rooms/${id}`)
    // Live - Github Version
    // fetch(`https://my-json-server.typicode.com/goldipl/SPA_shop_application/rooms/${id}`)
        .then(response => response.json())
        .then(room => {
            const { name, beds, guests, price, description, img } = room;

            const article = document.createElement('article');

            article.innerHTML = `
                <h1>${name} ${price < 200 ? '⭐⭐' : '⭐⭐⭐'}</h1>

                <hr>
                <img src=${img} width=auto height=150></img>
                <p></p>

                <p>${beds} x beds 🛏️</p>
                <p>${guests} x guests 💁</p>

                <p>${description}</p>

                <footer>
                    <strong>${price.toFixed(2)}</strong> USD
                </footer>
            `;

            section.querySelector('#loading').remove();
            section.append(article, BackButton(Rooms));
        });

    return section;
}