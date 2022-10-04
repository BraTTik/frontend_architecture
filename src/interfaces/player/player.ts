import { IMediaFile } from "interfaces/file";

export interface IPlayer {
    play(): this;
    pause(): this;
    load(file: IMediaFile | IMediaFile[]): this;
    destroy(): void;
}

export interface ReactPlayer<P  extends Record<string, any> = {}> extends IPlayer {
    assignRef(node: HTMLVideoElement | null ):void;
    getPoster():string;
    isPlaying():boolean;
}
