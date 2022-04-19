import { AddToCartButton } from '../../common/AddToCartButton';
import "./treatment.scss"

export function Treatment(treatment) {
    const { name, area, time, price } = treatment;
    const article = document.createElement('article');

    article.innerHTML = `
    <h4>${name}</h4>
    <p>Area: ${area}</p>
    <p>Time: ${time} minutes</p>
    <footer>
        <strong>${price.toFixed(2)}</strong> USD
        ${price < 100 ? '💰' : '💰💰💰'}
        <br><br>
    </footer>
`;

    article.append(AddToCartButton(treatment))

    return article;
};