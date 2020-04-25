import "../style.scss";
import "../index.html";
import GameController from "./gameController";

window.init = function () {
    const gameController = new GameController();
    gameController.startGame();
};

// function isCollide(a, b) {
//     return !(
//         ((a.y + a.height) < (b.y)) ||
//         (a.y > (b.y + b.height)) ||
//         ((a.x + a.width) < b.x) ||
//         (a.x > (b.x + b.width))
//     );
// }
