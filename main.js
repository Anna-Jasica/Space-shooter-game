const btn = document.getElementById("startButton");
const ship = document.getElementById("ship");

const ENEMY_SPEED = 4;
const BULLET_SPEED = 3;

function buttonClick() {
    btn.style.display = "none";
    ship.style.display = "block";
    document.getElementById("main").style.cursor = "none";
    document.addEventListener("mousemove", shipTrack);
    startGame();
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
    handleEnemies();
    handleBullets();
    window.requestAnimationFrame(update);
}

function shipTrack(e) {
    let positionX = e.clientX;
    let positionY = e.clientY;
    document.getElementById("ship").style.top = `${positionY - 39}px`;
    document.getElementById("ship").style.left = `${positionX - 80}px`;
}

function handleEnemies() {
    const enemies = document.getElementsByClassName("enemy");
    for (enemy of enemies) {
        enemy.style.left = `${+enemy.style.left.slice(0, -2) - ENEMY_SPEED}px`;
        // if (!isBulletWithinScreen(enemy)) {
        //     enemy.remove();
        // }
    }
}

function spawnEnemy() {
    const enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.style.top = `${getRandomInteger(0, window.innerHeight - 25)}px`;
    enemy.style.left = `${window.innerWidth - 25}px`;
    document.getElementById("main").appendChild(enemy);
    console.log("am am am");
}

function handleBullets() {
    const bullets = document.getElementsByClassName("bullet");
    for (bullet of bullets) {
        bullet.style.left = `${+bullet.style.left.slice(0, -2) +
            BULLET_SPEED}px`;
        if (isEnemyHit(bullet)) {
            bullet.remove();
        }
        if (!isBulletWithinScreen(bullet)) {
            bullet.remove();
        }
    }
}

function isEnemyHit(bullet) {
    const bulletCoordinates = new Coordinates(
        +bullet.style.left.slice(0, -2) +
            getComputedStyle(bullet).width.slice(0, -2) / 2,
        +bullet.style.top.slice(0, -2) +
            getComputedStyle(bullet).height.slice(0, -2) / 2
    );
    const enemies = document.getElementsByClassName("enemy");
    for (enemy of enemies) {
        const enemyCoordinates = new Coordinates(
            +enemy.style.left.slice(0, -2) +
                getComputedStyle(enemy).width.slice(0, -2) / 2,
            +enemy.style.top.slice(0, -2) +
                getComputedStyle(enemy).height.slice(0, -2) / 2
        );
        if (
            bulletCoordinates.calculateVerticalDistance(enemyCoordinates) <
                getComputedStyle(enemy).height.slice(0, -2) / 2 &&
            bulletCoordinates.calculateHorizontalDistance(enemyCoordinates) <
                getComputedStyle(enemy).height.slice(0, -2) / 2
        ) {
            enemy.remove();
            return true;
        }
    }
    return false;
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
    setInterval(spawnEnemy, 1000);
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function isCollide(a, b) {
//     return !(
//         ((a.y + a.height) < (b.y)) ||
//         (a.y > (b.y + b.height)) ||
//         ((a.x + a.width) < b.x) ||
//         (a.x > (b.x + b.width))
//     );
// }

class Coordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    calculateVerticalDistance(coordinates) {
        return Math.abs(this.y - coordinates.y);
    }

    calculateHorizontalDistance(coordinates) {
        return Math.abs(this.x - coordinates.x);
    }

    static calculateVerticalDistance(coordinates1, coordinates2) {
        return Math.abs(coordinates1.y - coordinates2.y);
    }

    static calculateHorizontalDistance(coordinates1, coordinates2) {
        return Math.abs(coordinates1.x - coordinates2.x);
    }
}
