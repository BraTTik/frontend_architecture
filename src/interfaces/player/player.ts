export interface IPlayer {
    play(): void;
    pause(): void;
    destroy(): void;
    assignRef(node: HTMLVideoElement | null ):void;
    isPlaying():boolean;
    isReady():boolean;
    getPoster():string;
    hasAutoplay():boolean;
    getId():number;
}

export type TPlayerOptions = {
    autoplay?: boolean;
}
