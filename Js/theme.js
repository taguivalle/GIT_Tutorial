/* js/theme.js --------------------------------------------------- */
(() => {
    const THEME_KEY = "preferredTheme";
    const htmlEl = document.documentElement;          // <html>
    const toggleBtn = document.getElementById("theme-toggle");

    // 1️⃣ Leer preferencia guardada (si existe)
    const savedTheme = localStorage.getItem(THEME_KEY);

    // 2️⃣ Determinar tema inicial
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    // 3️⃣ Aplicar tema al cargar la página
    setTheme(initialTheme);

    // 4️⃣ Listener del botón
    toggleBtn.addEventListener("click", () => {
        const newTheme = htmlEl.getAttribute("data-theme") === "dark" ? "light" : "dark";
        setTheme(newTheme);
    });

    // -------------------------------------------------------------
    function setTheme(theme) {
        htmlEl.setAttribute("data-theme", theme);
        localStorage.setItem(THEME_KEY, theme);

        // Cambiar el label accesible del botón
        toggleBtn.setAttribute(
            "aria-label",
            theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
        );
    }
})();