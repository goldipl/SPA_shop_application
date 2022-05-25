import {House} from "./House";
import {Router} from "../../router/Router";

export function Houses() {
    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Houses subpage');
    const endpoint = 'Houses';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
        <h2>Houses</h2>
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
    fetch('https://my-json-server.typicode.com/goldipl/SPA_shop_application/houses')
    // Local version
    //fetch('http://localhost:3000/houses')
        .then(response => response.json())
        .then(houses => {
            const h2 = document.createElement('h2');
            h2.innerText = "Houses";
            const div2 = document.createElement('div');
            div2.classList.add("housesContainer");

            const lis = houses.map(house => House(house));

            div2.append(...lis);

            section.querySelector('#loading').remove();
            section.append(div2); 

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