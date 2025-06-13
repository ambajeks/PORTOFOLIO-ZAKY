let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// typing text code
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'AI Engineer', 'Pentester', 'jawa Ganteng'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
});