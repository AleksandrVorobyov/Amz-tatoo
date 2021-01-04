const burgerBtn = document.querySelector("#burger-btn");
const burgerMenu = document.querySelector("#burger-menu");

burgerBtn.addEventListener('click', function() {
    burgerMenu.classList.toggle("header__burger--active");

    if (burgerMenu.classList.contains('header__burger--active')) {
        document.body.style.overflow='hidden';
    } else {
        document.body.style.overflow='scroll';
    }
});

const burgerLink = document.querySelectorAll(".header__burger-item");

burgerLink.forEach(function(item) {
    item.addEventListener('click', function(e) {
        if (e.target.querySelector('.header__burger-other').style.display == 'none') {
            e.target.querySelector('.header__burger-other').style.display='inline-flex';
        } else {
            e.target.querySelector('.header__burger-other').style.display='none';
        }
    });
});