
const router = (route) => {

    switch(route) {
        
        case '#/':
            return 'inicio'
            break;
        case '#/datos':
            return 'datos'
            break;
        case '#/habilidades':
            return 'habilidades'
            break;
        case '#/estudios':
            return 'estudios'
            break;
        case '#/experiencia':
            return 'experiencia'
            break;
        case '#/contacto':
            return 'contacto'
            break;
        case '#/trabajos':
            return 'trabajos'
            break;

    }



}

export { router }