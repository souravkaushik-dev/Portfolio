const WIDTH = 33.33;

const btnContainer = document.querySelector(".container");

function slideBg(n) {
  const bgOffset = WIDTH * n;
  btnContainer.style.setProperty("--bg-offset", `${bgOffset}%`);
}