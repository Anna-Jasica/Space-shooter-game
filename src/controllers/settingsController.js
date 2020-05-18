import { showMenu, hideMenu, showSettings, hideSettings } from "../utils";

export class SettingsController {
    constructor() {
        this.useKeyboard = false;
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
        this.useKeyboard = !this.useKeyboard;
        document.getElementById("toggleMovementButton").innerHTML = this
            .useKeyboard
            ? "Use Mouse"
            : "Use Keyboard";
    }
}
