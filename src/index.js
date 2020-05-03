import "../style.scss";
import "../index.html";
import GameController from "./controllers/gameController";

window.startGame = function (event) {
    window.gameController.startGame(event);
};

window.onload = function () {
    window.gameController = new GameController();
};
