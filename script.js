// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});
