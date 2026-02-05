/* main.js – lógica de la página de tutoría Git & GitHub */

/* --------------------------------------------------------------
   1️⃣ Ejecutar cuando el DOM esté completamente cargado
   -------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

    /* ----------------------------------------------------------
       1️⃣ Resaltar el enlace del menú activo al hacer scroll
       ---------------------------------------------------------- */
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menu a');

    const setActiveLink = () => {
        // Busca la sección más cercana al top (+150px de margen)
        let idx = sections.length;
        while (--idx && window.scrollY + 150 < sections[idx].offsetTop) { }
        menuLinks.forEach(l => l.classList.remove('active'));
        if (menuLinks[idx]) menuLinks[idx].classList.add('active');
    };
    setActiveLink();
    window.addEventListener('scroll', setActiveLink);

    /* ----------------------------------------------------------
       2️⃣ Copiar comandos Git al portapapeles
       ---------------------------------------------------------- */
    const commandBlocks = document.querySelectorAll('.command-block');

    commandBlocks.forEach(block => {
        const codeEl = block.querySelector('code');
        const cmdText = codeEl ? codeEl.innerText.trim() : '';

        // Crear botón si no existe
        let copyBtn = block.querySelector('.copy-btn');
        if (!copyBtn) {
            copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.type = 'button';
            copyBtn.textContent = 'Copiar';
            block.appendChild(copyBtn);
        }

        // Guardar el comando en data‑attribute (útil para futuros usos)
        copyBtn.dataset.cmd = cmdText;

        copyBtn.addEventListener('click', async () => {
            const txt = copyBtn.dataset.cmd;
            try {
                await navigator.clipboard.writeText(txt);
                // Feedback visual breve
                const original = copyBtn.textContent;
                copyBtn.textContent = '¡Copiado!';
                setTimeout(() => copyBtn.textContent = original, 1500);
            } catch (e) {
                console.error('Error al copiar:', e);
                alert('No se pudo copiar al portapapeles.');
            }
        });
    });

    /* ----------------------------------------------------------
       3️⃣ Menú hamburguesa (responsive)
       ---------------------------------------------------------- */
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const nav = document.getElementById('site-nav');

    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
            nav.querySelector('.menu').classList.toggle('show');
            toggleBtn.classList.toggle('open');
        });
    }

    /* ----------------------------------------------------------
       4️⃣ Otros comportamientos (ejemplo modal) – placeholder
       ---------------------------------------------------------- */
    // const modal = new MyModal(); …
});