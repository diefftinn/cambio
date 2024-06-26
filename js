const menu = document.getElementById('menu');
const indicador = document.getElementById('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';

let indexSeccionActiva;

const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            indexSeccionActiva = [...secciones].indexOf(entrada.target);
            indicador.style.transform = `translateX(${tamañoIndicador * indexSeccionActiva}px)`;
        }
    });
}, {
    rootMargin: '-80px 0px 0px 0px',
    threshold
