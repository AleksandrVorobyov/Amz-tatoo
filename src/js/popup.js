const galleryImg = document.querySelectorAll('.gallery__cards-item');
const body = document.querySelector('body');

galleryImg.forEach(function(item) {
    item.addEventListener('click', function() {
        let imgHref = this.querySelector("img").src;
        if (document.querySelector('.gallery__cards-item--active') == undefined) {
            galleryImgActive(imgHref);
        } else {
            document.querySelector('.gallery__cards-item--active').remove();
        }
    });
})

function galleryImgActive (item) {
    let galleryActive = document.createElement('div');
    galleryActive.className = "gallery__cards-item--active";
    galleryActive.style.background= `url('${item}')`;
    document.body.appendChild(galleryActive);

    galleryActive.addEventListener('click', function() {
        this.remove();
    });
}

