import {Router} from "../../router/Router";
import "./calculate.scss";

export function Calculate() {

    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Calculate subpage');
    const endpoint = 'CalculateYourFunds';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
    <h2>Calculator</h2>
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
            <button class="btnnEqual" data-action="equal">=</button>
        </div>
    </div>
    `;

    const script =
    `<script>
    var btnnNr1 = document.querySelector(".nr1");
    var btnnNr2 = document.querySelector(".nr2");
    var btnnNr3 = document.querySelector(".nr3");
    var btnnNr4 = document.querySelector(".nr4");
    var btnnNr5 = document.querySelector(".nr5");
    var btnnNr6 = document.querySelector(".nr6");
    var btnnNr7 = document.querySelector(".nr7");
    var btnnNr8 = document.querySelector(".nr8");
    var btnnNr9 = document.querySelector(".nr9");
    var btnnNr0 = document.querySelector(".nr0");
    var btnnNumbers = [btnnNr1, btnnNr2, btnnNr3, btnnNr4, btnnNr5, btnnNr6, btnnNr7, btnnNr8, btnnNr9, btnnNr0];
    var btnnAC = document.querySelector(".btnn.ac");
    var btnnDot = document.querySelector(".btnn.dot");
    var calcDisplay = document.querySelector("input");
    var btnnAdd = document.querySelector(".btnn.add");
    var btnnSub = document.querySelector(".btnn.sub");
    var btnnDiv = document.querySelector(".btnn.dv");
    var btnnMlt = document.querySelector(".btnn.mlt");
    var btnnEq = document.querySelector(".btnnEqual");
    var value1 = '';
    var value2 = '';
    var result = '';
    var operator = '';
    
    //getting number to display
    btnnNumbers.forEach(button => {
        button.addEventListener("click", () => {
            btnnNumber = button.dataset.num;
            calcDisplay.value += btnnNumber;
        });
    });
    
    //AC Button
    btnnAC.addEventListener("click", () => {
        calcDisplay.value = '';
    });
    
    //dot Button
    btnnDot.addEventListener("click", () => {
        if (!calcDisplay.value.includes('.')) {
            dotValue = '.';
            calcDisplay.value += dotValue;
        } else {
            return;
        }
    });
    
    btnnAdd.addEventListener("click", () => {
        operator = "add";
        value1 = calcDisplay.value;
        calcDisplay.value = '';
    });
    
    btnnSub.addEventListener("click", () => {
        operator = "sub";
        value1 = calcDisplay.value;
        calcDisplay.value = '';
    });
    
    btnnDiv.addEventListener("click", () => {
        operator = "div";
        value1 = calcDisplay.value;
        calcDisplay.value = '';
    });
    
    btnnMlt.addEventListener("click", () => {
        operator = "mlt";
        value1 = calcDisplay.value;
        calcDisplay.value = '';
    });
    
    btnnEq.addEventListener("click", () => {
        value2 = calcDisplay.value;
        calculate();
    });
    
    function calculate() {
        switch (operator) {
            case "add":
                result = Number(value1) + Number(value2);
                calcDisplay.value = result;
                break;
    
            case "sub":
                result = Number(value1) - Number(value2);
                calcDisplay.value = result;
                break;
    
            case "div":
                result = Number(value1) / Number(value2);
                calcDisplay.value = result;
                break;
    
            case "mlt":
                result = Number(value1) * Number(value2);
                calcDisplay.value = result;
                break;
        }
    }
    </script>`;

    const scriptCalc = document.createRange().createContextualFragment(script);
    section.classList.add("calculateSection");
    section.append(scriptCalc);

    return section;

}