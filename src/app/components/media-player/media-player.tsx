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
    const modalRef = React.useRef<HTMLDialogElement>(null);
    const [isOpen, setIsOpen] = React.useState(false);
    const store = useMediaPlayerStore();

    player.addStore(store);

    const handleStartPlay = React.useCallback(() => {
        modalRef.current.showModal();
        setIsOpen(true);
        player.play();
    }, [player])

    const handleClose = React.useCallback(() => {
        modalRef.current.close();
        setIsOpen(false);
        player.pause();
    }, [player]);

    return (
        <div>
            { !isOpen && (
                <div className="media-player__button-wrapper">
                    <StartButton onClick={handleStartPlay} poster={player.getCurrentPosterSrc()} />
                </div>
            )}
            <Modal ref={modalRef} onClose={handleClose} className={cn(store.state.isRolledUp && "media-player__rolled")}>
                <VideoPlayer player={player} store={store} />
            </Modal>
        </div>
    )
}
