import { IMediaFile } from "app/models/file";

export interface IPlayer {
    getId(): number;
    play(): void;
    pause(): void;
    load(file: IMediaFile[]): this;
    destroy(): void;
    isReady(): boolean;
    getCurrentPosterSrc(): string;
    getCurrentVideoSrc(): string;
    assignElement(element: HTMLMediaElement): void;
    addStore(store: IPlayerStore): void;
}

export interface IConnectedPlayer extends IPlayer {
    isPlaying: boolean;
}

export type PlayerState = {
    isPlaying: boolean;
}

export type PlayerActions = {
    setIsPlaying: (playing: boolean) => void;
}

export interface IPlayerStore {
    state: PlayerState;
    actions: PlayerActions;
}
