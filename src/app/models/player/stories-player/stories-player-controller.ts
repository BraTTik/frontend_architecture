import {IConnectedPlayer, IPlayerStore} from "../types";
import { createId } from "app/shared";
import {IMediaFile} from "app/models/file";
import {LinkedList} from "app/models/linked-list";

export class StoriesPlayerController implements IConnectedPlayer {
    private readonly id: number;
    private files: LinkedList<IMediaFile> = new LinkedList<IMediaFile>();
    private storiesLength = 2;
    private currentTime = 0;
    private startTime: number | undefined;
    private timer: number | undefined;
    private store: IPlayerStore | undefined;
    private tag: HTMLVideoElement | undefined;

    constructor() {
        this.id = createId();
    }

    get isPlaying() {
        if (this.isReady()) {
            return this.store.state.isPlaying
        }
        return false;
    }

    addStore(store: IPlayerStore): void {
        this.store = store;
    }

    assignElement(element: HTMLVideoElement): void {
        this.tag = element;
    }

    destroy(): void {
        this.pause();
        this.tag = null;
    }

    getCurrentPosterSrc(): string {
        return this.files.current().getPath();
    }

    getCurrentVideoSrc(): string {
        return this.files.current().getPath();
    }

    getId(): number {
        return this.id;
    }

    isReady(): boolean {
        return Boolean(this.store && this.tag);
    }

    load(files: IMediaFile[]): this {
        files.forEach(file => this.files.add(file));
        return this;
    }

    pause(): void {
        if (this.isReady()) {
            this.store.actions.setIsPlaying(false)
            clearTimeout(this.timer);
        }
    }

    play(): void {
        if (this.isReady()) {
            if (!this.files.hasNext()) this.replay();
            this.continue();
        }
    }

    private continue = () => {
        this.store.actions.setIsPlaying(true);
        this.startTime = Date.now();
        this.currentTime = 0;
        this.playing();
    }

    private replay = () => {
        while (this.files.prev()) {
        }
    }

    private playing = () => {
        this.timer = setInterval(() => {
            this.currentTime = this.getSeconds();
            if (this.currentTime >= this.storiesLength) {
                this.pause();
                const next = this.files.next();

                if (next) {
                    this.continue();
                }
            }
        }, 30)
    }

    private getSeconds = () => {
        return Math.floor((Date.now() - this.startTime) / 1000);
    }

}
