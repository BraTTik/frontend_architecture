import {AudioType, IPlayer, VideoType, IMediaFile} from "interfaces";

export class Player<T extends VideoType | AudioType> implements IPlayer {
    private file: IMediaFile<T> | null = null;

    constructor(protected container: HTMLMediaElement){
    };

    public destroy(): void {
        this.stopPlaying();
        this.file = null;
    }

    load(file: IMediaFile<T>): this {
        this.container.src = file.getPath();
        this.container.load()
        return this;
    }

    pause(): this {
        this.stopPlaying();
        return this
    }

    play(): this {
        this.startPlaying();
        return this
    }

    private startPlaying = async () => {
        await this.container.play();
    }

    private stopPlaying = () => {
        this.container.pause();
    }
}
