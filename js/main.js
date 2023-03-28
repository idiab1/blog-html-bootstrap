// Adjust add scrolled class to navbar
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    }else {
        navbar.classList.remove('scrolled');
    }
})

// Calculate min height to main content
document.querySelector('.main-content').style.minHeight = window.innerHeight -  (document.querySelector('.footer').clientHeight) + 'px'
