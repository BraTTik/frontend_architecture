export interface IPlayer {
    play(): void;
    pause(): void;
    destroy(): void;
    assignRef(node: HTMLVideoElement | null ):void;
    isReady():boolean;
    getPoster():string;
    hasAutoplay():boolean;
    getId():number;
    setStore(store:IPlayerStore):void;
}

export type TPlayerOptions = {
    autoplay?: boolean;
}

export interface IPlayerConnectedViewProps {
    player:IPlayer;
}

export interface IPlayerViewProps extends IPlayerConnectedViewProps{
    state: TPlayerViewState;
}

export interface IPlayerStore {
    state: TPlayerViewState;
    dispatch: React.Dispatch<TPlayerAction>
}

export type TPlayerViewState = {
    playing: boolean;
}
export type TPlayerAction = 'play' | 'pause';
