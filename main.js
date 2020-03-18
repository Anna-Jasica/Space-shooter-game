const ENEMY_SPEED = 4;
const BULLET_SPEED = 3;
const ENEMY_SPAWN_TIME = 1000;

function init() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("ship").style.display = "block";
    document.getElementById("main").style.cursor = "none";

    window.addEventListener("click", fire);
    window.addEventListener("mousemove", shipTrack);
    startGame();
}

function fire(event) {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    bullet.style.top = `${event.y}px`;
    bullet.style.left = `${event.x}px`;
    document.getElementById("main").appendChild(bullet);
    console.log("pew pew pew");
}

function shipTrack(e) {
    let positionX = e.clientX;
    let positionY = e.clientY;
    document.getElementById("ship").style.top = `${positionY - 39}px`;
    document.getElementById("ship").style.left = `${positionX - 80}px`;
}

function startGame() {
    update();
    setInterval(() => spawnEnemy(), ENEMY_SPAWN_TIME);
}

function update() {
    handleEnemies();
    handleBullets();
    window.requestAnimationFrame(update);
}

function spawnEnemy() {
    const enemy = document.createElement("div");
    enemy.classList.add("enemy");
    enemy.style.top = `${getRandomInteger(
        0,
        window.innerHeight - getComputedStyle(enemy).height.slice(0, -2)
    )}px`;
    enemy.style.left = `${window.innerWidth}px`;
    document.getElementById("main").appendChild(enemy);
    console.log("am am am");
}

function handleEnemies() {
    const enemies = document.getElementsByClassName("enemy");
    for (enemy of enemies) {
        enemy.style.left = `${+enemy.style.left.slice(0, -2) - ENEMY_SPEED}px`;
        if (Number(enemy.style.left.slice(0, -2)) < 0) {
            // remove enemy from html (needed in case 1 not killed enemy doesn't lose game)
            // stop game and display game over
            // console.log("game over");
        }
        if (isShipCollision(enemy)) {
            // stop game and display game over
            console.log("game over");
        }
    }
}

function isShipCollision(enemy) {
    const ship = document.getElementById("ship");
    const shipWidth = getComputedStyle(ship).width.slice(0, -2);
    const shipHeight = getComputedStyle(ship).height.slice(0, -2);
    const shipCoordinates = new Coordinates(
        +ship.style.left.slice(0, -2) + shipWidth / 2,
        +ship.style.top.slice(0, -2) + shipHeight / 2
    );

    const enemyWidth = getComputedStyle(enemy).width.slice(0, -2);
    const enemyHeight = getComputedStyle(enemy).height.slice(0, -2);
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
            // here we can add points for kill (or even better in isEnemyHit function)
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
        const enemyWidth = getComputedStyle(enemy).width.slice(0, -2);
        const enemyHeight = getComputedStyle(enemy).height.slice(0, -2);
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
            // here we should add points for kill
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

// function enemyOut() {
//   const enemies = document.getElementsByClassName("enemy");
//   for (enemy of enemies) {
//     console.log(enemy.style.left);
//     if (Number(enemy.style.left.slice(0, -2)) < 0) {
//       console.log("game over");
//     }
//   }
// }
