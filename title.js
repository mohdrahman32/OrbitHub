document.getElementById("launchButton").addEventListener("click", function () {
    // Rocket animation
    const rocketIcon = document.querySelector(".launch-btn i");
    rocketIcon.style.transform = "translateY(-200px)";
    rocketIcon.style.transition = "transform 1s ease";
  
    // Redirect to home page after animation
    setTimeout(() => {
      window.location.href = "home.html"; // Replace with your home page link
    }, 1000);
  });
  
  // GSAP for page animations
  gsap.from(".title", { duration: 1.5, opacity: 0, y: -50, ease: "power2.out" });
  gsap.from(".subtitle", { duration: 1.5, opacity: 0, y: 50, delay: 0.5, ease: "power2.out" });
  gsap.from(".launch-btn", { duration: 1.5, opacity: 0, scale: 0.8, delay: 1, ease: "elastic.out(1, 0.3)" });
  