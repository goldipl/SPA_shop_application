export function CartQuantity() {
    let cartButton = document.querySelector('nav button:nth-child(8)');

    cartButton.addEventListener("mouseenter", (e) => {
    const cart = localStorage.getItem('spaCart');
    cartQuantity = JSON.parse(cart).length;
    alert(`Cart Quantity = ${cartQuantity}`);
    });
};