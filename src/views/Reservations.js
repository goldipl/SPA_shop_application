import {Router} from "../router/Router";
import "./reservations.scss"


export function Reservations() {
    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Reservation subpage');
    const endpoint = 'Reservations';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
    <h2>Reservations</h2>
    <div class="form_container">
        <form method="post" action="/" id="booking">
            <div class="flex290">
                <label for="guestname" class="field-label">Please Enter Your Name</label>
                <input type="text" name="guestname" id="guestname" class="gui-input" required="" placeholder="Martin">                               
            </div>
            <div class="flex290">
            <label for="guestsurname" class="field-label">Please Enter Your Surame</label>
            <input type="text" name="guestname" id="guestname" class="gui-input" required="" placeholder="Kowalsky">                               
            </div>
            <div class="flex290">
                <label for="guestemail" class="field-label">Email Address</label>
                <input type="email" name="guestemail" id="guestemail" class="gui-input" required="" placeholder="mkowalsky@xyz.com">
            </div>
            <div class="flex290">
                <label for="guestelephone" class="field-label">Mobile Number</label>
                <input type="text" name="guestelephone" id="guestelephone" class="gui-input" required="" placeholder="Mobile Number"> 
            </div>
            <div class="flex290">
                <label for="adults" class="field-label">Number of Adults</label>
                <input type="number" id="adults" name="adults" class="gui-input" required="" placeholder="Number of adults">
            </div>
            <div class="flex290">
                <label for="children" class="field-label">Number of Children</label>
                <input type="number" id="children" name="children" class="gui-input" required="" placeholder="Number of children">
            </div>
            <div class="flex290">
                <label for="checkin" class="field-label">Check-in Date</label>
                <input type="date" id="start" name="trip-start" required="">
            </div>
            <div class="flex290">
                <label for="checkout" class="field-label">Check-out Date</label>
                <input type="date" id="start" name="trip-start" required="">
            </div>
            <div class="flex290">
                <strong>Extra info:</strong>
                <textarea class="gui-textarea" id="comment" name="comment" placeholder="Place to inform us about special needs"></textarea>
            </div>
            <div class="flex290">
                <button type="submit" class="button btn-primary mB8px">Confirm Booking</button>
                <button type="reset" class="button btn-warning">Cancel</button>
            </div>
        </form>
    </div>
    `;

    return section;
}