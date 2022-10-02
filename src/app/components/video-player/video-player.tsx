import React, { useCallback, useEffect } from "react";
import cn from "classnames";
import { Button } from "app/components/button";
import { Modal } from "app/components/modal";
import { useRefAssign } from "app/shared";
import * as Types from "./video-player.types";
import "./video-player.scss";

export const VideoPlayer = React.forwardRef<HTMLVideoElement, Types.VideoPlayerProps & React.MediaHTMLAttributes<HTMLVideoElement>>((props, ref) => {
    const { isPlaying, isRolled, } = props;
    const [isBeingPlayed, setIsPlaying] = React.useState(isPlaying);
    const [isBeingRolled, setIsRolled] = React.useState(isRolled);
    const [videoRef, assignRef] = useRefAssign<HTMLVideoElement>(ref);


    useEffect(() => {
        setIsPlaying(isPlaying)
    }, [isPlaying]);

    useEffect(() => {
        if (props.autoPlay) {
            setIsPlaying(true);
        }
    }, [props.autoPlay]);

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
    }, [handlePause]);

    return (
        <Modal onClose={onModalClose} isOpen>
            <video ref={assignRef} className="video-player__video" />
            <div className="video-player__controls">
                <Button className={cn("video-player__button", isBeingRolled ? "unroll" : "roll" )} onClick={toggleRollup} content="" />
                <Button className={cn("video-player__button", isBeingPlayed ? "pause" : "play" )} onClick={isBeingPlayed ? handlePause : handlePlay} content="" />
            </div>
        </Modal>
    );
});
