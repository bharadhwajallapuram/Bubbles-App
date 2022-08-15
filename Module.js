const initialColor = [
  "red",
  "blue",
  "green",
  "orange",
  "yellow",
  "purple",
  "brown",
  "pink",
  "olive",
  "violet",
];
const changeColor = initialColor.map((item) => item).reverse();
const allCanvas = document.querySelector(".all-canvas");
let number = null;
function createElements() {
  number = number || 4;
  for (let i = 1; i <= number; i++) {
    const div = document.createElement("div");
    div.classList.add("canvas-container");
    div.innerHTML = `<canvas class="canvas"></canvas><div><h1 class="arrow">&#8592;</h1></div>`;
    allCanvas.appendChild(div);
  }
}
function createCircle() {
  allCanvas.innerHTML = "";
  createElements();
  const canvas = document.querySelectorAll(".canvas");
  const container = document.querySelectorAll(".canvas-container");
  for (let i = 0; i < canvas.length; i++) {
    canvas[i].style.backgroundColor = initialColor[i % initialColor.length];
    canvas[i].addEventListener("click", () => {
      canvas[i].style.backgroundColor = changeColor[i % initialColor.length];
      container[i].style.justifyContent = "start";
    });
  }
}
createCircle();
document.querySelector(".btn").addEventListener("click", () => {
  number = document.querySelector("input").value;
  createCircle();
});
document
  .getElementsByClassName("reset-btn")[0]
  .addEventListener("click", createCircle);

  