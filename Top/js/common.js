/* navigation bar animation control */
window.onscroll = function() {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    /* Topbar */
    var topbar = document.getElementById('topbar');

    /* Reserve Button */
    var reserve_btn = document.getElementById('reserve_btn');

    /* SNS Tab */
    var sns_tab = document.getElementById('sns_tab');

    /* If top > 380 show navigation bar*/
    if (top > 380) {
        topbar.style.display = 'block';
    } else {
        topbar.style.display = 'none';
    }

    /* If top > 500 show reserve button */
    if (top > 700) {
        reserve_btn.style.display = 'flex';
    } else {
        reserve_btn.style.display = 'none';
    }

    /* If top > 500 show sns tab */
    if (top > 700) {
        sns_tab.style.display = 'flex';
    } else {
        sns_tab.style.display = 'none';
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

function createModalImage(path) {
    $('#modal_image').attr('src', path);
    $('#contact_modal').show();
}

function createFormModalImage(path) {
    $('#form_modal_img').attr('src', path);
}

/* side bar contact modal */
window.onload = function() {
    /* modal image path */
    let path;

    $('#line').click(function() {
        path = './img/contact_line.svg';
        createModalImage(path);
    });

    $('#whatsapp').click(function() {
        path = './img/contact_whatsapp.svg';
        createModalImage(path);
    });

    $('#wechat').click(function() {
        path = './img/contact_wechat.svg';
        createModalImage(path);
    });

    $('#call').click(function() {
        path = './img/contact_call.svg';
        createModalImage(path);
    });

    /* contact modal */
    $('#contact_form_btn').click(function() {
        $('#contact_form_modal').slideDown(1000);
    })

    $('#contact_form_line').click(function() {
        path = './img/contact_line.svg';
        createFormModalImage(path)
    })

    $('#contact_form_whatsapp').click(function() {
        path = './img/contact_whatsapp.svg';
        createFormModalImage(path)
    })

    $('#contact_form_wechat').click(function() {
        path = './img/contact_wechat.svg';
        createFormModalImage(path)
    })

    $('#contact_form_call').click(function() {
        path = './img/contact_call.svg';
        createFormModalImage(path)
    })

    $('#modal_close_btn').click(function() {
        $('#contact_modal').slideUp(200);
    });

    $('#form_moda_close_btn').click(function() {
        $('#contact_form_modal').slideUp(200);
    });
}

/* Mobile Top Menu Open & Close*/
$('#top_menu_open').click(function() {
    if ($(this).attr('src') === "./img/top_menu_open.svg") {
        $(this).attr('src', './img/top_menu_cross.svg');
        $('#top_menu_modal').slideDown(200);
    } else {
        $(this).attr('src', './img/top_menu_open.svg');
        $('#top_menu_modal').slideUp(200);

    }
})

/*Mobile Top Language Open & Close */
$('#language_open').click(function() {
    if ($(this).attr('src') === "./img/icon_earth.svg") {
        $(this).attr('src', './img/top_menu_cross.svg');
        $('#top_language_modal').slideDown(200);
    } else {
        $(this).attr('src', './img/icon_earth.svg');
        $('#top_language_modal').slideUp(200);

    }
})

/* Close Mobile Top Language after clicking */
$('#top_language_modal').click(function() {
    $('#top_language_modal').hide();
    $('#language_open').attr('src', './img/icon_earth.svg');
})

/* Close Mobile Top Menu after clicking */
$('#top_menu_modal').click(function() {
    $('#top_menu_modal').hide();
    $('#top_menu_open').attr('src', './img/top_menu_open.svg');
})