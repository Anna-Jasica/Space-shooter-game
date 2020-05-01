import {
    getWidth,
    updateHp,
    updateWeaponPower,
    updateKillCount,
} from "../utils";
import { PLAYER_HP, BULLET_SPEED, UPGRADE_POWER } from "../constants";

export default class PlayerController {
    constructor() {
        this.ship = document.getElementById("ship");
        this.currentHp = PLAYER_HP;
        this.weapon = {
            level: 1,
            power: 1,
            speed: BULLET_SPEED,
        };
        this.stats = {
            shotEnemies: 0,
        };

        this.displayShip();
        updateHp(this.currentHp);
        updateWeaponPower(this.weapon.power);
        updateKillCount(this.stats.shotEnemies);
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

    increaseWeaponLevel() {
        this.weapon.level++;
        this.weapon.power += UPGRADE_POWER;
        this.weapon.speed++;
        updateWeaponPower(this.weapon.level);
    }

    increaseKillCount() {
        this.stats.shotEnemies++;
        updateKillCount(this.stats.shotEnemies);
    }

    decreaseCurrentHp() {
        this.currentHp--;
        updateHp(this.currentHp);
    }
}
