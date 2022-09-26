import {AudioType, IPlayer, VideoType, IMediaFile} from "interfaces";

export class Player<T extends VideoType | AudioType> implements IPlayer {
    private file: IMediaFile<T> | null = null;
    protected currentTime: number = 0;
    private timer: number | null = null;

    constructor(protected container: HTMLElement){
    };

    public destroy(): void {
        this.stopPlaying();
        this.file = null;
        this.currentTime = 0;
    }

    load(file: IMediaFile<T>): this {
        if (this.timer) {
            this.stopPlaying();
        }
        this.currentTime = 0;
        this.file = file;
        this.updateContainer(`${this.file} is loaded`);
        return this;
    }

    pause(): this {
        this.updateContainer(this.infoTemplate())
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
        if (this.currentTime < this.file.length) {
            this.timer = setInterval(() => {
                this.updateContainer(this.infoTemplate());
                this.currentTime += 1;
                if (this.currentTime >= this.file.length) {
                    this.pause();
                }
            }, 1000)
        }
    }

    private stopPlaying = () => {
        clearInterval(this.timer);
    }

    private updateContainer = (text: string) => {
        this.container.innerHTML = text;
    }

    private infoTemplate = () => {
        return `${this.file} is playing<br/> time: ${this.currentTime} <br /> remain: ${this.file.length - this.currentTime}`
    }
}
