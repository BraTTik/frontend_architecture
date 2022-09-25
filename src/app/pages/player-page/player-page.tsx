import React, {useEffect} from "react";
import { Player } from "app/models";
import {Button, MediaPlayer} from "app/components";
import {AudioType, IMediaFile, VideoType} from "interfaces";
import {createRandomMediaFile} from "app/pages/player-page/player-page.helpers";

export const PlayerPage = () => {
    const playerRef = React.useRef<Player<VideoType | AudioType> | null>(null);
    const [file, setFile] = React.useState<IMediaFile<VideoType | AudioType>>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);

    const handleClick = () => {
        const file = createRandomMediaFile(Math.random() > 0.5 ? "My favorite" : "The best track");
        setFile(file);
    }

    const handlePlay = () => {
        if (file) {
            playerRef.current.play();
            setIsPlaying(true)
        }
    }

    const handlePause = () => {
        if (file) {
            playerRef.current.pause();
            setIsPlaying(false)
        }
    }

    useEffect(() => {
        if(file) {
            playerRef.current.load(file);
            playerRef.current.play();
            setIsPlaying(true)
        }
    }, [file])


    return <div>
        <Button onClick={handleClick} content={"Сыграть что-нибудь"} />
        <Button onClick={isPlaying ? handlePause: handlePlay} content={isPlaying ? "Pause" : "Play"} />
        <MediaPlayer type={file?.type} player={playerRef} />
    </div>
}
