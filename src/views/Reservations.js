import {Router} from "../router/Router";

export function Reservations() {
    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Reservation subpage');
    const endpoint = 'Reservations';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
        <h2>Reservations</h2>
    `;
 
    return section;
}