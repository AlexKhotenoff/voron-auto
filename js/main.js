var more_button = document.querySelector(".about-promo__more-button");

if (more_button) {
    more_button.addEventListener("click", function () {
        var extend_block = document.querySelector(".about-promo__wrapper_extend");

        if (extend_block) {
            // extend_block.classList.toggle("about-promo__wrapper_extend-show");

            if (!extend_block.classList.contains("about-promo__wrapper_extend-show")) {
                extend_block.classList.toggle("about-promo__wrapper_extend-show");
                more_button.textContent = "Скрыть";
                this.classList.toggle("about-promo__more-button_active")

            }
            else {
                extend_block.classList.toggle("about-promo__wrapper_extend-show");
                more_button.textContent = "Читать подробнее";
                this.classList.toggle("about-promo__more-button_active")
            }
        }
    });
}

var myHash = location.hash;
location.hash = '';

$(document).ready(function () {
    $('.main-nav__item-wrapper a[href*="#"]').click(function () {
        var hash = $(this).attr('href').split('#');
        $('html, body').animate({
            scrollTop: $('#' + hash[1]).offset().top
        }, 500, function () {
        });
    })

    if (myHash[1] !== undefined) {
        location.hash[0] = '';
        $('html, body').animate({ scrollTop: $(myHash).offset().top }, 500); //СЃРєСЂРѕР»Р»РёРј Р·Р° РїРѕР»СЃРµРєСѓРЅРґС‹ 
        location.hash = myHash;
    }
    if (window.location.hostname != '127.0.0.1') {
        if (jQuery.Lazy) {
            $('.lazy').Lazy();
        }

        $("input[name='phone_number']").mask("+7 999 999-9999", { autoclear: false });
        AjaxForm.initialize({
            "assetsUrl": "\/assets\/components\/ajaxform\/",
            "actionUrl": "\/assets\/components\/ajaxform\/action.php",
            "closeMessage": "",
            "formSelector": "form.ajax_form",
            "pageId": 1
        });
    }
    var owl = $(".owl-carousel").owlCarousel(
        {
            loop: true,
            margin: 10,
            // nav: true,
            items: 1,
            dots: true,
            passive: true,
            //  lazyLoad: true
        }
    );
    if (window.location.hostname != '127.0.0.1') {

        if (jQuery.Lazy) {
            owl.on('changed.owl.carousel', function (event) {
                $('.lazy[data-src^="/"]').Lazy();
            })
        }
    }

    if (window.location.hostname != '127.0.0.1') {

        if (jQuery.Lazy) {
            owl.on('changed.owl.carousel', function (event) {
                $('.lazy[data-src^="/"]').Lazy();
            })
        }
        $('a.lightcase').lightcase({
            showSequenceInfo: false,
            swipe: true,
            fullscreenModeForMobile: true,
            showTitle: false,
            inline: {
                showCaption: false
            }
        });
    }
});

//To top
var to_top = document.querySelector('.to-top');

if (to_top) {
    var top_button = to_top.querySelector('.to-top__button');

    top_button.addEventListener('click', function (){
        scrollTo(document.querySelector('header'));
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            if (!to_top.classList.contains('to-top_show')) {
                to_top.classList.add('to-top_show');
            }
        }
        else {
            if (to_top.classList.contains('to-top_show')) {
                to_top.classList.remove('to-top_show');
            }
        }
    });
}

//

//Scroll into view
var calc_button = document.querySelector('.header__button_service-calc');

if (calc_button) {
    calc_button.addEventListener('click', function () {
        scrollTo(document.querySelector('.service-calc'));
    });
}

function scrollTo(target_block) {
    if (target_block) {
        target_block.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// End of scroll

// Modals

var sent_message_button = document.querySelector('.main-footer__sent-message');
var repair_request_button = document.querySelector('.header__button_repair');
var evacuate_button = document.querySelector('.header__button_evacuator');
var callback_button = document.querySelector('.header__callback');
var service_request_button = document.querySelector('.calc-form__request-button');

if (sent_message_button) {
    modal_show(sent_message_button, '.modal_sent-message');
}

if (repair_request_button) {
    modal_show(repair_request_button, '.modal_repair-request');
}

if (evacuate_button) {
    modal_show(evacuate_button, '.modal_evacuate');
}

if (callback_button) {
    modal_show(callback_button, '.modal_callback');
}

function modal_accepted() {
    var modal = document.querySelector('.modal_accept');

    if (modal) {
        if (!modal.classList.contains('modal_show')) {
            modal.classList.add('modal_show');
            modal_init();
        }
    }
}

// if (service_request_button) {
// modal_show(service_request_button, '.modal_service-request');
// }

function modal_show(open_button, modal_window_class) {
    var body_block = document.querySelector('body');
    open_button.addEventListener('click', function () {
        var modal = document.querySelector(modal_window_class);

        if (modal) {
            if (!modal.classList.contains('modal_show')) {
                modal.classList.add('modal_show');
                body_block.classList.add('modal-active');
                modal_init();
            }
        }
    });
}

function modal_init() {
    let active_modal = document.querySelector('.modal_show');

    if (active_modal) {
        var cancel_button = active_modal.querySelector('.modal__button_cancel');
        var close_button = active_modal.querySelector('.modal__button_close');

        if (cancel_button) {
            cancel_button.addEventListener('click', function () {
                modal_close(active_modal);
            });
        }

        if (close_button) {
            close_button.addEventListener('click', function () {
                modal_close(active_modal);
            });
        }
    }

    window.addEventListener("keydown", function (evt) {

        if (evt.code === "Escape") {
            evt.preventDefault();
            modal_close(active_modal);
        }
    });
}

// function modal_close(modal_window) {
//     if (modal_window.classList.contains('modal_show')) {
//         modal_window.classList.remove('modal_show');
//     }
// }

function modal_close(modal_block) {
    var body_block = document.querySelector('body');

    modal_block.classList.add("modal_close");

    setTimeout(function () {
        if (modal_block.classList.contains("modal_show")) {
            modal_block.classList.remove("modal_show");
        }
        if (modal_block.classList.contains("modal_close")) {
            modal_block.classList.remove("modal_close");
            body_block.classList.remove('modal-active');
        }
    }, 490);
}

//   End of modals
