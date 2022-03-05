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
    const li = document.createElement('li');

    li.innerHTML = `
        <h4>${name}</h4>
        <p>Price: ${price} USD</p>
    `;

    li.append(AddToCartButton(room));
    li.append(SeeMoreButton(id));

    return li;
}
