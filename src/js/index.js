import '../scss/style.scss';
import '../img/diseno.png';
import '../img/puente.jpg';
import '../img/favicon.png';
import '../img/vista-previa.png';

const boton = document.querySelector('#navbar-nav');

const acerca = document.querySelector('#acercaDe');
const trabajos = document.querySelector('#trabajos');
const contactos = document.querySelector('#contacto');

import { router } from '../routes/index.routes';

import { main } from './menu'


addEventListener('DOMContentLoaded', () => {

    const contenido = document.querySelector('#contenidoPrincipal');

    window.addEventListener('hashchange', (e) => {
        e.preventDefault();
        contenido.innerHTML = router(window.location.hash);
        
    });

})


boton.addEventListener('click', (e) => {

    e.preventDefault();

    let typo;

    if(e.target.id === 'link-sobreDe') 
    {
        typo = acerca.getBoundingClientRect().top;
        main(typo)
    }
    else if(e.target.id === 'link-trabajos')
    {
        typo = trabajos.getBoundingClientRect().top;
        main(typo)
    }
    else
    {
        typo = contactos.getBoundingClientRect().top;
        main(typo)
    }

})
