import { move, getRandomInteger } from "../utils";
import { Direction } from "../enums";
import {
    ENEMY_HP,
    ENEMY_DIRECTION_REPEAT,
    UPGRADE_SPAWN_CHANCE,
    ENEMY_SPEED,
} from "../constants";

export default class EnemiesController {
    constructor(windowInnerHeight, windowInnerWidth) {
        this.enemies = [];
        this.enemyId = 0;

        this.windowInnerHeight = windowInnerHeight;
        this.windowInnerWidth = windowInnerWidth;
        const sizes = this.getEnemySizes();
        this.enemyHeight = sizes.height;
        this.enemyWidth = sizes.width;
    }

    spawnEnemy() {
        const enemy = document.createElement("div");
        enemy.classList.add("enemy", "progress");
        enemy.setAttribute("hp", ENEMY_HP);
        enemy.setAttribute("max-hp", ENEMY_HP);

        enemy.id = this.enemyId++;
        enemy.y = getRandomInteger(
            this.enemyHeight / 2,
            this.windowInnerHeight - this.enemyHeight / 2
        );
        enemy.x = this.windowInnerWidth;
        enemy.height = this.enemyHeight;
        enemy.width = this.enemyWidth;

        enemy.style.top = `${enemy.y}px`;
        enemy.style.left = `${enemy.x}px`;

        this.enemies.push(enemy);
        enemy.appendChild(this.createHpBar());
        document.getElementById("main").appendChild(enemy);
    }

    getEnemySizes() {
        const enemy = document.createElement("div");
        enemy.classList.add("enemy");
        document.getElementById("main").appendChild(enemy);
        const sizes = { width: enemy.offsetWidth, height: enemy.offsetHeight };
        enemy.remove();
        return sizes;
    }

    createHpBar() {
        const enemyHpBar = document.createElement("div");
        enemyHpBar.setAttribute("role", "progressbar");
        enemyHpBar.setAttribute("aria-valuenow", "100");
        enemyHpBar.setAttribute("aria-valuemin", "0");
        enemyHpBar.setAttribute("aria-valuemax", "100");
        enemyHpBar.setAttribute("style", "width: 100%;");
        enemyHpBar.classList.add("progress-bar", "progress-bar-success");
        return enemyHpBar;
    }

    handleEnemyMove(enemy, frameNumber) {
        // if (frameNumber % 2 === 0) {
        if (!enemy.getAttribute("direction")) {
            move(enemy, Direction.LEFT, ENEMY_SPEED);
            enemy.setAttribute("direction", Direction.LEFT);
        } else if (frameNumber % ENEMY_DIRECTION_REPEAT === 0) {
            let directions = [Direction.LEFT, Direction.TOP, Direction.DOWN];
            if (enemy.y < this.windowInnerHeight * 0.2) {
                directions.splice(directions.indexOf(Direction.TOP), 1);
            } else if (enemy.y > this.windowInnerHeight * 0.2) {
                directions.splice(directions.indexOf(Direction.DOWN), 1);
            }
            const direction =
                directions[getRandomInteger(0, directions.length - 1)];
            move(enemy, direction, ENEMY_SPEED);
            enemy.setAttribute("direction", direction);
        } else {
            move(enemy, enemy.getAttribute("direction"), ENEMY_SPEED);
        }
        // }
    }

    isEnemyKilled(enemy, weaponPower) {
        const maxEnemyHP = enemy.getAttribute("max-hp");
        const currentEnemyHP = enemy.getAttribute("hp") - weaponPower;
        enemy.setAttribute("hp", currentEnemyHP);

        if (currentEnemyHP <= 0) {
            this.handleEnemyKill(enemy);
            return true;
        }

        enemy.firstElementChild.setAttribute(
            "aria-valuenow",
            String(currentEnemyHP / maxEnemyHP)
        );
        enemy.firstElementChild.style.width = `${
            (currentEnemyHP / maxEnemyHP) * 100
        }%`;
        return false;
    }

    handleEnemyKill(enemy) {
        enemy.firstElementChild.remove();

        this.enemies.splice(
            this.enemies.findIndex((obj) => obj.id === enemy.id),
            1
        );
        enemy.classList.remove("enemy");
        enemy.classList.add("explosion");

        const possibility = getRandomInteger(1, 100);
        if (possibility <= UPGRADE_SPAWN_CHANCE) {
            setTimeout(() => {
                enemy.classList.remove("explosion");
                enemy.classList.add("upgrade");
                setTimeout(() => enemy.remove(), 5000);
            }, 500);
        } else {
            setTimeout(() => enemy.remove(), 1000);
        }
    }
}
