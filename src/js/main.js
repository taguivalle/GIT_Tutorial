/* -------------------------------------------------
   main.js – lógica de interacción para la tutoría Git
   ------------------------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    /* -------------------------------------------------
       1️⃣  MENU MÓVIL (hamburguesa)
       ------------------------------------------------- */
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.querySelector('.site-nav ul.menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show'); // muestra/oculta el menú en móvil
        });
    }

    /* -------------------------------------------------
       2️⃣  BOTONES “COPIAR” EN BLOQUES DE CÓDIGO
       ------------------------------------------------- */
    const commandBlocks = document.querySelectorAll('.command-block');

    commandBlocks.forEach(block => {
        // Creamos el botón y el mensaje de feedback
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.textContent = 'Copiar';

        const feedback = document.createElement('div');
        feedback.className = 'copy-feedback';
        feedback.textContent = '¡Copiado!';

        // Insertamos el botón y el mensaje dentro del bloque
        block.appendChild(copyBtn);
        block.appendChild(feedback);

        // Acción al pulsar el botón
        copyBtn.addEventListener('click', () => {
            const code = block.querySelector('pre code');
            if (!code) return;

            // Copiamos el texto al portapapeles
            navigator.clipboard.writeText(code.innerText).then(() => {
                // Mostramos el mensaje de éxito
                feedback.classList.add('show');
                // Lo ocultamos tras 1.5 s
                setTimeout(() => feedback.classList.remove('show'), 1500);
            }).catch(err => {
                // En caso de error (p. ej. HTTPS requerido)
                console.error('Error al copiar al portapapeles:', err);
            });
        });
    });

}); // <-- Cierre del listener DOMContentLoaded