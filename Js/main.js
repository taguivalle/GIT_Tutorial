/* main.js – lógica de la página de tutoría Git & GitHub */

/* --------------------------------------------------------------
   1. Ejecutar cuando el DOM esté completamente cargado
   -------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    // 1️⃣ Resaltar el enlace del menú activo al hacer scroll
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menu a');

    const setActiveLink = () => {
        let idx = sections.length;
        while (--idx && window.scrollY + 150 < sections[idx].offsetTop) { }
        menuLinks.forEach(link => link.classList.remove('active'));
        menuLinks[idx].classList.add('active');
    };

    setActiveLink();                     // Estado inicial
    window.addEventListener('scroll', setActiveLink);

    /* ----------------------------------------------------------
       2️⃣ Copiar comandos Git al portapapeles (ejemplo práctico)
       ---------------------------------------------------------- */
    const copyButtons = document.querySelectorAll('.copy-btn');
    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.dataset.cmd;           // comando guardado en data‑cmd
            navigator.clipboard.writeText(cmd)
                .then(() => alert(`Copiado: ${cmd}`))
                .catch(err => console.error('Error al copiar:', err));
        });
    });

    /* ----------------------------------------------------------
       3️⃣ Otros comportamientos que puedas necesitar
       ---------------------------------------------------------- */
    // Por ejemplo, abrir un modal con ejemplos de código
    // const modal = new MyModal(); …
});