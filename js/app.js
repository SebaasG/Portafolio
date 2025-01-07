// Detectar cuando una sección entra en el viewport
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 }); // Cambia el 0.5 según el porcentaje de la sección visible que quieras

sections.forEach(section => {
    observer.observe(section);
});
