export function BackButton(Component) {
   const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.classList.add('btn', 'btn-primary');
    button.style.margin = '1em auto';
    button.style.display = 'block';
    button.style.width = '200px';
    button.innerText = 'Back';

    const navigateEvent = new CustomEvent('navigate', {
        detail: Component
    });

    button.addEventListener('click', () => {
        document.body.dispatchEvent(navigateEvent);
    });

    return button;
}