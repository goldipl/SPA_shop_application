import {Router} from "../router/Router";

function SignUpButton() {
    const button01 = document.createElement('button');
    button01.setAttribute('type', 'button');
    button01.innerText = 'Sign Up';
    button01.classList.add('btn', 'btn-success');
    button01.style.marginBottom = '1em';
    button01.style.marginLeft = '1em';

    // const navigateEvent = new CustomEvent('navigate', {
    //     //To Do
    // });

    button01.addEventListener('click', () => {
        // Require browserify-fs which includes writefile() function
        const fs = require('browserify-fs')

        // a simple object to write into the file
        let user = {
            name: document.getElementById('textInput').value,
            password: document.getElementById('passInput').value,
        };
        
        // Writing data into the 'db.json' file
        fs.writeFile('./../../db.json', JSON.stringify(user), (err) => {
            // error handling using throw
            if (err) throw err;
        })

        console.log(user);
        console.log(JSON.stringify(user));
    });

    return button01;
}

function LogInButton() {
    const button02 = document.createElement('button');
    button02.setAttribute('type', 'button');
    button02.innerText = 'Log In';
    button02.classList.add('btn', 'btn-primary');
    button02.style.marginBottom = '1em';

    // const navigateEvent = new CustomEvent('navigate', {
    //     //To Do
    // });

    button02.addEventListener('click', () => {
        // Require browserify-fs which includes writefile() function
        const fs = require('browserify-fs')

        // a simple object to write into the file
        let user = {
            name: document.getElementById('textInput').value,
            password: document.getElementById('passInput').value,
        };
        
        // Writing data into the 'db.json' file
        fs.writeFile('./../../db.json', JSON.stringify(user), (err) => {
            // error handling using throw
            if (err) throw err;
        })

        console.log(user);
        console.log(JSON.stringify(user));
    });

    return button02;
}


function showPasswordButton() {
    const buttonShowPass = document.createElement('button');
    buttonShowPass.setAttribute('type', 'button');
    buttonShowPass.innerText = 'Show Password';
    buttonShowPass.classList.add('btn', 'btn-warning');
    buttonShowPass.style.marginBottom = '1em';
    buttonShowPass.style.marginLeft = '1em';

    buttonShowPass.addEventListener('click', () => {
        document.getElementById('passInput').type = 'text';
    });

    return buttonShowPass;
}

function hidePasswordButton() {
    const buttonHidePass = document.createElement('button');
    buttonHidePass.setAttribute('type', 'button');
    buttonHidePass.innerText = 'Hide Password';
    buttonHidePass.classList.add('btn', 'btn-warning');
    buttonHidePass.style.marginBottom = '1em';
    buttonHidePass.style.marginLeft = '1em';

    buttonHidePass.addEventListener('click', () => {
        document.getElementById('passInput').type = 'password';
    });

    return buttonHidePass;
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
      <input id="textInput" style="margin-bottom: 8px;">
      <label for="passInput">Password</label>
      <input id="passInput" type="password" style="margin-bottom: 8px;">
    <div>
    `;

    section.append(LogInButton());
    section.append(SignUpButton());
    section.append(showPasswordButton());
    section.append(hidePasswordButton());

    return section;
}