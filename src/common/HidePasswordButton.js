export function hidePasswordButton() {
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