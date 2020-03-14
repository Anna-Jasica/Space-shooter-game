const btn = document.getElementById("startButton");

function buttonClick() {
    btn.style.display = "none";
    document.getElementById("main").style.cursor = "none";
}

btn.addEventListener("click", buttonClick);
function init() {
    window.addEventListener("click", fire);
}

function fire(event) {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.top = `${event.y}px`;
    bullet.style.left = `${event.x}px`;
    document.getElementById("main").appendChild(bullet);
    console.log("pew pew pew");
}

function update() {
    const bullets = document.getElementsByClassName("bullet");
    for (bullet of bullets) {
        bullet.style.left = `${+bullet.style.left.slice(0, -2) + 1}px`;
        if (!isBulletWithinScreen(bullet)) {
            bullet.remove();
        }
    }
    window.requestAnimationFrame(update);
}

function isBulletWithinScreen(bullet) {
    if (+bullet.style.left.slice(0, -2) > window.innerWidth) {
        return false;
    }
    return true;
}

function startGame() {
    init();
    update();
}

startGame();

class Bullet {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        state.bullets.push;
    }

    draw() {}
}
