import {
    move,
    getHeight,
    getRandomInteger,
    increaseKillCount,
    isCollision,
} from "../utils";
import { Direction } from "../enums";
import {
    ENEMY_HP,
    ENEMY_DIRECTION_REPEAT,
    UPGRADE_SPAWN_CHANCE,
    ENEMY_SPEED,
} from "../constants";

export default class EnemiesController {
    spawnEnemy() {
        const enemy = document.createElement("div");
        enemy.setAttribute("hp", ENEMY_HP);
        enemy.classList.add("enemy");
        document.getElementById("main").appendChild(enemy);
        enemy.style.top = `${getRandomInteger(
            getHeight(enemy) / 2,
            window.innerHeight - getHeight(enemy) / 2
        )}px`;
        enemy.style.left = `${window.innerWidth}px`;
    }

    handleEnemyMove(enemy, frameNumber) {
        if (frameNumber % 2 === 0) {
            if (!enemy.getAttribute("direction")) {
                move(enemy, Direction.LEFT, ENEMY_SPEED);
                enemy.setAttribute("direction", Direction.LEFT);
            } else if (frameNumber % ENEMY_DIRECTION_REPEAT === 0) {
                const enemyYPosition = enemy.style.top.slice(0, -2);
                let directions = [
                    Direction.LEFT,
                    Direction.TOP,
                    Direction.DOWN,
                ];
                if (enemyYPosition < window.innerHeight * 0.2) {
                    directions.splice(directions.indexOf(Direction.TOP), 1);
                } else if (enemyYPosition > window.innerHeight * 0.2) {
                    directions.splice(directions.indexOf(Direction.DOWN), 1);
                }
                const direction =
                    directions[getRandomInteger(0, directions.length - 1)];
                move(enemy, direction, ENEMY_SPEED);
                enemy.setAttribute("direction", direction);
            } else {
                move(enemy, enemy.getAttribute("direction"), ENEMY_SPEED);
            }
        }
    }

    isAnyEnemyHit(bullet, weaponPower) {
        const enemies = document.getElementsByClassName("enemy");
        for (const enemy of enemies) {
            if (isCollision(enemy, bullet)) {
                let currentEnemyHP = enemy.getAttribute("hp");
                currentEnemyHP -= weaponPower;
                enemy.setAttribute("hp", currentEnemyHP);
                if (currentEnemyHP <= 0) {
                    increaseKillCount();
                    this.handleEnemyKill(enemy);
                }
                return true;
            }
        }

        return false;
    }

    handleEnemyKill(enemy) {
        enemy.classList.remove("enemy");
        enemy.classList.add("explosion");

        let possibility = getRandomInteger(1, 100);

        if (possibility <= UPGRADE_SPAWN_CHANCE) {
            setTimeout(() => {
                enemy.classList.remove("explosion");
                enemy.classList.add("upgrade");
            }, 500);
        } else {
            setTimeout(() => enemy.remove(), 1000);
        }
    }
}
