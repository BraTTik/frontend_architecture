import { Player } from "./player";
import { VideoType } from "interfaces";

export class VideoPlayer<T extends VideoType> extends Player<T> {
    play(): this {
        this.container.prepend("VideoPlayer\n");
        return super.play();
    }
}
