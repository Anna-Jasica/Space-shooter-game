import { Direction } from "./directionEnum";

export function getHeight(element) {
    return Number(getComputedStyle(element).height.slice(0, -2));
}

export function getWidth(element) {
    return Number(getComputedStyle(element).width.slice(0, -2));
}

export function increaseKillCount() {
    document.getElementById("killCount").innerText++;
}

export function resetKillCount() {
    document.getElementById("killCount").innerText = 0;
}

export function isElementWithinScreen(element) {
    const xPosition = +element.style.left.slice(0, -2);
    const yPosition = +element.style.top.slice(0, -2);
    if (
        xPosition > window.innerWidth ||
        xPosition < 0 ||
        yPosition > window.innerHeight ||
        yPosition < 0
    ) {
        return false;
    }
    return true;
}

export function displayHp(value) {
    const currentHpDiv = document.getElementById("currentHp");
    currentHpDiv.innerHTML = "";
    for (let i = 0; i < value; i++) {
        const ship = document.createElement("div");
        ship.classList.add("hpUnit");
        currentHpDiv.appendChild(ship);
    }
}

export function move(element, direction, distance) {
    switch (direction) {
        case Direction.LEFT:
            element.style.left = `${
                +element.style.left.slice(0, -2) - distance
            }px`;
            break;
        case Direction.RIGHT:
            element.style.left = `${
                +element.style.left.slice(0, -2) + distance
            }px`;
            break;
        case Direction.TOP:
            element.style.top = `${
                +element.style.top.slice(0, -2) - distance
            }px`;
            break;
        case Direction.DOWN:
            element.style.top = `${
                +element.style.top.slice(0, -2) + distance
            }px`;
            break;
    }
}

export function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
