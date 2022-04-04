import {Router} from "../router/Router";

function SignUpButton() {
    const button01 = document.createElement('button');
    button01.setAttribute('type', 'button');
    button01.innerText = 'Sign Up';
    button01.classList.add('btn', 'btn-success');
    button01.style.marginBottom = '1em';
    button01.style.marginLeft = '1em';

    const navigateEvent = new CustomEvent('navigate', {
        //To Do

    });

    button01.addEventListener('click', () => {
        //document.body.dispatchEvent(navigateEvent);
        const loginText = document.getElementById('textInput').value;
        const passText = document.getElementById('passInput').value;
        console.log(loginText);
        console.log(passText);

    });

    return button01;
}

function LogInButton() {
    const button02 = document.createElement('button');
    button02.setAttribute('type', 'button');
    button02.innerText = 'Log In';
    button02.classList.add('btn', 'btn-primary');
    button02.style.marginBottom = '1em';

    const navigateEvent = new CustomEvent('navigate', {
        //To Do
    });

    button02.addEventListener('click', () => {
        //document.body.dispatchEvent(navigateEvent);
        const loginText = document.getElementById('textInput').value;
        const passText = document.getElementById('passInput').value;
        console.log(loginText);
        console.log(passText);
    });

    return button02;
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
      <br>
      <label for="textInput">Login</label>
      <input id="textInput" style="margin-bottom: 8px;">
      <br>
      <label for="passInput">Password</label>
      <input id="passInput" type="password" style="margin-bottom: 8px;">
      <br>
    `;

    section.append(LogInButton());
    section.append(SignUpButton());

    return section;
}