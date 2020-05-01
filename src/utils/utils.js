import { Direction } from "../enums";

export function isCollision(element1, element2) {
    return !(
        Math.abs(element1.x - element2.x) >
            (element1.width / 2 + element2.width / 2) / 2 ||
        Math.abs(element1.y - element2.y) >
            (element1.height / 2 + element2.height / 2) / 2
    );
}

export function isElementWithinScreen(
    element,
    windowInnerHeight,
    windowInnerWidth
) {
    if (
        element.x > windowInnerWidth ||
        element.x < 0 ||
        element.y > windowInnerHeight ||
        element.y < 0
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
            element.x -= distance;
            element.style.left = `${element.x}px`;
            break;
        case Direction.RIGHT:
            element.x += distance;
            element.style.left = `${element.x}px`;
            break;
        case Direction.TOP:
            element.y -= distance;
            element.style.top = `${element.y}px`;
            break;
        case Direction.DOWN:
            element.y += distance;
            element.style.top = `${element.y}px`;
            break;
    }
}

export function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
