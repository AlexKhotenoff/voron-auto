// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel(
//         {
//             loop: true,
//             margin: 10,
//             // nav: true,
//             items: 1,
//             dots: true,
//         }
//     );
// });

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

});