import {Router} from "../router/Router";
import "./calculate.scss";

export function Calculate() {

    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Calculate subpage');
    const endpoint = 'CalculateYourFunds';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
    <h2>Calculate</h2>
    <div class="calcView">
        <input type="text" readonly="" class="calcDisplay">
        <div class="calcKeysCol1">
            <button class="btnn add" data-action="add">+</button>
            <button class="btnnNr nr7" data-num="7">7</button>
            <button class="btnnNr nr4" data-num="4">4</button>
            <button class="btnnNr nr1" data-num="1">1</button>
            <button class="btnnNr nr0" data-num="0">0</button>
        </div>
        <div class="calcKeysCol2">
            <button class="btnn sub" data-action="subtract">-</button>
            <button class="btnnNr nr8" data-num="8">8</button>
            <button class="btnnNr nr5" data-num="5">5</button>
            <button class="btnnNr nr2" data-num="2">2</button>
            <button class="btnn dot" data-action="dot">.</button>
        </div>
        <div class="calcKeysCol3">
            <button class="btnn mlt" data-action="multiply">&times;</button>
            <button class="btnnNr nr9" data-num="9">9</button>
            <button class="btnnNr nr6" data-num="6">6</button>
            <button class="btnnNr nr3" data-num="3">3</button>
            <button class="btnn ac" data-action="clear">AC</button>
        </div>
        <div class="calcKeysCol4">
            <button class="btnn dv" data-action="divide">÷</button>
            <button class="btnEqual" data-action="equal">=</button>
        </div>
    </div>
    `;

    return section;
}