import { IMediaFile } from "interfaces/file";

export interface IPlayer {
    play(): this;
    pause(): this;
    load(file: IMediaFile | IMediaFile[]): this;
    destroy(): void;
    isReady(): boolean;
    getCurrentPosterSrc(): string;
    getCurrentVideoSrc(): string;
    assignElement(element: HTMLVideoElement): void;
    addStore(store: IPlayerStore): void;
}

export type PlayerState = {
    isPlaying: boolean;
    isRolledUp: boolean;
}

export type PlayerActions = {
    setIsPlaying: (playing: boolean) => void;
    setIsRolledUp: (isRolled: boolean) => void;
}

export interface IPlayerStore {
    state: PlayerState;
    actions: PlayerActions;
}
