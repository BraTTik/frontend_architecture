import {IPlayer, PlayerState} from "interfaces";

export type VideoPlayerProps = {
    player: IPlayer;
    state: PlayerState;
    toggleRollup: () => void;
    isRolledUp: boolean;
}
