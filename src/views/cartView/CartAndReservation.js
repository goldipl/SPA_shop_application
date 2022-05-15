import {cartManager} from '../../cart/CartManager';
import {RemoveFromCartButton} from '../../common/RemoveFromCartButton';
import {Router} from "../../router/Router";
import "./reservations.scss";

const add = (a, b) => a + b;
const calculateTotal = (items) => items.map(item => item.price).reduce(add, 0).toFixed(2);


export function Cart() {

    // ----- My own routing ----- start
    console.log('Cart & Reservation subpage');
    const endpoint = 'CartAndReservation';
    
    Router(endpoint);
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
        <th>Image</th>
        <th>Delete</th>
    `;

    const tableRows = cartItems.map(item => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} USD</td>
            <td><img width=100 height=auto src=${item.img}></img></td>
            <td></td>
        `;

        tr.lastElementChild.append(RemoveFromCartButton(item));

        return tr;
    });

    const tableFooter = document.createElement('tr');
    tableFooter.innerHTML = `
        <td><strong>Total:</strong></td>
        <td><strong> ${calculateTotal(cartItems)} USD 💰</strong></td>
        <td></td>
    `;

    table.append(tableHead, ...tableRows, tableFooter);
    section.append(table);


    const personal = document.createElement('div');
    personal.classList.add('personalInfo');
    personal.innerHTML = `
        <h2>Reservation</h2>
        <div class="form_container">
        <form method="post" action="/" id="booking">
<div style="display: flex;justify-content: space-evenly;">
            <div class="flex290">
                <strong><label for="guestname" class="field-label">Please Enter Your Name</label></strong>
                <input type="text" name="guestname" id="guestname" class="gui-input" required="" placeholder="Martin">                               
            </div>
            <div class="flex290">
            <strong><label for="guestsurname" class="field-label">Please Enter Your Surame</label></strong>
            <input type="text" name="guestname" id="guestname" class="gui-input" required="" placeholder="Kowalsky">                               
            </div>
            <div class="flex290">
                <strong><label for="guestemail" class="field-label">Email Address</label></strong>
                <input type="email" name="guestemail" id="guestemail" class="gui-input" required="" placeholder="mkowalsky@xyz.com">
            </div>
            <div class="flex290">
                <strong><label for="guestelephone" class="field-label">Mobile Number</label></strong>
                <input type="text" name="guestelephone" id="guestelephone" class="gui-input" required="" placeholder="Mobile Number"> 
            </div>
    </div>
<div style="display: flex;
justify-content: space-evenly;">
            <div class="flex290">
                <strong><label for="adults" class="field-label">Number of Adults</label></strong>
                <input type="number" id="adults" name="adults" class="gui-input" required="" placeholder="Number of adults">
            </div>
            <div class="flex290">
                <strong><label for="children" class="field-label">Number of Children</label></strong>
                <input type="number" id="children" name="children" class="gui-input" required="" placeholder="Number of children">
            </div>
            <div class="flex290">
                <strong><label for="checkin" class="field-label">Check-in Date</label></strong>
                <input type="date" id="dateInputMin" name="trip-start" required="" min="2022-05-15">
            </div>
            <div class="flex290">
                <strong><label for="checkout" class="field-label">Check-out Date</label></strong>
                <input type="date" id="dateInputMax" name="trip-end" required="" max="2023-05-15">
            </div>
    </div>
<div style="display: flex;flex-direction: column;align-items: center;">
            <div class="flex290" style="width: 90vw;">
                <strong>Extra info:</strong>
                <textarea class="gui-textarea" id="comment" name="comment" placeholder="Place to inform us about special needs" style="height: 80px;"></textarea>
            </div>
<br>
            <div class="flex290">
                <button type="submit" class="button btn-primary mB8px">Confirm Booking</button>
                <button type="reset" class="button btn-warning">Reset</button>
            </div></div>
        </form>
    </div>
    `;

    const scriptTripStart =
    `<script>
    var startDateButton = document.getElementById("dateInputMin");
    startDateButton.addEventListener("click", () => {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth()+1; //January is 0!
        let yyyy = today.getFullYear();
        if(dd<10){
                dd='0'+dd
            } 
            if(mm<10){
                mm='0'+mm
            } 

        today = yyyy+'-'+mm+'-'+dd;
        document.getElementById("dateInputMin").setAttribute("min", today);
    });
    </script>`;

    const scriptTripEnd =
    `<script>
    var endMaxDateButton = document.getElementById("dateInputMax");
    endMaxDateButton.addEventListener("click", () => {
        let lastDay = new Date();
        let lastdd = lastDay.getDate();
        let lastmm = lastDay.getMonth()+1; //January is 0!
        let lastyyyy = lastDay.getFullYear()+1;
        if(lastdd<10){
            lastdd='0'+lastdd
            } 
            if(lastmm<10){
                lastmm='0'+lastmm
            } 

            lastDay = lastyyyy+'-'+lastmm+'-'+lastdd;
        document.getElementById("dateInputMax").setAttribute("max", lastDay);
    });
    </script>`;

    section.append(personal);

    const scriptTripStartTextFragment = document.createRange().createContextualFragment(scriptTripStart);
    const scriptTripEndTextFragment = document.createRange().createContextualFragment(scriptTripEnd);
    section.append(scriptTripStartTextFragment);
    section.append(scriptTripEndTextFragment);

    return section;
}