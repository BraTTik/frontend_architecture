import React  from "react";
import cn from "classnames";
import { Button } from "app/components/button";
import * as Types from "./video-player.types";
import "./video-player.scss";

export const VideoPlayer: React.FC<Types.VideoPlayerProps> = (props) => {
    const { player, isPlaying, isRolledUp, toggleRollup } = props;

    const initPlayer = (node: HTMLVideoElement | null) => {
        if(node) {
            player.assignElement(node);
        }
    }

    const handlePlay = () => {
        player.play();
    }

    const handlePause = () => {
        player.pause();
    }

    return (
        <div>
            <video poster={player.getCurrentPosterSrc()} src={player.getCurrentVideoSrc()} ref={initPlayer} className={cn("video-player__video", isRolledUp && "rolled")} />
            <div className="video-player__controls">
                <Button className={cn("video-player__button", isRolledUp ? "unroll" : "roll" )} onClick={toggleRollup} content="" />
                <Button className={cn("video-player__button", isPlaying ? "pause" : "play" )} onClick={isPlaying ? handlePause : handlePlay} content="" />
            </div>
        </div>
    );
};
