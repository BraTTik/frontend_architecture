import React, { useCallback, useEffect } from "react";
import cn from "classnames";
import { Button } from "app/components/button";
import { Modal } from "app/components/modal";
import { useRefAssign } from "app/shared";
import * as Types from "./video-player.types";
import "./video-player.scss";
import {StartButton} from "./video-player.start-button";

export const VideoPlayer = React.forwardRef<HTMLVideoElement, Types.VideoPlayerProps & React.MediaHTMLAttributes<HTMLVideoElement>>((props, ref) => {
    const { isPlaying, isRolled, poster, } = props;
    const modalRef = React.useRef<HTMLDialogElement>(null);
    const [isVideoOpen, setIsVideoOpen] = React.useState(false);
    const [isBeingPlayed, setIsPlaying] = React.useState(isPlaying);
    const [isBeingRolled, setIsRolled] = React.useState(isRolled);
    const [videoRef, assignRef] = useRefAssign<HTMLVideoElement>(ref);

    const handleStartPlay = useCallback(() => {
        if (modalRef.current) {
            modalRef.current.showModal();
            setIsVideoOpen(true);
            handlePlay();
        }
    }, []);

    useEffect(() => {
        setIsPlaying(isPlaying)
    }, [isPlaying]);

    useEffect(() => {
        if (props.autoPlay) {
            handleStartPlay();
        }
    }, [props.autoPlay, handleStartPlay]);

    const handlePlay = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    }, []);

    const handlePause = React.useCallback(() => {
        if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    }, []);

    const toggleRollup = React.useCallback(() => {
        setIsRolled(prev => !prev)
    }, []);

    const onModalClose = useCallback(() => {
        handlePause();
        setIsVideoOpen(false);
    }, [handlePause]);

    return (
        <div>
            <div className="video-player__start-button__wrapper">
                { !isVideoOpen && <StartButton onClick={handleStartPlay} poster={poster} /> }
            </div>
            <Modal ref={modalRef} onClose={onModalClose} className={cn("video-player", isBeingRolled && "video-player__rolled")}>
                <video poster={poster} ref={assignRef} className={cn("video-player__video", isBeingRolled && "rolled")} />
                <div className="video-player__controls">
                    <Button className={cn("video-player__button", isBeingRolled ? "unroll" : "roll" )} onClick={toggleRollup} content="" />
                    <Button className={cn("video-player__button", isBeingPlayed ? "pause" : "play" )} onClick={isBeingPlayed ? handlePause : handlePlay} content="" />
                </div>
            </Modal>
        </div>
    );
});
