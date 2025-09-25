document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');

        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
                });
            }
        });

        const header = document.querySelector('.header');
        header.classList.toggle('sticky', window.scrollY > 100);
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.work-container, .portfolio-box, .contact form', { origin: 'bottom' });

    new Typed('.multiple-text', {
        strings: ['UI/UX Designer', 'Front EndDeveloper'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    });
});
