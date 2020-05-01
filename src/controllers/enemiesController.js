import { move, getHeight, getRandomInteger } from "../utils";
import { Direction } from "../enums";
import {
    ENEMY_HP,
    ENEMY_DIRECTION_REPEAT,
    UPGRADE_SPAWN_CHANCE,
    ENEMY_SPEED,
} from "../constants";

export default class EnemiesController {
    constructor() {
        this.enemies = [];
        this.enemyId = 0;
    }

    spawnEnemy() {
        const enemy = document.createElement("div");
        enemy.classList.add("enemy", "progress");
        enemy.setAttribute("hp", ENEMY_HP);
        enemy.setAttribute("max-hp", ENEMY_HP);

        enemy.appendChild(this.createHpBar());
        document.getElementById("main").appendChild(enemy);
        enemy.style.top = `${getRandomInteger(
            getHeight(enemy) / 2,
            window.innerHeight - getHeight(enemy) / 2
        )}px`;
        enemy.style.left = `${window.innerWidth}px`;

        enemy.id = this.enemyId++;
        this.enemies.push(enemy);
        document.getElementById("main").appendChild(enemy);
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
            const enemyYPosition = enemy.offsetTop;
            let directions = [Direction.LEFT, Direction.TOP, Direction.DOWN];
            if (enemyYPosition < window.innerHeight * 0.3) {
                directions.splice(directions.indexOf(Direction.TOP), 1);
            } else if (
                enemyYPosition >
                window.innerHeight - window.innerHeight * 0.3
            ) {
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
