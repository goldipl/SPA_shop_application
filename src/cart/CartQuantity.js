export function CartQuantity() {
    let cartButton = document.querySelector('nav button:nth-child(9)');

    cartButton.addEventListener("mouseenter", (e) => {
    const cart = localStorage.getItem('spaCart');
    const cartQuantity = JSON.parse(cart).length;
    alert(`Cart Quantity = ${cartQuantity}`);
    });
};