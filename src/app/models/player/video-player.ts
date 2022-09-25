import { Player } from "./player";
import { VideoType } from "interfaces";

export class VideoPlayer<T extends VideoType> extends Player<T> {
    play(): this {
        if (this.currentTime === 0){
            this.container.innerHTML = "VideoPlayer is about to start"
        }
        return super.play();
    }
}
