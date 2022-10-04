import React, {useLayoutEffect} from "react";
import "./media-player.scss";

import {IPlayerPresentationProps} from "../../../interfaces";
import {StartButton} from "./video-player.start-button";
import {Modal} from "../modal";
import cn from "classnames";
import {MediaPlayerView} from "./MediaPlayerView";


export const MediaPlayer:React.FC<IPlayerPresentationProps> = ({ player }) => {
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);
    const [isRolled, setIsRolled] = React.useState(true);

    const init = () => {
        if (player.hasAutoplay()) {
            setIsVideoOpen(true);
        }
    }

    useLayoutEffect(init, [])

    const showModal = () => {
        setIsVideoOpen(true);
    }

    const toggleRollup = () => {
        setIsRolled(prev => !prev)
    }

    const onModalClose =  () => {
        player.pause();
        setIsVideoOpen(false);
    };

    if (!isVideoOpen) {
        return ( <StartButton onClick={showModal} poster={player.getPoster()} /> )
    }

    return (
        <Modal onClose={onModalClose} className={cn("video-player", isRolled && "video-player__rolled")}>
            <MediaPlayerView player={player} isRolled={isRolled} toggleRollup={toggleRollup}/>
        </Modal>
    )
}
