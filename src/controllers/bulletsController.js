export default class BulletsController {
    constructor(shipWidth) {
        this.bullets = [];
        this.bulletId = 0;

        this.shipWidth = shipWidth;

        const sizes = this.getBulletSizes();
        this.bulletHeight = sizes.height;
        this.bulletWidth = sizes.width;
    }

    createBullet(event) {
        const bullet = document.createElement("div");
        bullet.classList.add("bullet", "undraggable");

        bullet.id = this.bulletId++;
        bullet.y = event.y;
        bullet.x = event.x + this.shipWidth / 2;
        bullet.height = this.bulletHeight;
        bullet.width = this.bulletWidth;

        bullet.style.top = `${bullet.y}px`;
        bullet.style.left = `${bullet.x}px`;
        this.bullets.push(bullet);
        document.getElementById("main").appendChild(bullet);
    }

    removeBullet(bullet) {
        this.bullets.splice(
            this.bullets.findIndex((obj) => obj.id === bullet.id),
            1
        );
        bullet.remove();
    }

    getBulletSizes() {
        const bullet = document.createElement("div");
        bullet.classList.add("bullet");
        document.getElementById("main").appendChild(bullet);
        const sizes = {
            width: bullet.offsetWidth,
            height: bullet.offsetHeight,
        };
        bullet.remove();
        return sizes;
    }
}
