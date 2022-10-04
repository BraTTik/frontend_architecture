import React from "react";
import {IMediaFile, IPlayer, IPlayerStore, TPlayerOptions, VideoType} from "interfaces";
import {IFilesQueue} from "./filesQueue";
import {getUid} from "./helpers/getUid";

export class VideoPlayer implements IPlayer {
    private player_tag: HTMLVideoElement | null = null;
    private file:IMediaFile<VideoType> | null;
    private autoplay:boolean;
    private uid:number = getUid();
    private store:IPlayerStore | undefined;

    constructor(private queue: IFilesQueue<VideoType>, options?:TPlayerOptions) {
        this.file = queue.get();
        this.autoplay = Boolean(options?.autoplay);
    }

    play():void {
        if (!this.isReady()) {
            return;
        }
        this.player_tag.src = this.file.getPath();
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

    hasAutoplay(): boolean {
        return this.autoplay;
    }

    getId(): number {
        return this.uid;
    }

    setStore(store: IPlayerStore) {
        this.store = store;
    }

}
