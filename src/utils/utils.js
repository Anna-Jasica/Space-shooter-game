import { Direction } from "../enums";

export function getHeight(element) {
    return element.offsetHeight;
}

export function getWidth(element) {
    return element.offsetWidth;
}

export function isCollision(element1, element2) {
    return !(
        Math.abs(element1.offsetLeft - element2.offsetLeft) >
            (element1.offsetWidth / 2 + element2.offsetWidth / 2) / 2 ||
        Math.abs(element1.offsetTop - element2.offsetTop) >
            (element1.offsetHeight / 2 + element2.offsetHeight / 2) / 2
    );
}

export function isElementWithinScreen(element) {
    if (
        element.offsetLeft > window.innerWidth ||
        element.offsetLeft < 0 ||
        element.offsetTop > window.innerHeight ||
        element.offsetTop < 0
    ) {
        return false;
    }
    return true;
}

export function updateHp(value) {
    const currentHpDiv = document.getElementById("current-hp");
    currentHpDiv.innerHTML = "";
    for (let i = 0; i < value; i++) {
        const ship = document.createElement("div");
        ship.classList.add("hp-unit");
        currentHpDiv.appendChild(ship);
    }
}

export function updateKillCount(value) {
    document.getElementById("killCount").innerText = value;
}

export function updateWeaponPower(value) {
    document.getElementById("weaponLevel").innerText = value;
}

export function updateCurrentPhase(value) {
    document.getElementById("currentPhase").innerText = value;
}

export function move(element, direction, distance) {
    switch (direction) {
        case Direction.LEFT:
            element.style.left = `${element.offsetLeft - distance}px`;
            break;
        case Direction.RIGHT:
            element.style.left = `${element.offsetLeft + distance}px`;
            break;
        case Direction.TOP:
            element.style.top = `${element.offsetTop - distance}px`;
            break;
        case Direction.DOWN:
            element.style.top = `${element.offsetTop + distance}px`;
            break;
    }
}

export function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
