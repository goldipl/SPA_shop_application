import { RoomDetails } from './RoomDetails';
import { AddToCartButton } from '../common/AddToCartButton';

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

    article.style.margin = '0.5em 0';
    article.style.padding = '1em 2em';
    article.style.backgroundColor = 'rgb(13 110 253 / 10%)';

    article.innerHTML = `
        <h4>${name}</h4>
        <p>Price: ${price} USD</p>
    `;

    article.append(AddToCartButton(room));
    article.append(SeeMoreButton(id));

    return article;
}
