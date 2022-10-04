import React from "react";
import { ReactPlayer } from "interfaces";
import "./media-player.scss";
import {VideoPlayer} from "../video-player";

type MediaPlayerProps = {
    player: ReactPlayer | null;
    autoPlay?: boolean;
}

export const MediaPlayer = (props: MediaPlayerProps) => {
    const { player, autoPlay } = props;

    const handlePlay = React.useCallback(() => {
        if (player) {
            player.play();
        }
    }, [player])

    const cleanup = React.useCallback(() => {
        player?.destroy()
    }, [player])

    React.useEffect(() => {
        if (player && autoPlay) {
            handlePlay();
        }
    }, [autoPlay, player, handlePlay]);

    React.useEffect(() => cleanup, [cleanup])

    if (!player) {
        return null;
    }

    return (
        <div>
            <VideoPlayer autoPlay  ref={player.assignRef} poster={player.getPoster()} isPlaying={player.isPlaying()}/>
        </div>
    )
}
