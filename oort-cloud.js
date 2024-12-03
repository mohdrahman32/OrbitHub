/* script.js */
// Add scroll animation for the description section
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.description h3, .description p, .description ul, .description hr');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});
