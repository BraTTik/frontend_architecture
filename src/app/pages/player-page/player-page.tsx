import React, { useEffect } from "react";
import { MediaPlayer } from "app/components";
import { IPlayer } from "interfaces";
import { createPlayer } from "app/models/player-factory";
import {MediaFile} from "app/models";

const filePath = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const poster = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big.Buck.Bunny.-.Opening.Screen.png/640px-Big.Buck.Bunny.-.Opening.Screen.png";

export const PlayerPage = () => {
    const [player, setPlayer] = React.useState<IPlayer>(null)

    useEffect(() => {
        const file = new MediaFile("MP4", "BigBuckBunny", filePath, poster);
        const player = createPlayer(file);
        setPlayer(player);
    }, [])

    if (!player) return null;
    return <MediaPlayer player={player} />
}
