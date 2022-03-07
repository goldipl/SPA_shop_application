import { AddToCartButton } from '../common/AddToCartButton';

export function Treatment(treatment) {
    const { name, area, time, price } = treatment;
    const article = document.createElement('article');

    article.style.margin = '0.5em 0';
    article.style.padding = '1em 2em';
    article.style.backgroundColor = 'rgb(13 110 253 / 10%)';

    article.innerHTML = `
    <h4>${name}</h4>
    <p>Area: ${area}</p>
    <p>Time: ${time} minutes</p>
    <footer>
        <strong>${price.toFixed(2)}</strong>
        ${price < 100 ? '✔️' : '❌'}
    </footer>
`;

    article.append(AddToCartButton(treatment))

    return article;
};