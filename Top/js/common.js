/* navigation bar animation control */
window.onscroll = function() {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    /* Topbar */
    var topbar = document.getElementById('topbar');

    /* Reserve Button */
    var reserve_btn = document.getElementById('reserve_btn');

    /* If top > 400 show navigation bar*/
    if (top > 400) {
        topbar.style.display = 'block';
    } else {
        topbar.style.display = 'none';
    }

    /* If top > 500 show reserve button */
    if (top > 400) {
        reserve_btn.style.display = 'block';
    } else {
        reserve_btn.style.display = 'none';
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

/* FAQ drop mark open&close */
$('span[id^="dropcross"]').click(function() {
    ($(this).attr('class') === "drop_cross_open") ?
    $(this).attr('class', 'drop_cross_close'): $(this).attr('class', 'drop_cross_open');
});