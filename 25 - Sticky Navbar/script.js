const navbar = document.querySelector('#navbar');
window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > navbar.offsetHeight + 150){
        navbar.classList.add('active');
    } else {
        navbar.classList.remove('active');
    }
}