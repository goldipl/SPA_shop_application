import { RoomDetails } from './RoomDetails';
import { AddToCartButton } from '../../common/AddToCartButton';
import "./room.scss"

function SeeMoreButton(id) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.innerText = 'See More';
    button.classList.add('btn', 'btn-primary');
    button.style.marginBottom = '1em';

    const navigateEvent = new CustomEvent('navigate', {
        detail: () => RoomDetails(id)
    });

    button.addEventListener('click', () => {
        document.body.dispatchEvent(navigateEvent);
    });

    return button;
}


export function Room(room) {
    const { id, name, price } = room;
    const article = document.createElement('article');
    article.className = 'roomArticle';

    article.innerHTML = `
        <h4>${name}</h4>
        <p>Price: <strong>${price.toFixed(2)}</strong> USD</p>
        ${price < 200 ? '⭐⭐' : '⭐⭐⭐'}
        <br><br>
    `;

    article.append(AddToCartButton(room));
    article.append(SeeMoreButton(id));

    return article;
}
