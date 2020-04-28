import {
    getWidth,
    displayHp,
    displayWeaponPower,
    displayKillCount,
} from "../utils";
import { PLAYER_HP, BULLET_SPEED } from "../constants";

export default class PlayerController {
    constructor() {
        this.ship = document.getElementById("ship");
        this.currentHp = PLAYER_HP;
        this.weapon = {
            power: 1,
            speed: BULLET_SPEED,
        };
        this.stats = {
            shotEnemies: 0,
        };

        this.displayShip();
        displayHp(this.currentHp);
        displayWeaponPower(this.weapon.power);
        displayKillCount(this.stats.shotEnemies);
    }

    shipTrack(event) {
        let positionX = event.clientX;
        let positionY = event.clientY;
        this.ship.style.top = `${positionY}px`;
        this.ship.style.left = `${positionX}px`;
    }

    fire(event) {
        const bullet = document.createElement("div");
        bullet.classList.add("bullet", "undraggable");
        document.getElementById("main").appendChild(bullet);
        bullet.style.top = `${event.y}px`;
        bullet.style.left = `${event.x + getWidth(this.ship) / 2}px`;
    }

    displayShip() {
        this.ship.style.display = "block";
    }

    hideShip() {
        this.ship.style.display = "none";
    }

    increaseWeaponCount() {
        this.weapon.power++;
        displayWeaponPower(this.weapon.power);
    }

    increaseKillCount() {
        this.stats.shotEnemies++;
        displayKillCount(this.stats.shotEnemies);
    }

    decreaseCurrentHp() {
        this.currentHp--;
        displayHp(this.currentHp);
    }
}
