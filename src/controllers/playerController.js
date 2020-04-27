import { getWidth } from "../utils";

export default class PlayerController {
    constructor() {
        this.currentHp = 0;
        this.weaponPower = 0;
    }

    fire(event) {
        const bullet = document.createElement("div");
        const ship = document.getElementById("ship");
        bullet.classList.add("bullet");
        bullet.classList.add("undraggable");
        document.getElementById("main").appendChild(bullet);
        bullet.style.top = `${event.y}px`;
        bullet.style.left = `${event.x + getWidth(ship) / 2}px`;
    }
}
