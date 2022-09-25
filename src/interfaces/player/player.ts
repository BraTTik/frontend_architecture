import {VideoType, AudioType} from "../file";

export interface IPlayer<T extends VideoType | AudioType> {
    play(): this;
    pause(): this;
    destroy(): void;
}
