import React from "react";
import {IConnectedPlayer} from "app/models";

type StoriesPlayerProps = {
    player: IConnectedPlayer;
}

export const StoriesPlayer = (props: StoriesPlayerProps) => {
    const { player } = props;

    const initPlayer = (node: HTMLVideoElement | null) => {
        if(node) {
            player.assignElement(node);
        }
    }

    return <video poster={player.getCurrentVideoSrc()} ref={initPlayer}></video>
}
