import {Router} from "../../router/Router";
import {showPasswordButton} from "../../common/ShowPasswordButton";
import {hidePasswordButton} from "../../common/HidePasswordButton";

function SignUpButton() {
    const buttonSignUp = document.createElement('button');
    buttonSignUp.setAttribute('type', 'button');
    buttonSignUp.innerText = 'Sign Up';
    buttonSignUp.classList.add('btn', 'btn-success');
    buttonSignUp.style.marginBottom = '1em';
    buttonSignUp.style.marginLeft = '1em';

    // const navigateEvent = new CustomEvent('navigate', {
    //     //To Do
    // });

    buttonSignUp.addEventListener('click', () => {
        const passInputValue = document.getElementById('passInput').value;
        const textInputValue = document.getElementById('textInput').value;
        const loginSection = document.querySelector(".loginSection");

        // Require browserify-fs which includes writefile() function
        const fs = require('browserify-fs')

        // a simple object to write into the file
        let user = {
            name: textInputValue,
            password: passInputValue,
        };
        
        // Writing data into the 'db.json' file
        fs.writeFile('./../../db.json', JSON.stringify(user), (err) => {
            // error handling using throw
            if (err) throw err;
        })

        // Checking passwords length 
        if ((passInputValue.length < 10) && (passInputValue.length > 0) && (textInputValue.length !== 0))  {
            const shortPassword = `Password too short! Must be minimum 10 characters 😡`;
            divPassShort = document.createElement('div');
            divPassShort.innerHTML = shortPassword;
            divPassShort.style.color = "red";
            loginSection.append(divPassShort);
        } else if ((passInputValue.length > 9) && (textInputValue.length !== 0)) {
            const divPassLong = document.createElement('div');
            divPassLong.innerHTML = `Password 👌. Password contains <strong>${passInputValue.length}</strong> characters 😊`;
            divPassLong.style.color = "green";
            loginSection.append(divPassLong);

            // Checking used accounts
            if (!localStorage["UsersAuth"]) {
                localStorage["UsersAuth"] = "{}";
            }
            
            const usedAccounts = JSON.parse(localStorage["UsersAuth"]);
                        
            if(textInputValue in usedAccounts) {
                const loginUsed = document.createElement('div');
                loginUsed.innerHTML = `Login: <strong>${textInputValue}</strong> was used ⚠️`;
                loginUsed.style.color = "red";
                loginSection.append(loginUsed);
            } else {
                usedAccounts[textInputValue] = passInputValue;
            }
            localStorage["UsersAuth"] = JSON.stringify(usedAccounts);
        } 

        //Checking when inputs are filled || empty
        if ((passInputValue.length === 0) && (textInputValue.length === 0)) {
            const emptyInputsMessage = `Fill Password & Login input ⚠️`;
            divContainer = document.createElement('div');
            divContainer.innerHTML = emptyInputsMessage;
            divContainer.style.color = "red";
            loginSection.append(divContainer);
        } else if ((passInputValue.length !== 0) && (textInputValue.length === 0)) {
            const emptyInputsMessage = `Fill Login input ⚠️`;
            divContainer = document.createElement('div');
            divContainer.innerHTML = emptyInputsMessage;
            divContainer.style.color = "red";
            loginSection.append(divContainer);
        } else if ((passInputValue.length === 0) && (textInputValue.length !== 0)) {
            const emptyInputsMessage = `Fill Password input ⚠️`;
            divContainer = document.createElement('div');
            divContainer.innerHTML = emptyInputsMessage;
            divContainer.style.color = "red";
            loginSection.append(divContainer);
        }

    });

    return buttonSignUp;
}

function LogInButton() {
    const buttonLogIn = document.createElement('button');
    buttonLogIn.setAttribute('type', 'button');
    buttonLogIn.innerText = 'Log In';
    buttonLogIn.classList.add('btn', 'btn-primary');
    buttonLogIn.style.marginBottom = '1em';

    // const navigateEvent = new CustomEvent('navigate', {
    //     //To Do
    // });

    buttonLogIn.addEventListener('click', () => {
        alert("Sorry Login section doesn't work yet")
    });

    return buttonLogIn;
}

export function LoginSignup() {

    const section = document.createElement('section');
    section.className = "loginSection";

    // ----- My own routing ----- start
    console.log('Login subpage');
    const endpoint = 'LoginSignUp';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
    <h2>Log in / Sign up</h2>
    <div style="display: flex; flex-direction: column; width: 240px;">
      <label for="textInput">Login</label>
      <input id="textInput" style="margin-bottom: 8px;" placeholder="Your Login">
      <label for="passInput">Password (min. 10 characters)</label>
      <input id="passInput" type="password" style="margin-bottom: 8px;" placeholder="Your Password">
    <div>
    `;

    section.append(LogInButton());
    section.append(SignUpButton());
    section.append(showPasswordButton());
    section.append(hidePasswordButton());

    return section;
}