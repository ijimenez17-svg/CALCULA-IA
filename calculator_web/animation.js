let posicionX = 0;
let posicionY = 0;
const velocidadX = 0.2; 
const velocidadY = 0.2; 

function animarFondo() {
    posicionX += velocidadX;
    posicionY -= velocidadY; 

    // Usamos .setProperty con 'important' para asegurarnos de que CSS no ignore a JavaScript
    document.body.style.setProperty(
        'background-position', 
        `${posicionX}px ${posicionY}px, ${posicionX * 1.5}px ${posicionY * 1.5}px, 0 0`, 
        'important'
    );

    requestAnimationFrame(animarFondo);
}

// Arrancamos la animación en cuanto cargue el archivo
animarFondo();