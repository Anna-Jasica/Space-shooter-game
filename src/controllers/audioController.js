export class AudioController {
    constructor() {
        this.player = document.getElementById("myAudio");
        this.isPlaying = false;
        window.togglePlay = () => this.togglePlay();
    }

    togglePlay() {
        if (this.isPlaying) {
            this.player.pause();
            document.getElementById("musicButton").innerHTML =
                "Switch Music On";
        } else {
            this.player.play();
            document.getElementById("musicButton").innerHTML =
                "Switch Music Off";
        }
        this.isPlaying = !this.isPlaying;
    }
}
