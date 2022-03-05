// const navigateTo = Component => new CustomEvent('navigate', {
//     detail: Component
// });
// 
// przyklad:
// const customEvent = navigateTo(Rooms);

export function NavigationButton(Component, text) {
    const button = document.createElement('button');

    button.classList.add('btn', 'btn-primary');
    button.setAttribute('type', 'button');
    button.innerText = text;

    button.addEventListener('click', () => {
        const navigateEvent = new CustomEvent('navigate', {
            detail: Component
        });

        document.body.dispatchEvent(navigateEvent);

        //usuwamy klasę 'active-btn' ze wszystkich guzików
        Array.from(button.parentElement.children).forEach(element => {
            element.classList.remove('active-btn');
        });

        //nadajemy klasę 'active-btn' na kliknięty guzik
        button.classList.add('active-btn');
    });

    return button;
}