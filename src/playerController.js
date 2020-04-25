import Coordinates from "./coordinates";
import { getWidth, getHeight } from "./utils";

export default class playerController {
    constructor() {
        this.currentHp = 0;
        this.weaponPower = 0;
    }
    isWeaponUpgradePicked(upgrade) {
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

    isShipCollision(enemy) {
        const ship = document.getElementById("ship");
        const shipWidth = getWidth(ship);
        const shipHeight = getHeight(ship);
        const shipCoordinates = new Coordinates(
            +ship.style.left.slice(0, -2),
            +ship.style.top.slice(0, -2)
        );

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
    fire(event) {
        const bullet = document.createElement("div");
        const ship = document.getElementById("ship");
        bullet.classList.add("bullet");
        bullet.classList.add("undraggable");
        document.getElementById("main").appendChild(bullet);
        bullet.style.top = `${event.y}px`;
        bullet.style.left = `${event.x + getWidth(ship) / 2}px`;
    }
}
