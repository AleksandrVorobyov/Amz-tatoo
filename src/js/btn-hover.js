const btnHover = document.querySelectorAll('.btn-hover');

btnHover.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let speedX = e.clientX - e.target.offsetLeft;
        let speedY = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = speedX + 'px';
        ripples.style.top = speedY + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove()
        }, 1000);
    });
});
