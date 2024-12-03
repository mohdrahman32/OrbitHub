// JavaScript for additional interactivity or animations

// Add smooth scrolling to any anchor links (if needed for navigation in the future)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Lazy loading for videos to improve page performance
const videos = document.querySelectorAll('video');
const videoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const video = entry.target;
            video.play();
        } else {
            entry.target.pause();
        }
    });
});

videos.forEach(video => videoObserver.observe(video));
