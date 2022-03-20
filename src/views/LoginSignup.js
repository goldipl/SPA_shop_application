import {Router} from "../router/Router";

function SignUpButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.innerText = 'Sign Up';
    button.classList.add('btn', 'btn-success');
    button.style.marginBottom = '1em';
    button.style.marginLeft = '1em';

    const navigateEvent = new CustomEvent('navigate', {
        //To Do
    });

    button.addEventListener('click', () => {
        document.body.dispatchEvent(navigateEvent);
    });

    return button;
}

function LogInButton() {
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.innerText = 'Log In';
    button.classList.add('btn', 'btn-primary');
    button.style.marginBottom = '1em';

    const navigateEvent = new CustomEvent('navigate', {
        //To Do
    });

    button.addEventListener('click', () => {
        document.body.dispatchEvent(navigateEvent);
    });

    return button;
}


export function LoginSignup() {

    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Login subpage');
    const endpoint = 'Login';

    Router(endpoint);
    // ----- My own routing ----- end

    section.innerHTML = `
      <h2>Log in / Sign up</h2>
      <br>
    `;

    section.append(LogInButton());
    section.append(SignUpButton());

    return section;
}