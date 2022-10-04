export interface IPlayer {
    play(): void;
    pause(): void;
    destroy(): void;
    assignRef(node: HTMLVideoElement | null ):void;
    isReady():boolean;
    getPoster():string;
    getId():number;
    setStore(store:IPlayerStore):void;
    getFileSrc():string;
}

export interface IPlayerPresentationProps {
    player: IPlayer;
}

export interface IPlayerModalProps extends IPlayerPresentationProps {
    isRolled: boolean;
    toggleRollup: () => void;
}

export interface IPlayerViewProps extends IPlayerPresentationProps{
    state: TPlayerViewState;
}

export interface IPlayerModalViewProps extends IPlayerModalProps, IPlayerViewProps {}

export interface IPlayerStore {
    state: TPlayerViewState;
    dispatch: React.Dispatch<TPlayerAction>
}

export type TPlayerViewState = {
    playing: boolean;
}
export type TPlayerAction = 'play' | 'pause';
