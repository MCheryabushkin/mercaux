const prevButton = document.querySelector(".slider__arrow--prev");
const nextButton = document.querySelector(".slider__arrow--next");
const sliderContainer = document.querySelector(".slider__body");

const getActiveSlide = () => document.querySelector(".slider-item--visible");
const prevSlide = () => {
  const activeSlide = getActiveSlide();
  if (activeSlide) {
    const prevSlide = activeSlide.previousElementSibling;
  
    activeSlide.classList.remove("slider-item--visible");
    if (prevSlide) {
      prevSlide.classList.add("slider-item--visible");
    } else {
      sliderContainer.lastElementChild.classList.add("slider-item--visible");
    }
  }
};
const nextSlide = () => {
  const activeSlide = getActiveSlide();
  if (activeSlide) {
    const nextSlide = activeSlide.nextElementSibling;
  
    activeSlide.classList.remove("slider-item--visible");
    if (nextSlide) {
      nextSlide.classList.add("slider-item--visible");
    } else {
      sliderContainer.firstElementChild.classList.add("slider-item--visible");
    }
  }
};

let sliderInterval = setInterval(nextSlide, 2000);

if (prevButton && nextButton && sliderContainer) {
  prevButton.addEventListener("click", (el) => prevSlide());
  nextButton.addEventListener("click", (el) => nextSlide());
  sliderContainer.addEventListener("click", (el) => nextSlide());

  /*
When the cursor is over the slide or navigation buttons - automatic scrolling stops
*/

  sliderContainer.onmouseover = () => clearInterval(sliderInterval);
  sliderContainer.onmouseout = () =>
    (sliderInterval = setInterval(nextSlide, 2000));
  prevButton.onmouseover = () => clearInterval(sliderInterval);
  prevButton.onmouseout = () => (sliderInterval = setInterval(nextSlide, 2000));
  nextButton.onmouseover = () => clearInterval(sliderInterval);
  nextButton.onmouseout = () => (sliderInterval = setInterval(nextSlide, 2000));
}
