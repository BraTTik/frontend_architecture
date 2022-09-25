import { AudioType } from "interfaces";
import { Player } from "./player";

export class AudioPlayer<T extends AudioType> extends Player<T> {
    play(): this {
        this.container.prepend("AudioPlayer\n");
        return super.play();
    }
}

