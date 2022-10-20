import { IConnectedPlayer } from "app/models";

export type VideoPlayerProps = {
    player: IConnectedPlayer;
    toggleRollup: () => void;
    isRolledUp: boolean;
}
