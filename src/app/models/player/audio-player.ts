import { AudioType } from "interfaces";
import { Player } from "./player";

export class AudioPlayer<T extends AudioType> extends Player<T> {
    play(): this {
        if (this.currentTime === 0) {
            this.container.innerHTML = "AudioPlayer is about to start"
        }
        return super.play();
    }
}

