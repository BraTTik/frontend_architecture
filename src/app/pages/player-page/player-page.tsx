import React from "react";
import { Button, MediaPlayer, Modal } from "app/components";
import { ReactPlayer } from "interfaces";
import { createPlayer } from "app/models/player-factory";
import {MediaFile} from "app/models";

export const PlayerPage = () => {
    const [player, setPlayer] = React.useState<ReactPlayer>(null)
    const modalRef = React.useRef<HTMLDialogElement>(null)

    const handleClick = () => {
        const file = new MediaFile("MP4", "BigBuckBunny", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
        const player = createPlayer(file);
        setPlayer(player);
        modalRef?.current.showModal();
    }

    const onModalClose = () => {
        player?.destroy();
    }

    return <div>
        <Button onClick={handleClick} content={"Сыграть что-нибудь"} />
        <Modal ref={modalRef} onClose={onModalClose}>
            <MediaPlayer player={player} autoplay />
        </Modal>
    </div>
}
