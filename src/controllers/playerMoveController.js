import { move } from "../utils";
import { Direction } from "../enums";
import { PLAYER_SHIP_SPEED } from "../constants";

export class PlayerMoveController {
    constructor(windowInnerHeight, windowInnerWidth) {
        this.windowInnerHeight = windowInnerHeight;
        this.windowInnerWidth = windowInnerWidth;

        this.ship = document.getElementById("ship");
        this.ship.height = this.ship.offsetHeight;
        this.ship.width = this.ship.offsetWidth;

        this.keys = {
            up: false,
            down: false,
            left: false,
            right: false,
        };
        document.addEventListener("keydown", this.eventHandler.bind(this));
        document.addEventListener("keyup", this.eventHandler.bind(this));
    }

    moveShipToCursor(event) {
        this.ship.y = event.clientY;
        this.ship.x = event.clientX;
        this.ship.style.top = `${this.ship.y}px`;
        this.ship.style.left = `${this.ship.x}px`;
    }

    eventHandler(event) {
        if (!window.useKeyboard) {
            return;
        }
        const isKeyUp = event.type === "keyup";
        switch (event.key) {
            case "ArrowUp":
                this.keys.up = isKeyUp ? false : true;
                break;

            case "ArrowDown":
                this.keys.down = isKeyUp ? false : true;
                break;

            case "ArrowLeft":
                this.keys.left = isKeyUp ? false : true;
                break;

            case "ArrowRight":
                this.keys.right = isKeyUp ? false : true;
                break;
        }
    }

    handleShipMove() {
        if (!window.useKeyboard) {
            return;
        }

        if (this.keys.up && this.ship.y > 0 + this.ship.height) {
            move(this.ship, Direction.TOP, PLAYER_SHIP_SPEED);
        }
        if (
            this.keys.down &&
            this.ship.y < this.windowInnerHeight - this.ship.height
        ) {
            move(this.ship, Direction.DOWN, PLAYER_SHIP_SPEED);
        }
        if (this.keys.left && this.ship.x > 0 + this.ship.width) {
            move(this.ship, Direction.LEFT, PLAYER_SHIP_SPEED);
        }
        if (
            this.keys.right &&
            this.ship.x < this.windowInnerWidth - this.ship.width
        ) {
            move(this.ship, Direction.RIGHT, PLAYER_SHIP_SPEED);
        }
    }
}
