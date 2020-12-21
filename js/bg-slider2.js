var slider = document.querySelector(".bg-slider");
var slides_count = 0;
var current_slide_index = 0;
var next_slide_index = 0;
var fade_interval = 3000;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (slider) {
    slider_init(slider);
}

function slider_init(slider_container) {

    //Получаем кол-во слайдов
    var slides = slider.querySelectorAll(".bg-slider__slide");
    slides_count = slides.length;

    if (slides_count > 0) {

        next_slide_index = getRandomIntInclusive(0, slides_count - 1);


        //Скрываем все слайды, кроме первого
        for (let i = 1; i < slides.length; i++) {
            slides[i].classList.add('_hidden');
        }

        slide_animation(slides, fade_interval);

    }
}

function slide_animation(slide_list, interval) {
    var tim = setInterval(() => next_slide(slide_list, current_slide_index, next_slide_index, interval), interval + 4000);
}

function next_slide(slide_list, current_slide, next_slide, interval) {

    //скрываем текущий слайд
    slide_list[current_slide].classList.add('_hidden');

    //делаем видимым следующий слайд
    slide_list[next_slide].classList.remove('_hidden');

    //добавляем fade с текущим слайдом в конец списка слайдов

    //create 2nd slide
    var slide = document.createElement("div");
    slide.classList.add("bg-slider__slide");
    slide.classList.add("bg-slider__slide_fade");

    var slide_image = document.createElement("img");
    var buff_image = slide_list[current_slide].querySelector('img');

    if (buff_image) {
        slide_image.setAttribute("src", buff_image.attributes.src.value);
    }

    slide.appendChild(slide_image);

    slide_list[current_slide_index].parentNode.appendChild(slide);

    setTimeout(() => slide.remove(), interval - 100);

    //change slide indexes
    current_slide_index = next_slide_index;

    next_slide_index = getRandomIntInclusive(0, slide_list.length - 1);

    if (next_slide_index === current_slide_index) {
        next_slide_index = getRandomIntInclusive(0, slide_list.length - 1);
    }
}


