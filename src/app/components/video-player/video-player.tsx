import React, {useCallback, useEffect} from "react";
import { Button } from "app/components/button";
import { useRefAssign } from "app/shared";
import * as Types from "./video-player.types";

export const VideoPlayer = React.forwardRef<HTMLVideoElement, Types.VideoPlayerProps>((props, ref) => {
    const [isPlaying, setIsPlaying] = React.useState(props.isPlaying);
    const [isRolled, setIsRolled] = React.useState(props.isRolled);
    const [videoRef, assignRef] = useRefAssign<HTMLVideoElement>(ref);

    useEffect(() => {
        setIsPlaying(props.isPlaying)
    }, [props.isPlaying]);

    const handlePlay = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    }, [])

    const handlePause = React.useCallback(() => {
        videoRef.current.pause();
        setIsPlaying(false);
    }, [])

    const toggleRollup = React.useCallback(() => {
        setIsRolled(prev => !prev)
    }, [])

    return <div>
        <video ref={assignRef} className="media-player" />
        <div className="media-player__controls">
            <Button onClick={toggleRollup} content="Свернуть" />
            <Button onClick={isPlaying ? handlePause: handlePlay} content={isPlaying ? "Pause" : "Play"} />
        </div>
    </div>
})
