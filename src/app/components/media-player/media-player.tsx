import React from "react";
import { IPlayer } from "interfaces";
import cn from "classnames";
import { VideoPlayer } from "app/components/video-player";
import { Modal } from "app/components/modal";
import { StartButton } from "app/components/video-player/video-player.start-button";
import { useMediaPlayerStore } from "./use-media-player-store";
import "./media-player.scss";

type MediaPlayerProps = {
    player: IPlayer | null;
}

export const MediaPlayer = (props: MediaPlayerProps) => {
    const { player } = props;
    const modalRef = React.useRef<HTMLDialogElement>(null)
    const store = useMediaPlayerStore();

    player?.addStore(store);

    const handleStartPlay = React.useCallback(() => {
        modalRef.current.showModal();
    }, [])

    const handleClose = React.useCallback(() => {
        modalRef.current.close();
    }, []);

    if (!player) {
        return ;
    }

    // isRolled && "video-player__rolled"
    return (
        <div>
            <StartButton onClick={handleStartPlay} poster={player.getCurrentPosterSrc()} />
            <Modal ref={modalRef} onClose={handleClose} className={cn("video-player",)}>
                <VideoPlayer player={player} store={store} />
            </Modal>
        </div>
    )
}
