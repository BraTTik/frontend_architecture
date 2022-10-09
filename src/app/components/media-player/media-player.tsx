import React from "react";
import { IPlayer } from "interfaces";
import cn from "classnames";
import { VideoPlayer } from "app/components/video-player";
import { Modal } from "app/components/modal";
import { useMediaPlayerStore } from "./use-media-player-store";
import { StartButton } from "./media-player.start-button";
import "./media-player.scss";

type MediaPlayerProps = {
    player: IPlayer;
}

export const MediaPlayer = (props: MediaPlayerProps) => {
    const { player } = props;
    const [isOpen, setIsOpen] = React.useState(false);
    const [isRolledUp, setIsRolledUp] = React.useState(false);
    const store = useMediaPlayerStore();

    player.addStore(store);

    const handleStartPlay = () => {
        setIsOpen(true);
        player.play();
    };

    const handleClose = () => {
        setIsOpen(false);
        player.pause();
    };

    const toggleRollup = () => setIsRolledUp(prev => !prev);

    return (
        <div>
            { !isOpen && (
                <div className="media-player__button-wrapper">
                    <StartButton onClick={handleStartPlay} poster={player.getCurrentPosterSrc()} />
                </div>
            )}
            <Modal onClose={handleClose} className={cn(isRolledUp && "media-player__rolled")} isOpen={isOpen}>
                <VideoPlayer player={player} state={store.state} isRolledUp={isRolledUp} toggleRollup={toggleRollup} />
            </Modal>
        </div>
    )
}
