import {cartManager} from '../cart/CartManager';
import {RemoveFromCartButton} from '../common/RemoveFromCartButton';

const add = (a, b) => a + b;
const calculateTotal = (items) => items.map(item => item.price).reduce(add, 0).toFixed(2);


export function Cart() {

    // ----- My own routing ----- start
    console.log('Cart subpage');

    const urlPath = () => {
        let currentURL = window.location.href + 'Cart';
        window.history.pushState({ path: currentURL }, '', currentURL);
        console.log(currentURL);  
    }

    urlPath();

    // ----- My own routing ----- end

    const section = document.createElement('section');

    section.innerHTML = `
        <h2>Cart</h2>
    `;

    const cartItems = cartManager.getAll();

    const table = document.createElement('table');
    table.classList.add('table');

    const tableHead = document.createElement('tr');
    tableHead.innerHTML = `
        <th>Item</th>
        <th>Price</th>
    `;

    const tableRows = cartItems.map(item => {
        const tr = document.createElement('tr');
        
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)}</td>
            <td></td>
        `;

        tr.lastElementChild.append(RemoveFromCartButton(item));

        return tr;
    });

    const tableFooter = document.createElement('tr');
    tableFooter.innerHTML = `
        <td><strong>Suma:</strong></td>
        <td><strong> ${calculateTotal(cartItems)}</strong></td>
        <td></td>
    `;

    table.append(tableHead, ...tableRows, tableFooter);
    section.append(table);

    return section;
}
