export default class AudioController {
    constructor() {
        this.player = document.getElementById("myAudio");
        this.isPlaying = false;
        window.togglePlay = () => {
            this.togglePlay();
        };
    }

    togglePlay() {
        this.isPlaying ? this.player.pause() : this.player.play();
        this.isPlaying = !this.isPlaying;
    }
}
