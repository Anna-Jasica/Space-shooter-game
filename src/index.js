import "../style.scss";
import "../index.html";
import _ from "lodash";
import { getHeight, getWidth } from "./utils.js";

const ENEMY_SPEED = 5;
const BULLET_SPEED = 10;
const ENEMY_SPAWN_TIME = 1500;
const ENEMY_DIRECTION_REPEAT = 40;
const UPGRADE_SPAWN_CHANCE = 30;
const ENEMY_HP = 3;
const PLAYER_HP = 3;
const UPGRADE_SPAWN_RATE = 3;
let spawnIntervalId;
let isGameRunning = false;
let frameNumber = 0;
let intervalCycle = 0;
let resetIntervalId;

const state = {
    weaponPower: null,
    currentPlayerHp: null,
};
const Direction = {
    LEFT: "left",
    RIGHT: "right",
    DOWN: "down",
    TOP: "top",
};

window.init = function (event) {
    resetKillCount();
    shipTrack(event);
    document.getElementById("startButton").style.display = "none";
    document.getElementById("endButton").style.display = "none";
    document.getElementById("gameOver").style.display = "none";
    document.getElementById("ship").style.display = "block";
    document.getElementById("main").style.cursor = "none";
    window.addEventListener("click", fire, true);
    window.addEventListener("mousemove", shipTrack);
    startGame();
};

function fire(event) {
    const bullet = document.createElement("div");
    const ship = document.getElementById("ship");
    bullet.classList.add("bullet");
    bullet.classList.add("undraggable");
    document.getElementById("main").appendChild(bullet);
    bullet.style.top = `${event.y}px`;
    bullet.style.left = `${event.x + getWidth(ship) / 2}px`;
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
    resetCurrentHp();
    resetWeaponPower();
    spawnIntervalId = setInterval(spawnEnemy, ENEMY_SPAWN_TIME);
    resetIntervalId = setInterval(changeInterval, 10000);
}

function changeInterval() {
    clearInterval(spawnIntervalId);
    intervalCycle++;
    spawnIntervalId = setInterval(
        spawnEnemy,
        (ENEMY_SPAWN_TIME * 0.7) / intervalCycle
    );
}

function update() {
    handleEnemies();
    handleBullets();
    handleUpgrades();
    window.requestAnimationFrame(update);
}

function spawnEnemy() {
    const enemy = document.createElement("div");
    enemy.setAttribute("hp", ENEMY_HP);
    enemy.classList.add("enemy");
    document.getElementById("main").appendChild(enemy);
    enemy.style.top = `${getRandomInteger(
        getHeight(enemy) / 2,
        window.innerHeight - getHeight(enemy) / 2
    )}px`;
    enemy.style.left = `${window.innerWidth}px`;
}

function move(element, direction) {
    switch (direction) {
        case Direction.LEFT:
            element.style.left = `${
                +element.style.left.slice(0, -2) - ENEMY_SPEED
            }px`;
            break;
        case Direction.RIGHT:
            element.style.left = `${
                +element.style.left.slice(0, -2) + BULLET_SPEED
            }px`;
            break;
        case Direction.DOWN:
            element.style.top = `${
                +element.style.top.slice(0, -2) + ENEMY_SPEED
            }px`;
            break;
        case Direction.TOP:
            element.style.top = `${
                +element.style.top.slice(0, -2) - ENEMY_SPEED
            }px`;
            break;
    }
}

function handleEnemies() {
    const enemies = Array.from(document.getElementsByClassName("enemy"));
    for (const enemy of enemies) {
        handleEnemyMove(enemy);
        if (Number(enemy.style.left.slice(0, -2)) < 0) {
            decreaseCurrentHp();
            enemy.remove();
            if (state.currentPlayerHp === 0) {
                gameOver();
            }
        }
        if (isShipCollision(enemy)) {
            decreaseCurrentHp();
            handleEnemyKill(enemy);
            if (state.currentPlayerHp === 0) {
                gameOver();
            }
        }
    }
    frameNumber++;
}

function handleEnemyMove(enemy) {
    if (frameNumber % 2 === 0) {
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
    }
}

function gameOver() {
    const gameOver = document.getElementById("gameOver");
    window.removeEventListener("click", fire, true);
    document.getElementById("ship").style.display = "none";
    clearInterval(spawnIntervalId);
    clearInterval(resetIntervalId);
    gameOver.style.display = "block";
    endButton.style.display = "block";
    gameOver.innerText = "Game Over!";
    document.getElementById("main").style.cursor = "auto";
    const enemies = document.getElementsByClassName("enemy");
    Array.from(enemies).forEach((enemy) => enemy.remove());
    const bullets = document.getElementsByClassName("bullet");
    Array.from(bullets).forEach((enemy) => enemy.remove());
    setTimeout(() => {
        const upgrades = document.getElementsByClassName("upgrade");
        Array.from(upgrades).forEach((upgrade) => upgrade.remove());
    }, 500);
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
        +enemy.style.left.slice(0, -2),
        +enemy.style.top.slice(0, -2)
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
    for (const bullet of bullets) {
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
    for (const enemy of enemies) {
        const enemyWidth = getWidth(enemy);
        const enemyHeight = getHeight(enemy);
        const enemyCoordinates = new Coordinates(
            +enemy.style.left.slice(0, -2),
            +enemy.style.top.slice(0, -2)
        );
        if (
            bulletCoordinates.calculateHorizontalDistance(enemyCoordinates) <
                enemyWidth / 2 &&
            bulletCoordinates.calculateVerticalDistance(enemyCoordinates) <
                enemyHeight / 2
        ) {
            let currentEnemyHP = enemy.getAttribute("hp");
            currentEnemyHP -= state.weaponPower;
            enemy.setAttribute("hp", currentEnemyHP);
            if (currentEnemyHP <= 0) {
                increaseKillCount();
                handleEnemyKill(enemy);
            }
            return true;
        }
    }

    return false;
}

function handleEnemyKill(enemy) {
    enemy.classList.remove("enemy");
    enemy.classList.add("explosion");

    let possibility = getRandomInteger(1, 100);

    if (possibility <= UPGRADE_SPAWN_CHANCE) {
        setTimeout(() => {
            enemy.classList.remove("explosion");
            enemy.classList.add("upgrade");
        }, 500);
    } else {
        setTimeout(() => enemy.remove(), 1000);
    }
}

function isWeaponUpgradePicked(upgrade) {
    const ship = document.getElementById("ship");
    const shipWidth = getWidth(ship);
    const shipHeight = getHeight(ship);
    const shipCoordinates = new Coordinates(
        +ship.style.left.slice(0, -2),
        +ship.style.top.slice(0, -2)
    );

    const upgradeCoordinates = new Coordinates(
        +upgrade.style.left.slice(0, -2),
        +upgrade.style.top.slice(0, -2)
    );
    if (
        shipCoordinates.calculateHorizontalDistance(upgradeCoordinates) <
            shipWidth / 2 &&
        shipCoordinates.calculateVerticalDistance(upgradeCoordinates) <
            shipHeight / 2
    ) {
        return true;
    }
    return false;
}

function handleUpgrades() {
    const upgrades = document.getElementsByClassName("upgrade");
    for (const upgrade of upgrades) {
        if (isWeaponUpgradePicked(upgrade)) {
            increaseWeaponCount();
            upgrade.remove();
        }
    }
}

function increaseKillCount() {
    document.getElementById("killCount").innerText++;
}

function increaseWeaponCount() {
    state.weaponPower++;
    document.getElementById("weaponPowerCount").innerText = state.weaponPower;
}

function resetWeaponPower() {
    document.getElementById("weaponPowerCount").innerText = 1;
    state.weaponPower = 1;
}

function resetKillCount() {
    document.getElementById("killCount").innerText = 0;
}

function decreaseCurrentHp() {
    state.currentPlayerHp--;
    displayHp(state.currentPlayerHp);
}

function resetCurrentHp() {
    state.currentPlayerHp = PLAYER_HP;
    displayHp(state.currentPlayerHp);
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

function displayHp(value) {
    const currentHpDiv = document.getElementById("currentHp");
    currentHpDiv.innerHTML = "";
    for (let i = 0; i < value; i++) {
        const ship = document.createElement("div");
        ship.classList.add("hpUnit");
        currentHpDiv.appendChild(ship);
    }
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
