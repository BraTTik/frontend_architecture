import React from "react";
import { Button, MediaPlayer } from "app/components";
import { ReactPlayer } from "interfaces";
import { createPlayer } from "app/models/player-factory";
import {MediaFile} from "app/models";

export const PlayerPage = () => {
    const [player, setPlayer] = React.useState<ReactPlayer>(null)

    const handleClick = () => {
        const file = new MediaFile("MP4", "BigBuckBunny", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big.Buck.Bunny.-.Opening.Screen.png/640px-Big.Buck.Bunny.-.Opening.Screen.png");
        const player = createPlayer(file);
        setPlayer(player);
    }
    return <div>
        <Button onClick={handleClick} content={"Сыграть что-нибудь"} />
        <MediaPlayer player={player} autoPlay />
    </div>
}
