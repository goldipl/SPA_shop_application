import { AddToCartButton } from '../../common/AddToCartButton';
import "./house.scss"

function SeeMoreButton(id) {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.innerText = 'See More';
    button.classList.add('btn', 'btn-primary');
    button.style.marginBottom = '1em';

    const navigateEvent = new CustomEvent('navigate', {
        detail: () => HouseDetails(id)
    });

    button.addEventListener('click', () => {
        document.body.dispatchEvent(navigateEvent);
    });

    return button;
}


export function House(house) {
    const { id, name, price, img } = house;
    const article = document.createElement('article');
    article.className = 'houseArticle';

    article.innerHTML = `
        <img src=${img} width=auto height=150></img>
        <br><br>
        <h4>${name}</h4>
        <p>Price: <strong>${price.toFixed(2)}</strong> USD</p>
        ${price < 750 ? '⭐⭐⭐⭐' : '⭐⭐⭐⭐⭐'}
        <br><br>
    `;

    article.append(AddToCartButton(house));

    return article;
}
