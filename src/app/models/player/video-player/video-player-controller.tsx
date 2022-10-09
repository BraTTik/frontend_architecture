import React from "react";
import { IMediaFile } from "app/models/file";
import { LinkedList } from "app/models/linked-list";
import { createId } from "app/shared";
import { IPlayer, IPlayerStore } from "../types";

export class VideoPlayerController implements IPlayer {
    private readonly id: number;
    private videoTag: HTMLVideoElement | null = null;
    private files: LinkedList<IMediaFile> = new LinkedList<IMediaFile>();
    private store: IPlayerStore | null = null;

    constructor() {
        this.id = createId();
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
