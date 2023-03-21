// Adjust add scrolled class to navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        document.querySelector('.navbar').classList.add('scrolled');
    }else {
        document.querySelector('.navbar').classList.remove('scrolled');
    }
})