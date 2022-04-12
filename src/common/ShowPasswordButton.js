export function showPasswordButton() {
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