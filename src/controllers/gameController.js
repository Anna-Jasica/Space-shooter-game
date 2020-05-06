import {
    move,
    isElementWithinScreen,
    isCollision,
    updateCurrentPhase,
    showGameOver,
    showMenu,
    showCursor,
    hideGameOver,
    hideMenu,
    hideShip,
    hideCursor,
    changeStartButtonToFlyAgain,
} from "../utils";
import {
    PlayerController,
    EnemiesController,
    BulletsController,
    AudioController,
} from "./index";
import { Direction } from "../enums";
import {
    ENEMY_SPAWN_TIME,
    PHASE_DURATION,
    ENEMY_BULLET_SPEED,
} from "../constants";

export class GameController {
    constructor() {
        this.windowInnerHeight = 0;
        this.windowInnerWidth = 0;
        this.playerController = null;
        this.enemiesController = null;
        this.bulletsController = null;
        this.audioController = new AudioController();
        this.isGameRunning = false;
        this.frameNumber = 0;
        this.currentPhase = 1;
        this.spawnIntervalId = null;
        this.changePhaseIntervalId = null;
    }

    initState() {
        this.windowInnerHeight = window.innerHeight;
        this.windowInnerWidth = window.innerWidth;
        this.playerController = new PlayerController();
        this.enemiesController = new EnemiesController(
            this.windowInnerHeight,
            this.windowInnerWidth
        );
        this.bulletsController = new BulletsController(
            this.playerController.ship.width
        );
        this.frameNumber = 0;
        this.currentPhase = 1;
        updateCurrentPhase(this.currentPhase);
    }

    startGame(click) {
        this.initState();
        this.playerController.shipTrack(click);
        hideGameOver();
        hideMenu();
        hideCursor();
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
        this.changePhaseIntervalId = setInterval(() => {
            this.currentPhase++;
            updateCurrentPhase(this.currentPhase);
            this.decreaseEnemySpawnTime();
        }, PHASE_DURATION);
    }

    addEventListeners() {
        this.fireListener = (event) =>
            this.bulletsController.createBullet(event);
        this.moveListener = (event) => this.playerController.shipTrack(event);
        window.addEventListener("click", this.fireListener, true);
        window.addEventListener("mousemove", this.moveListener);
    }

    removeEventListeners() {
        window.removeEventListener("click", this.fireListener, true);
        window.removeEventListener("mousemove", this.moveListener);
    }

    update() {
        this.handleEnemies();
        this.handleBullets();
        this.handleEnemyBullets();
        this.handleUpgrades();
        window.requestAnimationFrame(() => this.update());
    }

    decreaseEnemySpawnTime() {
        clearInterval(this.spawnIntervalId);
        this.spawnIntervalId = setInterval(
            () => this.enemiesController.spawnEnemy(),
            ENEMY_SPAWN_TIME / (1 + 0.3 * this.currentPhase)
        );
    }

    handleEnemies() {
        for (const enemy of this.enemiesController.enemies) {
            this.enemiesController.handleEnemyMove(enemy, this.frameNumber);
            if (enemy.x < 0) {
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
        for (const bullet of this.bulletsController.bullets) {
            move(bullet, Direction.RIGHT, this.playerController.weapon.speed);

            for (const enemy of this.enemiesController.enemies) {
                if (isCollision(enemy, bullet)) {
                    this.bulletsController.removeBullet(bullet);
                    if (
                        this.enemiesController.isEnemyKilled(
                            enemy,
                            this.playerController.weapon.power
                        )
                    ) {
                        this.playerController.increaseKillCount();
                    }
                    return;
                }
            }
            if (
                !isElementWithinScreen(
                    bullet,
                    this.windowInnerHeight,
                    this.windowInnerWidth
                )
            ) {
                this.bulletsController.removeBullet(bullet);
            }
        }
    }

    handleEnemyBullets() {
        for (const bullet of this.enemiesController.bullets) {
            move(bullet, Direction.LEFT, ENEMY_BULLET_SPEED);

            if (isCollision(this.playerController.ship, bullet)) {
                this.playerController.decreaseCurrentHp();
                this.enemiesController.removeEnemyBullet(bullet);
                if (this.playerController.currentHp === 0) {
                    this.gameOver();
                    return;
                }
            }

            if (
                !isElementWithinScreen(
                    bullet,
                    this.windowInnerHeight,
                    this.windowInnerWidth
                )
            ) {
                this.enemiesController.removeEnemyBullet(bullet);
            }
        }
    }

    handleUpgrades() {
        const upgrades = document.getElementsByClassName("upgrade");
        for (const upgrade of upgrades) {
            if (isCollision(upgrade, this.playerController.ship)) {
                this.playerController.increaseWeaponLevel();
                upgrade.remove();
            }
        }
    }

    gameOver() {
        hideShip();
        this.removeEventListeners();
        this.stopSpawningEnemies();
        this.removeAllElementsFromHtml();
        changeStartButtonToFlyAgain();
        showGameOver();
        showMenu();
        showCursor();
    }

    stopSpawningEnemies() {
        clearInterval(this.spawnIntervalId);
        clearInterval(this.changePhaseIntervalId);
    }

    removeAllElementsFromHtml() {
        Array.from(this.enemiesController.enemies).forEach((enemy) =>
            enemy.remove()
        );
        this.enemiesController.enemies = [];
        Array.from(this.bulletsController.bullets).forEach((bullet) =>
            bullet.remove()
        );
        Array.from(this.enemiesController.bullets).forEach((bullet) =>
            bullet.remove()
        );
        setTimeout(() => {
            const upgrades = document.getElementsByClassName("upgrade");
            Array.from(upgrades).forEach((upgrade) => upgrade.remove());
        }, 500);
    }
}
