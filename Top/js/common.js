/* navigation bar animation control */
window.onscroll = function() {
    var top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    var width = document.body.offsetWidth;
    /* Topbar */
    var topbar = document.getElementById('topbar');
    var topbar_small = document.getElementById('topbar_small');

    /* Reserve Button */
    var reserve_btn = document.getElementById('reserve_btn');

    /* SNS Tab */
    var sns_tab = document.getElementById('sns_tab');

    /* If top > 480 show navigation bar*/
    if (top > 480) {
        if (width > 1400) {
            topbar.style.display = 'block';
            topbar_small.style.display = 'none';
        } else {
            topbar.style.display = 'none';
            topbar_small.style.display = 'flex';
        }
    } else {
        topbar.style.display = 'none';
        topbar_small.style.display = 'none';
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

$('#topbar').find('a').click(function() {
    tagAnimation(this);
});

$('#top_menu_modal').find('a').click(function() {
    tagAnimation(this);
});

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

$('div[id^="slide"]').click(function() {
    var str = $(this).attr('id');
    /*get Slide id */
    var slide_id = str.charAt(str.length - 1);

    $("#" + slide_id).slideToggle("fast");

    if ($(this).hasClass('btn_open')) {
        $(this).removeClass('btn_open');
        $(this).toggleClass("btn_close");

    } else {
        $(this).removeClass('btn_close');
        $(this).toggleClass("btn_open");
    }
});

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
        if (window.innerWidth < 480) {
            $('#contact_form_mobile_modal').show();
        } else {
            $('#contact_form_modal').show();
        }
    })

    /* Web Contact Form */
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

    /* Mobile Contact Form */
    $('#contact_form_mobile_line').click(function() {
        path = './img/contact_line.svg';
        createFormMobileImage(path)
    })

    $('#contact_form_mobile_whatsapp').click(function() {
        path = './img/contact_whatsapp.svg';
        createFormMobileImage(path)
    })

    $('#contact_form_mobile_wechat').click(function() {
        path = './img/contact_wechat.svg';
        createFormMobileImage(path)
    })

    $('#contact_form_mobile_call').click(function() {
        path = './img/contact_call.svg';
        createFormMobileImage(path)
    })

    $('#modal_close_btn').click(function() {
        $('#contact_modal').hide();
    });

    $('#form_modal_close_btn').click(function() {
        $('#contact_form_modal').hide();
    });

    $('#form_modal_mobile_close_btn').click(function() {
        $('#contact_form_mobile_modal').hide();
    });
}

/* Small Screen Top Menu Open & Close */
$('#top_small_nav_open').click(function() {
    if ($(this).attr('src') === "./img/top_menu_open.svg") {
        $(this).attr('src', './img/top_menu_cross.svg');
        $('#top_nav_modal').slideDown(200);
    } else {
        $(this).attr('src', './img/top_menu_open.svg');
        $('#top_nav_modal').slideUp(200);
    }
})

$('#top_nav_modal a').click(function() {
    tagAnimation(this);
    $('#top_nav_modal').hide();
    $('#top_small_nav_open').attr('src', './img/top_menu_open.svg')
})

/* Mobile Top Menu Open & Close*/
$('#top_menu_open').click(function() {
    changeMenuOpenMark(this);
})

/* Top Language Open & Close */
$('#top_bar_language').click(function() {
    showLanguageModal();
})

$('#top_bar_language2').click(function() {
    showLanguageModal();
})

/* Top Small Language Open & Close */
$('#top_small_language_open').click(function() {
    showLanguageModal();
})


/* Mobile Top Language Open & Close */
$('#language_open').click(function() {
    if ($('#top_language_modal').is(':visible')) {
        $(this).attr('src', './img/top_menu_cross.svg');
        $('#top_language_modal').slideUp(200);
    } else {
        $(this).attr('src', './img/icon_earth.svg');
        $('#top_language_modal').slideDown(200);
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

/* Close Modal after clicking background */
$('#contact_content').click(function() {
    stopPropagation();
})

$('#contact_form').click(function() {
    stopPropagation();
})

$('#contact_form_mobie').click(function() {
    stopPropagation();
})


$('#contact_modal').click(function() {
    hideModal(this);
})

$('#contact_form_modal').click(function() {
    hideModal(this);
})

$('#contact_form_mobile_modal').click(function() {
    hideModal(this);
})

function stopPropagation(content_id) {
    event.stopPropagation();
}

function hideModal(modal_id) {
    $(modal_id).hide();
}

function changeMenuOpenMark(id) {
    if ($(id).attr('src') === "./img/top_menu_open.svg") {
        $(id).attr('src', './img/top_menu_cross.svg');
        $('#top_menu_modal').slideDown(200);
    } else {
        $(id).attr('src', './img/top_menu_open.svg');
        $('#top_menu_modal').slideUp(200);
    }
}

function showLanguageModal() {
    if ($('#top_language_modal').is(':visible')) {
        $('#top_language_modal').slideUp(200);
    } else {
        $('#top_language_modal').slideDown(200);
    }
}

function tagAnimation(id) {
    $("html, body").animate({ scrollTop: $($(id).attr("href")).offset().top - 20 + "px" }, 500);
    return false;
}

function createModalImage(path) {
    $('#modal_image').attr('src', path);
    $('#contact_modal').show();
}

function createFormModalImage(path) {
    $('#form_modal_img').attr('src', path);
}

/* Mobile */
function createFormMobileImage(path) {
    $('#contact_form_mobile_img').attr('src', path);
}