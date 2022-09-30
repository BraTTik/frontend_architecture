import React from "react";
import { Button, MediaPlayer, Modal } from "app/components";
import { IPlayer } from "interfaces";
import { createPlayer } from "app/models/player-factory";
import {MediaFile} from "app/models";

export const PlayerPage = () => {
    const playerContainerRef = React.useRef<HTMLVideoElement>(null);
    const [player, setPlayer] = React.useState<IPlayer>(null)
    const modalRef = React.useRef<HTMLDialogElement>(null)

    const handleClick = () => {
        const file = new MediaFile("MP4", "BigBuckBunny", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");
        const player = createPlayer(file, playerContainerRef.current);
        setPlayer(player);
        modalRef?.current.showModal();
    }

    return <div>
        <Button onClick={handleClick} content={"Сыграть что-нибудь"} />
        <Modal ref={modalRef}>
            <MediaPlayer player={player} ref={playerContainerRef} autoplay />
        </Modal>
    </div>
}
