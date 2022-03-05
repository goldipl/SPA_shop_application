const key = 'spaCart';

export const cartManager = {

    add(item) {
        const cart = localStorage.getItem(key);
        
        if (cart === null) {
            const serializedCartContents = JSON.stringify( [item] );
            localStorage.setItem(key, serializedCartContents);
        } else {
            const cartContents = JSON.parse(cart);
            cartContents.push(item);
            const serializedCartContents = JSON.stringify(cartContents);
            localStorage.setItem(key, serializedCartContents);
        }
    },

    remove(item) {
        const cart = localStorage.getItem(key);
        
        if (cart !== null) {
            const cartContents = JSON.parse(cart);
            const newCartContents = cartContents.filter(cartItem => cartItem.name !== item.name);
            const serializedCartContents = JSON.stringify(newCartContents);
            localStorage.setItem(key, serializedCartContents);
        }
    },

    getAll() {
        const cart = localStorage.getItem(key);
        
        if (cart === null) {
            return [];
        }

        return JSON.parse(cart);
    }

};