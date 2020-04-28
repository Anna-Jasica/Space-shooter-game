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
        console.log(enemy.children);
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
                let maxEnemyHP = enemy.getAttribute("max-hp");
                let currentEnemyHP = enemy.getAttribute("hp");
                currentEnemyHP -= weaponPower;
                enemy.setAttribute("hp", currentEnemyHP);

                if (currentEnemyHP !== maxEnemyHP) {
                    enemy.firstElementChild.setAttribute(
                        "aria-valuenow",
                        String(currentEnemyHP / maxEnemyHP)
                    );
                    enemy.firstElementChild.style.width = `${
                        (currentEnemyHP / maxEnemyHP) * 100
                    }%`.toString();
                    console.log(currentEnemyHP / maxEnemyHP);
                    console.log(enemy.firstElementChild.style.width);
                }

                // switch (currentEnemyHP) {
                //     case 2:
                //         enemy.firstElementChild["aria-valuenow"] === "75";
                //         enemy.firstElementChild.style === "width: 75%";
                //         break;
                // }
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
        enemy.firstElementChild.remove();

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
