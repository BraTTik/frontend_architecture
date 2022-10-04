import React, {useCallback, useEffect} from "react";
import "./media-player.scss";

import {IPlayerConnectedViewProps, IPlayerViewProps} from "../../../interfaces";
import {StartButton} from "./video-player.start-button";
import {Modal} from "../modal";
import cn from "classnames";
import {Button} from "../button";
import {useRefAssign} from "../../shared";
import {withStore} from "../../models/player/withStore/withStore";


const MediaPlayerView:React.FC<IPlayerViewProps> = ({ player, state }) => {
    const { playing } = state;
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);
    const [isBeingRolled, setIsRolled] = React.useState(false);
    const [videoRef, assignRef] = useRefAssign<HTMLVideoElement>(player.assignRef);

    const modalRef = React.useRef<HTMLDialogElement>(null);

    const handleStartPlay = useCallback(() => {
        if (modalRef.current) {
            // @ts-ignore
            modalRef.current.showModal();
            setIsVideoOpen(true);
            player.play();
        }
    }, []);

    useEffect(() => {
        if (player.hasAutoplay()) {
            handleStartPlay();
        }
    }, [player])

    const cleanup = () => {
        player.destroy;
    }


    React.useEffect(() => cleanup, [])


    const toggleRollup = () => {
        setIsRolled(prev => !prev)
    }

    const onModalClose = () => {
        player.pause();
        setIsVideoOpen(false);
    }

    const pause = () => {
        player.pause();
    }

    const play = () => {
        player.play()
    }

    return (
        <div>
            <div className="video-player__start-button__wrapper">
                { !isVideoOpen && <StartButton onClick={handleStartPlay} poster={player.getPoster()} /> }
            </div>
            <Modal ref={modalRef} onClose={onModalClose} className={cn("video-player", isBeingRolled && "video-player__rolled")}>
                <video poster={player.getPoster()} ref={assignRef} className={cn("video-player__video", isBeingRolled && "rolled")} />
                <div className="video-player__controls">
                    <Button className={cn("video-player__button", isBeingRolled ? "unroll" : "roll" )} onClick={toggleRollup} content="" />
                    <Button className={cn("video-player__button", playing ? "pause" : "play" )} onClick={playing ? pause : play} content="" />
                </div>
            </Modal>
        </div>
    );
}

export const MediaPlayer:React.FC<IPlayerConnectedViewProps> = withStore(MediaPlayerView);
