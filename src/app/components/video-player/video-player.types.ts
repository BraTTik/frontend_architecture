import { IPlayer } from "interfaces";

export type VideoPlayerProps = {
    player: IPlayer;
    toggleRollup: () => void;
    isRolledUp: boolean;
    isPlaying: boolean;
}
