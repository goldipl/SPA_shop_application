export function BackButton(Component) {
   const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-success');
    button.style.margin = '1em 0';
    button.innerText = 'Back';

    const navigateEvent = new CustomEvent('navigate', {
        detail: Component
    });

    button.addEventListener('click', () => {
        document.body.dispatchEvent(navigateEvent);
    });

    return button;
}