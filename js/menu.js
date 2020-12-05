//menu vars
var nav_list = document.querySelector('.main-nav__list');
var toggle_button = document.querySelector('.main-nav__toggle');
var sandvitch_icon = document.querySelector('.main-nav__sandvitch');
var nav_dropdown_button = nav_list.querySelectorAll('.main-nav__button_dropdown');
//end of menu vars

find_submenu();

//menu
toggle_button.addEventListener('click', function () {
    menu_toggle();
});

nav_dropdown_button.forEach(element => {
    element.addEventListener('click', function () {
        element.classList.toggle('main-nav__button_dropdown-open');
        element.parentElement.parentElement.querySelector('.main-nav__list_sub-menu').classList.toggle('main-nav__list_sub-menu-open');
    });
});


function menu_toggle() {
    if (!sandvitch_icon.classList.contains('main-nav__sandvitch_on')) {
        menu_open();
    }
    else {
        menu_close();
    }
}

function menu_open() {
    if (!sandvitch_icon.classList.contains('main-nav__sandvitch_on')) {
        sandvitch_icon.classList.add('main-nav__sandvitch_on');

        if (nav_list.classList.contains('main-nav__list_no-mobile')) {
            nav_list.classList.remove('main-nav__list_no-mobile');
            nav_list.classList.add('main-nav__list_mobile');
            nav_list.classList.add('main-nav__list_mobile-open');
        }
    }
}

function menu_close() {
    if (sandvitch_icon.classList.contains('main-nav__sandvitch_on')) {
        sandvitch_icon.classList.remove('main-nav__sandvitch_on');
        sandvitch_icon.classList.add('main-nav__sandvitch_off');

        if (nav_list.classList.contains('main-nav__list_mobile')) {
            nav_list.classList.remove('main-nav__list_mobile-open');
            nav_list.classList.add('main-nav__list_mobile-close');
            setTimeout(function () {
                nav_list.classList.remove('main-nav__list_mobile');
                nav_list.classList.remove('main-nav__list_mobile-open');
                nav_list.classList.remove('main-nav__list_mobile-close');
                nav_list.classList.add('main-nav__list_no-mobile');
            }, 350);
        }

        setTimeout(function () {
            sandvitch_icon.classList.remove('main-nav__sandvitch_off');
        }, 500);
    }
}

//end of menu


//dropdown
var dropdown_button = document.querySelectorAll('.dropdown');
var dropdown_active = document.querySelectorAll('.dropdown');
var dropdown_container = document.querySelectorAll('.dropdown__container');

var dropdown_options = {
    accordion: true
};

dropdown_button.forEach(element => {
    element.addEventListener('click', function () {
        if (dropdown_options.accordion) {
            if (element.classList.contains('dropdown_active')) {
                element.classList.toggle('dropdown_active');
                element.parentElement.parentElement.querySelector('.dropdown__container').classList.toggle('dropdown__container_show');
            } else {
                dropdown_active.forEach(dpa => {
                    if (dpa.classList.contains('dropdown_active')) {
                        dpa.classList.remove('dropdown_active');
                    }
                });

                dropdown_container.forEach(dpc => {
                    if (dpc.classList.contains('dropdown__container_show')) {
                        dpc.classList.remove('dropdown__container_show');
                    }
                });

                element.classList.add('dropdown_active');
                element.parentElement.parentElement.querySelector('.dropdown__container').classList.add('dropdown__container_show');
            }

        }
        else {
            element.classList.toggle('dropdown_active');
            element.parentElement.parentElement.querySelector('.dropdown__container').classList.toggle('dropdown__container_show');
        }
    });
});

//close mobile menu if window is orientation changed
window.addEventListener("orientationchange", function () {
    menu_close();
  }, false);

function find_submenu() {
    var nav_item_array = nav_list.querySelectorAll(".main-nav__item");

    nav_item_array.forEach(element => {
        if (element.querySelector("ul")) {
            element.classList.add("main-nav__item_sub-menu-arrow");
        }
    });
}