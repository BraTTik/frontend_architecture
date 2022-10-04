import React, {useLayoutEffect} from "react";
import {IPlayerModalProps, IPlayerModalViewProps} from "../../../interfaces";
import {withStore} from "../../models/player/withStore/withStore";
import cn from "classnames";
import {Button} from "../button";

const MediaPlayerViewComponent:React.FC<IPlayerModalViewProps> = ({ player, state, isRolled, toggleRollup }) => {
    const {playing} = state;
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const pause = () => { player.pause(); }
    const play = () => { player.play(); }
    const cleanup = () => { player.destroy; }

    const init = () => {
        console.log(videoRef);
        player.assignRef(videoRef.current);
        if (player.hasAutoplay()) {
            play();
        }
        return cleanup;
    }

    useLayoutEffect(init, [])

    return (
        <div>
            <video poster={player.getPoster()} ref={videoRef} className={cn("video-player__video", isRolled && "rolled")} />
            <div className="video-player__controls">
                <Button className={cn("video-player__button", isRolled ? "unroll" : "roll" )} onClick={toggleRollup} content="" />
                <Button className={cn("video-player__button", playing ? "pause" : "play" )} onClick={playing ? pause : play} content="" />
            </div>
        </div>
    )
}

export const MediaPlayerView:React.FC<IPlayerModalProps> = withStore<IPlayerModalProps>(MediaPlayerViewComponent);
