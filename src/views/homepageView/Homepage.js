import {Router} from "../../router/Router";
import "./homepage.scss";

export function Homepage() {

    const sectionHomepage = document.createElement('section');
    sectionHomepage.classList.add("homePage");

    // ----- My own routing ----- start
    console.log('homePage subpage');
    const endpoint = 'homepage';

    Router(endpoint);
    // ----- My own routing ----- end

    sectionHomepage.innerHTML = `
    <h2 class="homepageTitle">Welcome to our homepage</h2>
    `;

    return sectionHomepage;

}