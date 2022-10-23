import React from "react";
import { IMediaFile } from "app/models/file";
import { LinkedList } from "app/models/linked-list";
import { createId } from "app/shared";
import { IConnectedPlayer, IPlayerStore } from "../types";

export class VideoPlayerController implements IConnectedPlayer {
    private readonly id: number;
    private videoTag: HTMLVideoElement | null = null;
    private files: LinkedList<IMediaFile> = new LinkedList<IMediaFile>();
    private store: IPlayerStore | null = null;

    constructor() {
        this.id = createId();
    }

    get isPlaying(): boolean {
        if (this.isReady()) {
            return this.store.state.isPlaying;
        }
        return false;
    }

    play() {
        if (this.isReady()) {
            this.videoTag.play();
            this.store.actions.setIsPlaying(true);
        }
    }

    getId(): number {
        return this.id;
    }

    load(files: [IMediaFile]): this {
        files.forEach(file => this.files.add(file));
        return this;
    }

    destroy() {
        if (this.isReady()) {
            this.videoTag.pause();
            this.videoTag = null;
        }
    }

    pause() {
        if (this.isReady()) {
            this.videoTag.pause();
            this.store.actions.setIsPlaying(false);
        }
    }

    isReady(): boolean {
        // Fixme: сделать обработку ошибок как-то иначе
        // if (!this.store) {
        //     throw new Error("Store is sufficient. Connect player to the store through 'addStore' method")
        // }
        // if (!this.videoTag) {
        //     throw new Error("Video container is sufficient. Assign HTMLVideoElement through 'assignElement' method")
        // }
        // if (!this.files.current()) {
        //     throw new Error("No video files has been added. Add files with 'load' method")
        // }
        return Boolean(this.videoTag && this.files.current() && this.store);
    }

    getCurrentVideoSrc(): string {
        return this.files.current().getPath();
    }

    getCurrentPosterSrc(): string {
        return this.files.current().getPoster();
    }

    assignElement(node: HTMLVideoElement) {
        this.videoTag = node;
    }

    addStore(store: IPlayerStore) {
        this.store = store;
    }
}
