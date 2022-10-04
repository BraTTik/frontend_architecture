import React from "react";
import {IMediaFile, IPlayer, IPlayerStore, VideoType} from "interfaces";
import {IFilesQueue} from "./filesQueue";
import {getUid} from "./helpers/getUid";

export class VideoPlayer implements IPlayer {
    private player_tag: HTMLVideoElement | null = null;
    private file:IMediaFile<VideoType>;
    private uid:number = getUid();
    private store:IPlayerStore | undefined;

    constructor(private queue: IFilesQueue<VideoType>) {
        const currentFile = queue.get();
        if (!currentFile) {
            throw new Error("Queue is empty");
        }
        this.file = currentFile;
    }

    play():void {
        if (!this.isReady()) {
            return;
        }
        this.player_tag.play();
        this.store.dispatch("play");
    }

    destroy(): void {
        if (this.store?.state.playing) {
            this.player_tag.pause();
            this.store.dispatch("pause");
        }
    }

    pause(): void {
        if (this.store?.state.playing) {
            this.player_tag.pause();
            this.store.dispatch("pause");
        }
    }

    getPoster(): string {
        return this.file.getPoster();
    }

    assignRef = (node: HTMLVideoElement | null ) => {
        this.player_tag = node;
    }

    isReady(): boolean {
        return Boolean(this.player_tag && this.file && this.store);
    }

    getId(): number {
        return this.uid;
    }

    setStore(store: IPlayerStore) {
        this.store = store;
    }

    getFileSrc(): string {
        return this.file?.getPath();
    }

}
