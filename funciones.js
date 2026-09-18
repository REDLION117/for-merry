const colores = [
    '#c9a94e', '#284057', '#e8cf86', '#8a6d1f', '#3a5a78', '#ffffff'
];

document.addEventListener('DOMContentLoaded', () => {
    crearEstrellas();
    const boton = document.getElementById('botonSobres');
    const confeti = document.getElementById('confeti');
    let activo = false;

    boton.addEventListener('click', () => {
        if (activo) return;
        activo = true;
        lanzarConfeti();
        matarConfeti(confeti);
        setTimeout(() => {
            activo = false;
        }, 1600);
    });
});

function crearEstrellas() {
    const contenedor = document.querySelector('.estrellas');
    for (let i = 0; i < 14; i++) {
        const estrella = document.createElement('span');
        estrella.textContent = '✦';
        estrella.style.position = 'absolute';
        estrella.style.fontSize = (10 + Math.random() * 14) + 'px';
        estrella.style.color = 'rgba(200, 175, 90, 0.4)';
        estrella.style.left = (Math.random() * 90 + 5) + '%';
        estrella.style.top = (Math.random() * 90 + 5) + '%';
        contenedor.appendChild(estrella);
    }
}

function matarConfeti(contenedor) {
    setTimeout(() => {
        contenedor.classList.remove('activo');
        contenedor.replaceChildren();
    }, 1400);
}

function lanzarConfeti() {
    const contenedor = document.getElementById('confeti');
    contenedor.classList.add('activo');

    const cantidad = 120;
    for (let i = 0; i < cantidad; i++) {
        const pieza = document.createElement('div');
        pieza.style.position = 'absolute';
        pieza.style.width = (6 + Math.random() * 8) + 'px';
        pieza.style.height = (6 + Math.random() * 8) + 'px';
        pieza.style.background = colores[Math.floor(Math.random() * colores.length)];
        pieza.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        pieza.style.left = (Math.random() * 100) + '%';
        pieza.style.top = '-20px';
        pieza.style.opacity = '0.9';

        const duracion = 1800 + Math.random() * 1200;
        const retardo = Math.random() * 800;
        const rotacion = Math.random() * 720 - 360;

        pieza.style.transition = `transform ${duracion}ms linear ${retardo}ms, opacity ${duracion}ms linear ${retardo}ms`;
        contenedor.appendChild(pieza);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                pieza.style.transform = `translateY(${window.innerHeight + 100}px) rotate(${rotacion}deg)`;
                pieza.style.opacity = '0';
            });
        });
    }
}
