import {Treatment} from "./Treatment";
import {Router} from "./../../router/Router";
import "./treatment.scss"

export function Treatments() {

    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Treatments subpage');
    const endpoint = 'Treatments';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
      <h2>Treatments</h2>
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
    fetch('https://my-json-server.typicode.com/goldipl/SPA_shop_application/treatments')
    // Local version
    //fetch('http://localhost:3000/treatments')
        .then(response => response.json())
        .then(treatments => {
            const treatmentsContainer = document.createElement('div');
            treatmentsContainer.classList.add("treatmentsSection");
            const articles = treatments.map(treatment => Treatment(treatment));

            section.querySelector('#loading').remove();
            treatmentsContainer.append(...articles);
            section.append(treatmentsContainer);

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