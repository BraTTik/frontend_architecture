import React from "react";
import { ReactPlayer } from "interfaces";
import "./media-player.scss";

type MediaPlayerProps = {
    player: ReactPlayer | null;
    autoplay?: boolean;
}

export const MediaPlayer = (props: MediaPlayerProps) => {
    const { player, autoplay } = props;

    const handlePlay = React.useCallback(() => {
        if (player) {
            player.play();
        }
    }, [player])

    const cleanup = React.useCallback(() => {
        player?.destroy()
    }, [player])

    React.useEffect(() => {
        if (player && autoplay) {
            handlePlay();
        }
    }, [autoplay, player, handlePlay]);

    React.useEffect(() => cleanup, [cleanup])

    if(!player) {
        return <div>Loading...</div>
    }

    return (
        <div>
            { player.render({ autoplay }) }
        </div>
    )
}
