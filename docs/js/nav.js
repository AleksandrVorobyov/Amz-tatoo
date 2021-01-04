window.onscroll = function showNav() {
    const nav = document.querySelector('.navigation');
    if (window.pageYOffset > 100) {
        nav.classList.add('navigation--active');
    } else {
        nav.classList.remove('navigation--active');
    }
}