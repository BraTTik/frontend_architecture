import {AudioType, IPlayer, VideoType, IMediaFile} from "interfaces";

export class Player<T extends VideoType | AudioType> implements IPlayer<T> {
    file: IMediaFile<T> | null = null;
    public currentTime: number = 0;
    private timer: number | null = null;

    constructor(protected container: HTMLElement){};

    load(file: IMediaFile<T>): this {
        this.file = file;
        this.updateContainer(`${this.file} is loaded`);
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

    private startPlaying = () => {
        if (!this.file) {
            throw new Error("Load file first: Player.load(file: File)");
        }
        this.timer = setInterval(() => {
            this.updateContainer(`${this.file} is playing\n time: ${this.currentTime}`);
            this.currentTime += 1;
            if (this.currentTime >= this.file.length) {
                this.stopPlaying();
            }
        }, 1000)
    }

    private stopPlaying = () => {
        this.updateContainer(`${this.file} is paused\n time: ${this.currentTime}`)
        clearTimeout(this.timer);
    }

    private updateContainer = (text: string) => {
        this.container.innerHTML = text;
    }
}
