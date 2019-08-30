/* navigation bar animation control */
window.onscroll = function() {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var node = document.getElementById('topbar');
    if (top > 400) {
        node.style.display = 'block';
    } else {
        node.style.display = 'none';
    }
}

/* Customer's Voice swiper control */
var mySwiper = new Swiper('.swiper-container', {
    type: 'bullets',
    loop: true,
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    speed: 1000,
    autoplay: false,
    spaceBetween: 10
})

$('span[id^="dropcross"]').click(function() {
    ($(this).attr('class') === "drop_cross_open") ?
    $(this).attr('class', 'drop_cross_close'): $(this).attr('class', 'drop_cross_open');
});