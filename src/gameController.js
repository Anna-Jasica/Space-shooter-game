import {
    displayHp,
    move,
    isElementWithinScreen,
    resetKillCount,
} from "./utils";
import EnemyController from "./enemyController";
import PlayerController from "./playerController";
import BulletController from "./bulletController";
import { Direction } from "./directionEnum";
import { ENEMY_SPAWN_TIME, PLAYER_HP, BULLET_SPEED } from "./constants";

export default class GameController {
    constructor() {
        this.enemyController = new EnemyController();
        this.playerController = new PlayerController();
        this.bulletController = new BulletController();
        this.isGameRunning = false;
        this.frameNumber = 0;
        this.spawnIntervalId;
        this.spawnPhase = 0;
        this.resetIntervalId;

        document.getElementById("startButton").style.display = "none";
        document.getElementById("endButton").style.display = "none";
        document.getElementById("gameOver").style.display = "none";
        document.getElementById("ship").style.display = "block";
        document.getElementById("main").style.cursor = "none";
        window.addEventListener("click", this.playerController.fire, true);
        window.addEventListener("mousemove", this.shipTrack);
    }

    startGame() {
        if (!this.isGameRunning) {
            this.update();
            this.isGameRunning = true;
        }
        this.resetCurrentHp();
        this.resetWeaponPower();
        resetKillCount();
        this.spawnIntervalId = setInterval(
            this.enemyController.spawnEnemy,
            ENEMY_SPAWN_TIME
        );
        this.resetIntervalId = setInterval(
            () => this.decreaseEnemySpawnTime(),
            10000
        );
    }

    decreaseEnemySpawnTime() {
        clearInterval(this.spawnIntervalId);
        this.spawnPhase++;
        this.spawnIntervalId = setInterval(
            this.enemyController.spawnEnemy,
            (ENEMY_SPAWN_TIME * 0.7) / this.spawnPhase
        );
    }

    update() {
        this.handleEnemies();
        this.handleBullets();
        this.handleUpgrades();
        window.requestAnimationFrame(() => this.update());
    }

    gameOver() {
        document.getElementById("gameOver").style.display = "block";
        window.removeEventListener("click", this.playerController.fire, true);
        document.getElementById("ship").style.display = "none";
        clearInterval(this.spawnIntervalId);
        clearInterval(this.resetIntervalId);
        document.getElementById("endButton").style.display = "block";
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

    shipTrack(e) {
        let positionX = e.clientX;
        let positionY = e.clientY;
        const ship = document.getElementById("ship");
        ship.style.top = `${positionY}px`;
        ship.style.left = `${positionX}px`;
    }

    handleEnemies() {
        const enemies = Array.from(document.getElementsByClassName("enemy"));
        for (const enemy of enemies) {
            this.enemyController.handleEnemyMove(enemy, this.frameNumber);
            if (+enemy.style.left.slice(0, -2) < 0) {
                this.decreaseCurrentHp();
                enemy.remove();
            }
            if (this.playerController.isShipCollision(enemy)) {
                this.decreaseCurrentHp();
                this.enemyController.handleEnemyKill(enemy);
            }
            if (this.playerController.currentHp === 0) {
                this.gameOver();
            }
        }
        this.frameNumber++;
    }

    handleBullets() {
        const bullets = document.getElementsByClassName("bullet");
        for (const bullet of bullets) {
            move(bullet, Direction.RIGHT, BULLET_SPEED);

            if (
                this.enemyController.isEnemyHit(
                    bullet,
                    this.playerController.weaponPower
                )
            ) {
                bullet.remove();
            }
            if (!isElementWithinScreen(bullet)) {
                bullet.remove();
            }
        }
    }

    handleUpgrades() {
        const upgrades = document.getElementsByClassName("upgrade");
        for (const upgrade of upgrades) {
            if (this.playerController.isWeaponUpgradePicked(upgrade)) {
                this.increaseWeaponCount();
                upgrade.remove();
            }
        }
    }

    resetWeaponPower() {
        this.playerController.weaponPower = 1;
        document.getElementById("weaponPowerCount").innerText = 1;
    }

    increaseWeaponCount() {
        this.playerController.weaponPower++;
        document.getElementById(
            "weaponPowerCount"
        ).innerText = this.playerController.weaponPower;
    }

    resetCurrentHp() {
        this.playerController.currentHp = PLAYER_HP;
        displayHp(PLAYER_HP);
    }

    decreaseCurrentHp() {
        this.playerController.currentHp--;
        displayHp(this.playerController.currentHp);
    }
}
