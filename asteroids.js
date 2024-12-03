// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Hero section fade-in on load
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    hero.classList.add('fade-in');
});

// Fade-in effect for sections
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('fade-in'); /* Ensure opacity is set */
        observer.observe(section);
    });
});

// Smooth Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero');
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                heroSection.classList.add('in-view');
            } else {
                heroSection.classList.remove('in-view');
            }
        },
        { threshold: 0.5 }
    );
    observer.observe(heroSection);
});
