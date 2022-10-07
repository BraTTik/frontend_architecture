import React, { useCallback } from "react";
import cn from "classnames";
import { Button } from "app/components/button";
import * as Types from "./video-player.types";
import "./video-player.scss";

export const VideoPlayer: React.FC<Types.VideoPlayerProps> = (props) => {
    const { player, store } = props;
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const { isRolledUp } = store.state;
    const { actions } = store;

    React.useEffect(() => {
        player.assignElement(videoRef.current);
    }, [])

    React.useEffect(() => {})

    const handlePlay = useCallback(() => {
        player.play();
    }, [player]);

    const handlePause = React.useCallback(() => {
        player.pause();
    }, [player]);

    const toggleRollup = () => {
        actions.setIsRolledUp(!isRolledUp)
    }

    return (
        <div>
            <video poster={player.getCurrentPosterSrc()} src={player.getCurrentVideoSrc()} ref={videoRef} className={cn("video-player__video", isRolledUp && "rolled")} />
            <div className="video-player__controls">
                <Button className={cn("video-player__button", isRolledUp ? "unroll" : "roll" )} onClick={toggleRollup} content="" />
                <Button className={cn("video-player__button", store.state.isPlaying ? "pause" : "play" )} onClick={store.state.isPlaying ? handlePause : handlePlay} content="" />
            </div>
        </div>
    );
};
