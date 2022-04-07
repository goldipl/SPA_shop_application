import {Router} from "../router/Router";
import {showPasswordButton} from "./ShowPassword";
import {hidePasswordButton} from "./HidePassword";

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

    const shortPassword = `
      Password too short!
      Must be minimum 10 characters 😊
    `;

    buttonSignUp.addEventListener('click', () => {
        const passInputValue = document.getElementById('passInput').value;
        const textInputValue = document.getElementById('textInput').value;

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
        if (passInputValue.length < 10) {
            return alert(shortPassword);
        } else {
            return console.log('Haslo prawidlowe!');
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
        const passInputValue = document.getElementById('passInput').value;
        const textInputValue = document.getElementById('textInput').value;

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
        if (passInputValue.length < 10) {
            return alert(shortPassword);
        } else {
            return console.log('Haslo prawidlowe!');
        }
    });

    return buttonLogIn;
}

export function LoginSignup() {

    const section = document.createElement('section');

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