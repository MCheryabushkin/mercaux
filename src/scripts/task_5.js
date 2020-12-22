const header = document.querySelector(".header");
const onWheel = (e) => {
  if (window.pageYOffset > 0) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
};

if (header) {
  if (window.pageYOffset > 0) header.classList.add("header--scroll");

  document.onwheel = (delta) => {
      console.log(delta);
    onWheel(delta);
  };
}
