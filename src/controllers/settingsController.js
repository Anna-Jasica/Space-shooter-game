import { showMenu, hideMenu, showSettings, hideSettings } from "../utils";

export class SettingsController {
    constructor() {
        window.useKeyboard = false;
        window.toggleMovementControl = () => this.toggleMovementControl();
        window.showSettings = () => this.showSettings();
        window.showMenu = () => this.showMenu();
    }

    showSettings() {
        hideMenu();
        showSettings();
    }

    showMenu() {
        hideSettings();
        showMenu();
    }

    toggleMovementControl() {
        window.useKeyboard = !window.useKeyboard;
        document.getElementById(
            "toggleMovementButton"
        ).innerHTML = window.useKeyboard ? "Use Mouse" : "Use Keyboard";
    }
}
