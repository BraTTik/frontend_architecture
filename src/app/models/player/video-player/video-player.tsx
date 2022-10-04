import React from "react";
import {IMediaFile, IPlayer, TPlayerOptions, VideoType} from "interfaces";
import {IFilesQueue} from "./filesQueue";
import {getUid} from "./helpers/getUid";

export class VideoPlayer implements IPlayer {
    private player_tag: HTMLVideoElement | null = null;
    private playing = false;
    private ready = false;
    private file:IMediaFile<VideoType> | null;
    private autoplay:boolean;
    private uid:number = getUid();

    constructor(private queue: IFilesQueue<VideoType>, options?:TPlayerOptions) {
        this.file = queue.get();
        this.autoplay = Boolean(options?.autoplay);
    }

    play():void {
        if (!this.ready) {
            return;
        }
        if (this.ready) {
            this.player_tag.src = this.file.getPath();
            this.player_tag.play();
            this.playing = true;
        }
    }

    destroy(): void {
        if (this.isPlaying()) {
            this.player_tag.pause();
        }
    }

    pause(): void {
        if (this.isPlaying()) {
            this.player_tag.pause();
            this.playing = false;
        }
    }

    getPoster(): string {
        return this.file.getPoster();
    }

    isPlaying():boolean {
        return this.playing
    }

    assignRef = (node: HTMLVideoElement | null ) => {
        this.player_tag = node;
        this.init();
    }

    isReady(): boolean {
        return this.ready;
    }

    hasAutoplay(): boolean {
        return this.autoplay;
    }

    getId(): number {
        return this.uid;
    }

    private init() {
        if (this.player_tag && this.file) {
            this.ready = true;
        }
    }
}
