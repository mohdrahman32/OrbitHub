// GSAP Animations for Hero Section
gsap.from(".animated-text", { duration: 1.5, y: -50, opacity: 0, ease: "power2.out" });
gsap.from(".animated-subtext", { duration: 1.5, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from(".hero-links a", { 
  duration: 1, 
  opacity: 0, 
  scale: 0.8, 
  stagger: 0.2, 
  delay: 1, 
  ease: "elastic.out(1, 0.3)" 
});

// Smooth Scroll with Push-Up Effect
document.querySelectorAll('.scroll-btn').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(btn.getAttribute('href'));
    gsap.to(window, { 
      duration: 1.5, 
      scrollTo: { y: target.offsetTop }, 
      ease: "power2.out" 
    });
  });
});
