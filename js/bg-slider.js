var slider = document.querySelector(".bg-slider");
var slides_count = 4;
var current_slide_index = 1;
var next_slide_index = getRandomIntInclusive(1, slides_count);
var assets_path = "./img/slider/";
var current_slide_path = assets_path + 1 + ".jpg";
var fade_interval = 3000;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (slider) {
    slider_init(slider, current_slide_path);

    slide_animation(slider, assets_path, fade_interval);
}

function slider_init(slider_container, img_path) {
    slider_container.appendChild(get_slide(img_path));
}

function slide_animation(slider_container, img_path, interval) {
    var tim = setInterval(() => next_slide(slider_container, current_slide_path, img_path + next_slide_index + ".jpg", interval), interval + 4000);
}

function get_slide(img_path) {
    var slide = document.createElement("div");
    slide.classList.add("bg-slider__slide");

    var slide_image = document.createElement("img");
    slide_image.setAttribute("src", img_path);

    slide.appendChild(slide_image);

    return slide;
}

function next_slide(slider_container, current_slide, img_path, interval) {
    //change 1st slide
    var curr_slide = slider_container.querySelector(".bg-slider__slide img");
    curr_slide.setAttribute("src", img_path);

    //create 2nd slide
    var slide = document.createElement("div");
    slide.classList.add("bg-slider__slide");
    slide.classList.add("bg-slider__slide_fade");

    var slide_image = document.createElement("img");
    slide_image.setAttribute("src", current_slide);

    slide.appendChild(slide_image);
    slider_container.appendChild(slide);

    setTimeout(() => slide.remove(), interval - 100);

    //change slide indexes
    current_slide_path = img_path;

    current_slide_index = next_slide_index;

    next_slide_index = getRandomIntInclusive(1, slides_count);

    if (next_slide_index === current_slide_index) {
        next_slide_index = getRandomIntInclusive(1, slides_count);
    }
}


