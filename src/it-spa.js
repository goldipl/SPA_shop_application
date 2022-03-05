import 'bootstrap/dist/css/bootstrap.css';
import './it-spa.scss';
import { Rooms } from './views/Rooms';
import { Treatments } from './views/Treatments';
import { Navigation } from './navigation/Navigation';

const main = document.querySelector('main');

//wstawiamy nawigację przed element main
main.before(Navigation());

//na start wstawiamy widok z pokojami
main.append(Rooms());

document.body.addEventListener('navigate', e => {
    const { detail: Component } = e;

    main.innerHTML = '';

    //wstawiamy nawigację do elementu main
    main.append(Component());
});