import React, {useLayoutEffect} from "react";
import {
    IPlayerModalProps,
    IPlayerModalViewProps,
    IPlayerPresentationProps,
    IPlayerViewProps
} from "../../../interfaces";
import {withStore} from "../../models/player/withStore/withStore";
import cn from "classnames";
import {Button} from "../button";
import "./media-player.scss";

const isRolled = false;
const toggleRollup = () => void 0;
const MediaPlayerViewComponent:React.FC<IPlayerViewProps> = ({ player, state }) => {
    console.log(player.getFileSrc())
    const {playing} = state;
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isPlaying, setPlaying] = React.useState(false);

    const pause = () => { videoRef.current.pause(); setPlaying(false)}
    const play = () => { videoRef.current.play(); setPlaying(true)}
    // const cleanup = () => { player.destroy; }

    const init = () => {
        player.assignRef(videoRef.current);
        if (player.hasAutoplay()) {
            play();
        }
        // return cleanup;
    }

    useLayoutEffect(init, [])

    return (
        <div>
            <video ref={videoRef} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" className={cn("video-player__video", isRolled && "rolled")} />
            <div className="video-player__controls">
                <Button className={cn("video-player__button", isRolled ? "unroll" : "roll" )} onClick={toggleRollup} content="" />
                <Button className={cn("video-player__button", isPlaying ? "pause" : "play" )} onClick={isPlaying ? pause : play} content="" />
            </div>
        </div>
    )
}

export const MediaPlayerView:React.FC<IPlayerPresentationProps> = withStore<IPlayerPresentationProps>(MediaPlayerViewComponent);
