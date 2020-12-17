const prevButton = document.querySelector(".slider__arrow--prev");
const nextButton = document.querySelector(".slider__arrow--next");
const sliderContainer = document.querySelector(".slider__body");

const getActiveSlide = () => document.querySelector(".slider-item--visible");
const prevSlide = () => {
    const activeSlide = getActiveSlide();
    const prevSlide = activeSlide.previousElementSibling;

    activeSlide.classList.remove("slider-item--visible");
    if (prevSlide) {
        prevSlide.classList.add("slider-item--visible");
    } else {
        sliderContainer.lastElementChild.classList.add("slider-item--visible");
    }
};
const nextSlide = () => {
    const activeSlide = getActiveSlide();
    const nextSlide = activeSlide.nextElementSibling;
    
    activeSlide.classList.remove("slider-item--visible");
    if (nextSlide) {
        nextSlide.classList.add("slider-item--visible");
    } else {
        sliderContainer.firstElementChild.classList.add("slider-item--visible");
    }
};

let sliderInterval = setInterval(nextSlide, 2000);
prevButton.addEventListener("click", (el) => prevSlide());
nextButton.addEventListener("click", (el) => nextSlide());
sliderContainer.addEventListener("click", (el) => nextSlide());

/*
When the cursor is over the slide or navigation buttons - automatic scrolling stops
*/
const updateIntervelSlider = () => sliderInterval = setInterval(nextSlide, 2000);

sliderContainer.onmouseover = () => clearInterval(sliderInterval);
sliderContainer.onmouseout = () => updateIntervelSlider();
prevButton.onmouseover = () => clearInterval(sliderInterval);
prevButton.onmouseout = () => updateIntervelSlider();
nextButton.onmouseover = () => clearInterval(sliderInterval);
nextButton.onmouseout = () => updateIntervelSlider();