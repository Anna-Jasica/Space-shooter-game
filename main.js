const ENEMY_SPEED = 3;
const BULLET_SPEED = 3;
const ENEMY_SPAWN_TIME = 1000;
let intervalId;
let isGameRunning = false;

function init(event) {
    resetKillCount();
    document.getElementById("startButton").style.display = "none";
    document.getElementById("endButton").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("ship").style.display = "block";
    document.getElementById("ship").setAttribute("draggable", false);
    document.getElementById("main").style.cursor = "none";
    console.log(event);
    window.addEventListener("click", fire, true);
    window.addEventListener("mousemove", shipTrack);
    startGame();
}

function fire(event) {
    const bullet = document.createElement("img");
    bullet.src = "bullet.png";
    bullet.classList.add("bullet");
    document.getElementById("main").appendChild(bullet);
    bullet.style.top = `${event.y - getHeight(bullet) / 2}px`;
    bullet.style.left = `${event.x}px`;
    bullet.setAttribute("draggable", false);
    console.log("pew pew pew");
}

function shipTrack(e) {
    let positionX = e.clientX;
    let positionY = e.clientY;
    const ship = document.getElementById("ship");
    ship.style.top = `${positionY - getHeight(ship) / 2}px`;
    ship.style.left = `${positionX - getWidth(ship) / 2}px`;
}

function startGame() {
    if (!isGameRunning) {
        update();
        isGameRunning = true;
    }

    intervalId = setInterval(() => spawnEnemy(), ENEMY_SPAWN_TIME);
}

function update() {
    handleEnemies();
    handleBullets();
    window.requestAnimationFrame(update);
}

function spawnEnemy() {
    const enemy = document.createElement("img");
    enemy.src = "alien.png";
    enemy.classList.add("enemy");
    document.getElementById("main").appendChild(enemy);
    enemy.style.top = `${getRandomInteger(
        0,
        window.innerHeight - getHeight(enemy)
    )}px`;
    enemy.style.left = `${window.innerWidth}px`;
    console.log("am am am");
}

function handleEnemies() {
    const enemies = document.getElementsByClassName("enemy");
    for (enemy of enemies) {
        enemy.style.left = `${+enemy.style.left.slice(0, -2) - ENEMY_SPEED}px`;
        if (Number(enemy.style.left.slice(0, -2)) < 0) {
            // remove enemy from html (needed in case 1 not killed enemy doesn't lose game)
            // stop game and display game over
            enemy.remove();
            gameOver();
            console.log("game over");
        }
        if (isShipCollision(enemy)) {
            // stop game and display game over
            console.log(document);
            displayExplosion(enemy);
            gameOver();
            console.log("game over");
        }
    }
}

function gameOver() {
    const gameOver = document.getElementById("gameOver");
    window.removeEventListener("click", fire, true);
    document.getElementById("ship").style.display = "none";
    clearInterval(intervalId);
    gameOver.style.display = "block";
    endButton.style.display = "block";
    gameOver.innerText = "Game Over!";
    document.getElementById("main").style.cursor = "auto";
    //remove all enemies and bullets from game
    const enemies = document.getElementsByClassName("enemy");
    Array.from(enemies).forEach(enemy => enemy.remove());
    const bullets = document.getElementsByClassName("bullet");
    Array.from(bullets).forEach(enemy => enemy.remove());
}

function isShipCollision(enemy) {
    const ship = document.getElementById("ship");
    const shipWidth = getWidth(ship);
    const shipHeight = getHeight(ship);
    const shipCoordinates = new Coordinates(
        +ship.style.left.slice(0, -2) + shipWidth / 2,
        +ship.style.top.slice(0, -2) + shipHeight / 2
    );

    const enemyWidth = getWidth(enemy);
    const enemyHeight = getHeight(enemy);
    const enemyCoordinates = new Coordinates(
        +enemy.style.left.slice(0, -2) + enemyWidth / 2, // give center position, not corner
        +enemy.style.top.slice(0, -2) + enemyHeight / 2 // give center position, not corner
    );
    if (
        shipCoordinates.calculateHorizontalDistance(enemyCoordinates) <
            shipWidth / 2 &&
        shipCoordinates.calculateVerticalDistance(enemyCoordinates) <
            shipHeight / 2
    ) {
        return true;
    }
    return false;
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
        +bullet.style.left.slice(0, -2) + getWidth(bullet) / 2,
        +bullet.style.top.slice(0, -2) + getHeight(bullet) / 2
    );
    const enemies = document.getElementsByClassName("enemy");
    for (enemy of enemies) {
        const enemyWidth = getWidth(enemy);
        const enemyHeight = getHeight(enemy);
        const enemyCoordinates = new Coordinates(
            +enemy.style.left.slice(0, -2) + enemyWidth / 2, // give center position, not corner
            +enemy.style.top.slice(0, -2) + enemyHeight / 2 // give center position, not corner
        );
        if (
            bulletCoordinates.calculateHorizontalDistance(enemyCoordinates) <
                enemyWidth / 2 &&
            bulletCoordinates.calculateVerticalDistance(enemyCoordinates) <
                enemyHeight / 2
        ) {
            increaseKillCount();
            displayExplosion(enemy);
            // enemy.remove();
            return true;
        }
    }

    return false;
}

function displayExplosion(enemy) {
    enemy.src = "explosion2.png";
    enemy.classList.remove("enemy");
    enemy.classList.add("explosion");
    setTimeout(() => enemy.remove(), 1000);
    // const enemy = document.createElement("img");
    // enemy.src = "alien.png";
    // enemy.classList.add("enemy");
    // document.getElementById("main").appendChild(enemy);
    // enemy.style.top = `${getRandomInteger(
    //     0,
    //     window.innerHeight - getHeight(enemy)
    // )}px`;
    // enemy.style.left = `${window.innerWidth}px`;
    // console.log("am am am");
}

function increaseKillCount() {
    document.getElementById("killCount").innerText++;
}

function resetKillCount() {
    document.getElementById("killCount").innerText = 0;
}

function isBulletWithinScreen(bullet) {
    if (+bullet.style.left.slice(0, -2) > window.innerWidth) {
        return false;
    }
    return true;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHeight(element) {
    return getComputedStyle(element).height.slice(0, -2);
}

function getWidth(element) {
    return getComputedStyle(element).width.slice(0, -2);
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
