import React from "react";
import {IMediaFile, ReactPlayer} from "interfaces";
import { VideoPlayer as Component} from "app/components";

export class VideoPlayer<P extends Record<string, any>> implements ReactPlayer<P> {
    private Component = Component;
    private player: React.MutableRefObject<HTMLVideoElement> = { current: null };
    private playing = false;
    private files: IMediaFile[] = [];

    play(): this {
        if (this.player.current && this.files.length > 0) {
            /** fixme: сделать выбор проигрываемого файла */
            this.player.current.src = this.files[0].getPath();
            this.player.current.play();
            this.playing = true;
        }
        return this;
    }

    load(file: IMediaFile | IMediaFile[]): this {
        this.files = Array.isArray(file) ? file : [file];
        return this;
    }

    destroy(): void {
        if (this.player.current) {
            this.player.current.pause();
        }
    }

    pause(): this {
        if (this.player.current) {
            this.player.current.pause();
            this.playing = false;
        }
        return undefined;
    }

    render(props?: P): React.FunctionComponentElement<HTMLVideoElement> {
        const Component = this.Component;
        return <Component ref={this.assignRef} { ...props } poster={this.files[0].getPoster()} isPlaying={this.playing ?? props?.isPlaying} />;
    }

    getPoster(): string {
        return this.files[0].getPoster();
    }

    isPlaying():boolean {
        return this.playing
    }

    assignRef = (node: HTMLVideoElement | null ) => {
        this.player.current = node;
    }
}
