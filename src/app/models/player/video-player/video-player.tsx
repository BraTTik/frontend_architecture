import React from "react";
import { IMediaFile, IPlayer, IPlayerStore } from "interfaces";
import { FileManager } from "interfaces/file/file-manager";
import { MediaFileManager } from "app/models/file-manager";

export class VideoPlayer implements IPlayer {
    private player: HTMLVideoElement | null = null;
    private files: FileManager<IMediaFile> = new MediaFileManager();
    private store: IPlayerStore | null = null;

    play(): this {
        if (this.isReady()) {
            this.player.play();
            this.store?.actions.setIsPlaying(true);
        }
        return this;
    }

    load(file: IMediaFile | IMediaFile[]): this {
        this.files.setFiles(Array.isArray(file) ? file : [file]);
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
        return Boolean(this.player) && Boolean(this.files.getActiveFile());
    }

    getCurrentVideoSrc(): string {
        return this.files.getActiveFile().getPath();
    }

    getCurrentPosterSrc(): string {
        return this.files.getActiveFile().getPoster();
    }

    assignElement(node: HTMLVideoElement) {
        this.player = node;
    }

    addStore(store: IPlayerStore) {
        this.store = store;
    }
}
