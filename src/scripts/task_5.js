const header = document.querySelector(".header");
const image = document.querySelector("img");

const onWheel = (e) => {
  if (window.pageYOffset > 0) {
    header.classList.add("header--scroll");
		header.style.transition = "all 1s";
		image.style.transition = "all 1s";
  } else {
    header.classList.remove("header--scroll");
  }
};

if (header) {
  if (window.pageYOffset > 0) header.classList.add("header--scroll");

  document.onwheel = (delta) => {
    onWheel(delta); 
  };
}
