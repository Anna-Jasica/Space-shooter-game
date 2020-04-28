import { move, isElementWithinScreen, isCollision } from "../utils";
import EnemiesController from "./enemiesController";
import PlayerController from "./playerController";
import { Direction } from "../enums";
import { ENEMY_SPAWN_TIME, PHASE_DURATION } from "../constants";

export default class GameController {
    constructor() {
        this.enemiesController = null;
        this.playerController = null;
        this.isGameRunning = false;
        this.frameNumber = 0;
        this.spawnPhase = 0;
        this.spawnIntervalId = null;
        this.changePhaseIntervalId = null;
    }

    initState() {
        this.playerController = new PlayerController();
        this.enemiesController = new EnemiesController();
        this.frameNumber = 0;
        this.spawnPhase = 0;
    }

    startGame(click) {
        this.initState();
        this.playerController.shipTrack(click);
        this.hideMenu();
        this.addEventListeners();

        if (!this.isGameRunning) {
            this.update();
            this.isGameRunning = true;
        }
        // this.enemiesController.spawnEnemy();
        this.startSpawningEnemies();
    }

    startSpawningEnemies() {
        this.spawnIntervalId = setInterval(
            () => this.enemiesController.spawnEnemy(),
            ENEMY_SPAWN_TIME
        );
        this.changePhaseIntervalId = setInterval(
            () => this.decreaseEnemySpawnTime(),
            PHASE_DURATION
        );
    }

    hideMenu() {
        document.getElementById("startButton").style.display = "none";
        document.getElementById("endButton").style.display = "none";
        document.getElementById("gameOver").style.display = "none";
        document.getElementById("main").style.cursor = "none";
    }

    addEventListeners() {
        window.addEventListener("click", this.playerController.fire, true);
        window.addEventListener("mousemove", this.playerController.shipTrack);
    }

    removeEventListeners() {
        window.removeEventListener("click", this.playerController.fire, true);
        window.removeEventListener(
            "mousemove",
            this.playerController.shipTrack
        );
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
        for (const enemy of this.enemiesController.enemies) {
            this.enemiesController.handleEnemyMove(enemy, this.frameNumber);
            if (enemy.offsetLeft < 0) {
                this.playerController.decreaseCurrentHp();
                enemy.remove();
            }
            if (isCollision(this.playerController.ship, enemy)) {
                this.playerController.decreaseCurrentHp();
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
            move(bullet, Direction.RIGHT, this.playerController.weapon.speed);

            for (const enemy of this.enemiesController.enemies) {
                if (isCollision(enemy, bullet)) {
                    bullet.remove();
                    if (
                        this.enemiesController.isEnemyKilled(
                            enemy,
                            this.playerController.weapon.power
                        )
                    ) {
                        this.playerController.increaseKillCount();
                    }
                }
            }
            if (!isElementWithinScreen(bullet)) {
                bullet.remove();
            }
        }
    }

    handleUpgrades() {
        const upgrades = document.getElementsByClassName("upgrade");
        for (const upgrade of upgrades) {
            if (isCollision(upgrade, this.playerController.ship)) {
                this.playerController.increaseWeaponCount();
                upgrade.remove();
            }
        }
    }

    gameOver() {
        this.playerController.hideShip();
        this.removeEventListeners();
        this.stopSpawningEnemies();
        this.removeAllElementsFromHtml();
        this.displayMenu();
    }

    stopSpawningEnemies() {
        clearInterval(this.spawnIntervalId);
        clearInterval(this.changePhaseIntervalId);
    }

    displayMenu() {
        document.getElementById("gameOver").style.display = "flex";
        document.getElementById("endButton").style.display = "block";
        document.getElementById("main").style.cursor = "auto";
    }

    removeAllElementsFromHtml() {
        Array.from(this.enemiesController.enemies).forEach((enemy) =>
            enemy.remove()
        );
        const bullets = document.getElementsByClassName("bullet");
        Array.from(bullets).forEach((enemy) => enemy.remove());
        setTimeout(() => {
            const upgrades = document.getElementsByClassName("upgrade");
            Array.from(upgrades).forEach((upgrade) => upgrade.remove());
        }, 500);
    }
}
