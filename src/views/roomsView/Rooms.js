import {Room} from "./Room";
import {Router} from "../../router/Router";

export function Rooms() {
    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Rooms subpage');
    const endpoint = 'Rooms';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
        <h2>Rooms</h2>
        <p id="loading">Loading...</p>
        <!-- AddtoCart Modal -->
        <div class="modal fade" id="addtoCartModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Added to Cart 🛒</h5>
                <button type="button" class="closeAddtoCartModalButton" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </div>
        </div>
        </div>
    `;
    // Live - Github Version
    fetch('https://my-json-server.typicode.com/goldipl/SPA_shop_application/rooms')
    // Local version
    //fetch('http://localhost:3000/rooms')
        .then(response => response.json())
        .then(rooms => {
            const div = document.createElement('div');
            div.classList.add("roomsContainer");

            const lis = rooms.map(room => Room(room));

            div.append(...lis);

            section.querySelector('#loading').remove();
            section.append(div);

            const addToCartModal = 
            `<script>
            var addToCartModal = document.getElementById("addtoCartModal");
            var addtocartAllButtons = document.querySelectorAll(".btn.btn-info");
            addtocartAllButtons.forEach(button => {
                button.addEventListener("click", () => {
                    addToCartModal.classList.add("showModal");
                });
            });
        
            var closeModalButton = document.querySelector(".closeAddtoCartModalButton");
            closeModalButton.addEventListener("click", () => {
                addToCartModal.classList.remove("showModal");
            });
            </script>`
        
            const addToCartModaltTextFragment = document.createRange().createContextualFragment(addToCartModal);
            section.append(addToCartModaltTextFragment);
        });
 
    return section;
}