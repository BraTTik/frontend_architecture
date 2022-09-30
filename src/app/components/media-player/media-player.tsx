import React from "react";
import { IPlayer } from "interfaces";
import { Button } from "app/components/button";
import "./media-player.scss";

type MediaPlayerProps = {
    player: IPlayer | null;
    autoplay?: boolean;
}

export const MediaPlayer = React.forwardRef<HTMLVideoElement, MediaPlayerProps>((props: MediaPlayerProps, ref) => {
    const { player, autoplay } = props;
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handlePlay = React.useCallback(() => {
        if (player) {
            player.play();
            setIsPlaying(true)
        }
    }, [player])

    const handlePause = React.useCallback(() => {
        if (player) {
            player.pause();
            setIsPlaying(false)
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

    return (
        <div>
            <Button onClick={isPlaying ? handlePause: handlePlay} content={isPlaying ? "Pause" : "Play"} />
            <video ref={ref} className="media-player" />
        </div>
    )
})
