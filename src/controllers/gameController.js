import {
    displayHp,
    move,
    isElementWithinScreen,
    resetKillCount,
    isCollision,
} from "../utils";
import EnemiesController from "./enemiesController";
import PlayerController from "./playerController";
import { Direction } from "../enums";
import { ENEMY_SPAWN_TIME, PLAYER_HP, BULLET_SPEED } from "../constants";

export default class GameController {
    constructor() {
        this.enemiesController = new EnemiesController();
        this.playerController = new PlayerController();
        this.isGameRunning = false;
        this.frameNumber = 0;
        this.spawnPhase = 0;
        this.spawnIntervalId = null;
        this.changePhaseIntervalId = null;
    }

    startGame() {
        this.prepareGame();
        this.resetCurrentHp();
        this.resetWeaponPower();
        resetKillCount();

        if (!this.isGameRunning) {
            this.update();
            this.isGameRunning = true;
        }
        this.spawnIntervalId = setInterval(
            () => this.enemiesController.spawnEnemy(),
            ENEMY_SPAWN_TIME
        );
        this.changePhaseIntervalId = setInterval(
            () => this.decreaseEnemySpawnTime(),
            10000
        );
    }

    prepareGame() {
        document.getElementById("startButton").style.display = "none";
        document.getElementById("endButton").style.display = "none";
        document.getElementById("gameOver").style.display = "none";
        document.getElementById("ship").style.display = "block";
        document.getElementById("main").style.cursor = "none";
        window.addEventListener("click", this.playerController.fire, true);
        window.addEventListener("mousemove", this.shipTrack);
    }

    shipTrack(e) {
        let positionX = e.clientX;
        let positionY = e.clientY;
        const ship = document.getElementById("ship");
        ship.style.top = `${positionY}px`;
        ship.style.left = `${positionX}px`;
    }

    update() {
        this.handleEnemies();
        this.handleBullets();
        this.handleUpgrades();
        window.requestAnimationFrame(() => this.update());
    }

    decreaseEnemySpawnTime() {
        clearInterval(this.spawnIntervalId);
        this.spawnPhase++;
        this.spawnIntervalId = setInterval(
            () => this.enemiesController.spawnEnemy(),
            (ENEMY_SPAWN_TIME * 0.7) / this.spawnPhase
        );
    }

    handleEnemies() {
        const ship = document.getElementById("ship");
        const enemies = Array.from(document.getElementsByClassName("enemy"));
        for (const enemy of enemies) {
            this.enemiesController.handleEnemyMove(enemy, this.frameNumber);
            if (+enemy.style.left.slice(0, -2) < 0) {
                this.decreaseCurrentHp();
                enemy.remove();
            }
            if (isCollision(ship, enemy)) {
                this.decreaseCurrentHp();
                this.enemiesController.handleEnemyKill(enemy);
            }
            if (this.playerController.currentHp === 0) {
                this.gameOver();
                return;
            }
        }
        this.frameNumber++;
    }

    handleBullets() {
        const bullets = document.getElementsByClassName("bullet");
        for (const bullet of bullets) {
            move(bullet, Direction.RIGHT, BULLET_SPEED);

            if (
                this.enemiesController.isAnyEnemyHit(
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
        const ship = document.getElementById("ship");
        const upgrades = document.getElementsByClassName("upgrade");
        for (const upgrade of upgrades) {
            if (isCollision(upgrade, ship)) {
                this.increaseWeaponCount();
                upgrade.remove();
            }
        }
    }

    gameOver() {
        document.getElementById("gameOver").style.display = "block";
        window.removeEventListener("click", this.playerController.fire, true);
        document.getElementById("ship").style.display = "none";
        document.getElementById("endButton").style.display = "block";
        document.getElementById("main").style.cursor = "auto";
        clearInterval(this.spawnIntervalId);
        clearInterval(this.changePhaseIntervalId);
        this.removeAllElementsFromHtml();
    }

    removeAllElementsFromHtml() {
        const enemies = document.getElementsByClassName("enemy");
        Array.from(enemies).forEach((enemy) => enemy.remove());
        const bullets = document.getElementsByClassName("bullet");
        Array.from(bullets).forEach((enemy) => enemy.remove());
        setTimeout(() => {
            const upgrades = document.getElementsByClassName("upgrade");
            Array.from(upgrades).forEach((upgrade) => upgrade.remove());
        }, 500);
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
