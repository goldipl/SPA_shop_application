import {Router} from "../router/Router";

export function LoginSignup() {

    const section = document.createElement('section');

    // ----- My own routing ----- start
    console.log('Calculate subpage');
    const endpoint = 'CalculateYourFunds';

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

    return section;
}