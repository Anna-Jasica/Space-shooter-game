const ENEMY_SPEED = 3;
const BULLET_SPEED = 10;
const ENEMY_SPAWN_TIME = 1000;
const ENEMY_DIRECTION_REPEAT = 40;
let intervalId;
let isGameRunning = false;
let frameNumber = 0;

const Direction = {
    LEFT: "left",
    RIGHT: "right",
    DOWN: "down",
    TOP: "top"
};

function init(event) {
    resetKillCount();
    shipTrack(event);
    document.getElementById("startButton").style.display = "none";
    document.getElementById("endButton").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("ship").style.display = "block";
    document.getElementById("ship").setAttribute("draggable", false);
    document.getElementById("main").style.cursor = "none";
    window.addEventListener("click", fire, true);
    window.addEventListener("mousemove", shipTrack);
    startGame();
}

function fire(event) {
    const bullet = document.createElement("img");
    const ship = document.getElementById("ship");
    bullet.src = "bullet.png";
    bullet.classList.add("bullet");
    document.getElementById("main").appendChild(bullet);
    bullet.style.top = `${event.y}px`;
    bullet.style.left = `${event.x + getWidth(ship) / 2}px`;
    bullet.setAttribute("draggable", false);
    console.log("pew pew pew");
}

function shipTrack(e) {
    let positionX = e.clientX;
    let positionY = e.clientY;
    const ship = document.getElementById("ship");
    ship.style.top = `${positionY}px`;
    ship.style.left = `${positionX}px`;
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
        getHeight(enemy) / 2,
        window.innerHeight - getHeight(enemy) / 2
    )}px`;
    enemy.style.left = `${window.innerWidth}px`;
    console.log("am am am");
}

function move(element, direction) {
    switch (direction) {
        case Direction.LEFT:
            element.style.left = `${+element.style.left.slice(0, -2) -
                ENEMY_SPEED}px`;
            break;
        case Direction.RIGHT:
            element.style.left = `${+element.style.left.slice(0, -2) +
                BULLET_SPEED}px`;
            break;
        case Direction.DOWN:
            element.style.top = `${+element.style.top.slice(0, -2) +
                ENEMY_SPEED}px`;
            break;
        case Direction.TOP:
            element.style.top = `${+element.style.top.slice(0, -2) -
                ENEMY_SPEED}px`;
            break;
    }
}

function handleEnemies() {
    const enemies = document.getElementsByClassName("enemy");
    for (enemy of enemies) {
        handleEnemyMove(enemy);
        if (Number(enemy.style.left.slice(0, -2)) < 0) {
            // remove enemy from html (needed in case 1 not killed enemy doesn't lose game)
            // stop game and display game over
            enemy.remove();
            gameOver();
        }
        if (isShipCollision(enemy)) {
            // stop game and display game over
            console.log(document);
            displayExplosion(enemy);
            gameOver();
        }
    }
    frameNumber++;
}

function handleEnemyMove(enemy) {
    // if (frameNumber % 2 === 0) {
    if (!enemy.getAttribute("direction")) {
        move(enemy, Direction.LEFT);
        enemy.setAttribute("direction", Direction.LEFT);
    } else if (frameNumber % ENEMY_DIRECTION_REPEAT === 0) {
        const enemyYPosition = enemy.style.top.slice(0, -2);
        let directions = [Direction.LEFT, Direction.TOP, Direction.DOWN];
        if (enemyYPosition < window.innerHeight * 0.2) {
            directions.splice(directions.indexOf(Direction.TOP), 1);
        } else if (enemyYPosition > window.innerHeight * 0.2) {
            directions.splice(directions.indexOf(Direction.DOWN), 1);
        }
        const direction =
            directions[getRandomInteger(0, directions.length - 1)];
        move(enemy, direction);
        enemy.setAttribute("direction", direction);
    } else {
        move(enemy, enemy.getAttribute("direction"));
    }
    // }
}

function gameOver() {
    console.log("game over");
    const gameOver = document.getElementById("gameOver");
    window.removeEventListener("click", fire, true);
    document.getElementById("ship").style.display = "none";
    clearInterval(intervalId);
    gameOver.style.display = "block";
    endButton.style.display = "block";
    gameOver.innerText = "Game Over!";
    document.getElementById("main").style.cursor = "auto";
    //remove all enemies and bullets from game
    setTimeout(() => {
        const enemies = document.getElementsByClassName("enemy");
        Array.from(enemies).forEach(enemy => enemy.remove());
    }, 0);
    const bullets = document.getElementsByClassName("bullet");
    Array.from(bullets).forEach(enemy => enemy.remove());
}

function isShipCollision(enemy) {
    const ship = document.getElementById("ship");
    const shipWidth = getWidth(ship);
    const shipHeight = getHeight(ship);
    const shipCoordinates = new Coordinates(
        +ship.style.left.slice(0, -2),
        +ship.style.top.slice(0, -2)
    );

    const enemyWidth = getWidth(enemy);
    const enemyHeight = getHeight(enemy);
    const enemyCoordinates = new Coordinates(
        +enemy.style.left.slice(0, -2), // give center position, not corner
        +enemy.style.top.slice(0, -2) // give center position, not corner
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
        move(bullet, Direction.RIGHT);

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
        +bullet.style.left.slice(0, -2),
        +bullet.style.top.slice(0, -2)
    );
    const enemies = document.getElementsByClassName("enemy");
    for (enemy of enemies) {
        const enemyWidth = getWidth(enemy);
        const enemyHeight = getHeight(enemy);
        const enemyCoordinates = new Coordinates(
            +enemy.style.left.slice(0, -2), // give center position, not corner
            +enemy.style.top.slice(0, -2) // give center position, not corner
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
    enemy.src = "explosion.png";
    setTimeout(() => {
        enemy.classList.remove("enemy");
        enemy.classList.add("explosion");
    }, 0);
    setTimeout(() => enemy.remove(), 1000);
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
    return Number(getComputedStyle(element).height.slice(0, -2));
}

function getWidth(element) {
    return Number(getComputedStyle(element).width.slice(0, -2));
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
