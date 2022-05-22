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
                    <strong><label for="guestname" class="field-label">Name*</label></strong>
                    <input type="text" name="guestname" id="guestname" class="gui-input" required="" placeholder="Marcin">                               
                </div>
                <div class="flex290">
                    <strong><label for="guestsurname" class="field-label">Surname*</label></strong>
                    <input type="text" name="guestsurname" id="guestsurname" class="gui-input" required="" placeholder="Godlewski">                               
                </div>
                <div class="flex290">
                    <strong><label for="guestemail" class="field-label">Email Address*</label></strong>
                    <input type="email" name="guestemail" id="guestemail" class="gui-input" required="" placeholder="mgodlewskiy@xyz.com">
                </div>
                <div class="flex290">
                    <strong><label for="guestelephone" class="field-label">Mobile Number*</label></strong>
                    <input type="number" name="guestelephone" id="guestelephone" class="gui-input" required="" placeholder="Mobile Number"> 
                </div>
            </div>
            <div style="display: flex; justify-content: space-evenly;">
                <div class="flex290">
                    <strong><label for="adults" class="field-label">Number of Adults*</label></strong>
                    <input type="number" id="adults" name="adults" class="gui-input" required="" placeholder="Number of adults">
                </div>
                <div class="flex290">
                    <strong><label for="children" class="field-label">Number of Children*</label></strong>
                    <input type="number" id="children" name="children" class="gui-input" required="" placeholder="Number of children">
                </div>
                <div class="flex290">
                    <strong><label for="street" class="field-label">Street*</label></strong>
                    <input type="text" id="street" name="street" class="gui-input" required="" placeholder="Street">
                </div>
                <div class="flex290">
                    <strong><label for="streetnumber" class="field-label">Street Number*</label></strong>
                    <input type="number" id="streetnumber" name="streetnumber" class="gui-input" required="" placeholder="Street Number">
                </div>
            </div>
            <div style="display: flex; justify-content: space-evenly;">
                <div class="flex290">
                    <strong><label for="flatnumber" class="field-label">Flat Number</label></strong>
                    <input type="number" id="flatnumber" name="flatnumber" class="gui-input" placeholder="Flat Number">
                </div>
                <div class="flex290">
                    <strong><label for="city" class="field-label">City*</label></strong>
                    <input type="text" id="city" name="city" class="gui-input" required="" placeholder="City"">
                </div>
                <div class="flex290">
                    <strong><label for="checkin" class="field-label">Check-in Date*</label></strong>
                    <input type="date" id="dateInputMin" name="trip-start" required="" min="2022-05-15">
                </div>
                <div class="flex290">
                    <strong><label for="checkout" class="field-label">Check-out Date*</label></strong>
                    <input type="date" id="dateInputMax" name="trip-end" required="" max="2023-05-15">
                </div>
             </div>
             <div style="display: flex;flex-direction: column;align-items: center;">
                <div class="flex290" style="width: 90vw;">
                    <strong>Extra info:</strong>
                    <textarea class="gui-textarea" id="comment" name="comment" placeholder="Place to inform us about special needs" style="height: 80px;"></textarea>
                    <strong>* required</strong>
                </div>
                <br>
                <div class="flex290">
                    <button type="button" id="submitButton" class="button btn-primary mB8px">Confirm Booking</button>
                    <button type="reset" class="button btn-info">Reset All Inputs</button>
                </div>
            </div>
        </form>
    </div>

    <!-- Sent Modal -->
    <div class="modal fade" id="sentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Booking information</h5>
            <button type="button" class="closeModal" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <strong>Booking has been sent ✔️</strong>
            <strong>Total cost: ${calculateTotal(cartItems)} USD</strong>
            <a href="https://www.santander.pl/" type="button" class="button btn-info pay-btn">Pay</a>
        </div>
        </div>
    </div>
    </div>

    <!-- FillInputs Modal -->
    <div class="modal fade" id="fillInputsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Booking information</h5>
            <button type="button" class="closeFillInputsModal" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <strong>Fill all required inputs ❗</strong>
        </div>
        </div>
    </div>
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
        document.getElementById("dateInputMax").setAttribute("min", today);
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
        document.getElementById("dateInputMin").setAttribute("max", lastDay);
    });
    </script>`;

    const checkScript = 
    `<script>

    var sentModal = document.getElementById("sentModal");
    var check = () => {
        var guestname = document.getElementById('guestname').value;
        var guestsurname = document.getElementById('guestsurname').value;
        var guestemail = document.getElementById('guestemail').value;
        var guestelephone = document.getElementById('guestelephone').value;
        var adults = document.getElementById('adults').value;
        var children = document.getElementById('children').value;
        var street = document.getElementById('street').value;
        var streetnumber = document.getElementById('streetnumber').value;
        var city = document.getElementById('city').value;
        var dateInputMin = document.getElementById('dateInputMin').value;
        var dateInputMax = document.getElementById('dateInputMax').value;
        if (guestname !== '' && guestsurname !== '' && guestemail !== '' && guestelephone !== ''
        && adults !== '' && children !== '' && street !== '' && streetnumber !== ''
        && city !== '' && dateInputMin !== '' && dateInputMax !== '') {
            sentModal.classList.add("showModal");
        } else {
            fillInputsModal.classList.add("showModal");
        }  

    };

    var submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", () => {
        check();
    });

    var closeModalButton = document.querySelector("button.closeModal");
    closeModalButton.addEventListener("click", () => {
        sentModal.classList.remove("showModal");
    });

    var closeFillInputsModal = document.querySelector("button.closeFillInputsModal");
    closeFillInputsModal.addEventListener("click", () => {
        fillInputsModal.classList.remove("showModal");
    });
    </script>`

    section.append(personal);

    const scriptTripStartTextFragment = document.createRange().createContextualFragment(scriptTripStart);
    const scriptTripEndTextFragment = document.createRange().createContextualFragment(scriptTripEnd);
    const checkScriptTextFragment = document.createRange().createContextualFragment(checkScript);
    section.append(scriptTripStartTextFragment);
    section.append(scriptTripEndTextFragment);
    section.append(checkScriptTextFragment);

    return section;
}