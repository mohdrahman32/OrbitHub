// Scroll animations for description sections
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".content h3, .content ul li");
    elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
            element.style.transition = "all 0.5s ease-in-out";
        } else {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
        }
    });
});
