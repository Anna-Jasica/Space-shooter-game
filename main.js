const btn = document.getElementById("startButton");

function buttonClick() {
  btn.style.display = "none";
  document.getElementById("main").style.cursor = 'url("spaceship.jpg"), auto';
}

btn.addEventListener("click", buttonClick);
const state = {
  bullets: [],
  enemies: []
};

function init() {
  window.addEventListener("click", fire);
}

function fire(event) {
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");
  bullet.style.top = `${event.y}px`;
  bullet.style.left = `${event.x}px`;
  document.getElementById("space-shooter").appendChild(bullet);
  console.log("pew pew pew");
}

function update() {
  console.log("LIVE");
}

function startGame() {
  init();
  // window.requestAnimationFrame();
}

startGame();
console.log("TEST");

// class Coordinates {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
// }
