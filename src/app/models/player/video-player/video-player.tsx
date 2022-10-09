import React from "react";
import { IMediaFile, IPlayer, IPlayerStore } from "interfaces";
import { LinkedList } from "app/models/linked-list";

export class VideoPlayer implements IPlayer {
    private player: HTMLVideoElement | null = null;
    private files: LinkedList<IMediaFile> = new LinkedList<IMediaFile>();
    private store: IPlayerStore | null = null;

    play(): this {
        if (this.isReady()) {
            this.player.play();
            this.store?.actions.setIsPlaying(true);
        }
        return this;
    }

    load(files: [IMediaFile]): this {
        files.forEach(file => this.files.add(file));
        return this;
    }

    destroy(): void {
        if (this.isReady()) {
            this.player.pause();
            this.player = null;
        }
    }

    pause(): this {
        if (this.isReady()) {
            this.player.pause();
            this.store?.actions.setIsPlaying(false);
        }
        return undefined;
    }

    isReady(): boolean {
        return Boolean(this.player && this.files.current());
    }

    getCurrentVideoSrc(): string {
        return this.files.current().getPath();
    }

    getCurrentPosterSrc(): string {
        return this.files.current().getPoster();
    }

    assignElement(node: HTMLVideoElement) {
        this.player = node;
    }

    addStore(store: IPlayerStore) {
        this.store = store;
    }
}
