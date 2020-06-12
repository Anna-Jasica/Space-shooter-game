import {
    updateHp,
    updateWeaponPower,
    updateKillCount,
    showShip,
} from "../utils";
import { PLAYER_HP, BULLET_SPEED, UPGRADE_POWER } from "../constants";

export class PlayerController {
    constructor() {
        this.ship = document.getElementById("ship");
        showShip();
        this.ship.height = this.ship.offsetHeight;
        this.ship.width = this.ship.offsetWidth;

        this.currentHp = PLAYER_HP;
        this.weapon = {
            level: 1,
            power: 1,
            speed: BULLET_SPEED,
        };
        this.stats = {
            shotEnemies: 0,
        };

        updateHp(this.currentHp);
        updateWeaponPower(this.weapon.power);
        updateKillCount(this.stats.shotEnemies);
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
