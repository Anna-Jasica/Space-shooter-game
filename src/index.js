import "../style.scss";
import "../index.html";
import GameController from "./controllers/gameController";

window.init = function (event) {
    if (!window.gameController) {
        window.gameController = new GameController();
    }
    window.gameController.startGame(event);
};
