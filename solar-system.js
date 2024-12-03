/* script-solar-system.js */
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.right === '0px') {
        menu.style.right = '-250px';
    } else {
        menu.style.right = '0px';
    }
}

// Add scroll animation for description section
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.description h3, .description p, .description ul, .description ol, .description hr');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Toggle Bright Mode
function toggleBrightMode() {
    document.body.classList.toggle('bright-mode');
}
