import React, { useEffect } from "react";
import { MediaPlayer } from "app/components";
import { createPlayer } from "app/models/player-factory";
import { MediaFile, IPlayer } from "app/models";
import { Tabs } from "app/components/tabs";
import {tabItems} from "./constants";

const filePath = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const poster = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big.Buck.Bunny.-.Opening.Screen.png/640px-Big.Buck.Bunny.-.Opening.Screen.png";

export const PlayerPage = () => {
    const [player, setPlayer] = React.useState<IPlayer>(null);
    const [tab, setTab] = React.useState<string | number>("video");

    useEffect(() => {
        const file = new MediaFile("MP4", "BigBuckBunny", filePath, poster);
        const player = createPlayer(file);
        setPlayer(player);
    }, [])

    if (!player) return null;
    return (
        <>
            <Tabs selectedTab={tab} tabs={tabItems} onClick={setTab} />
            <MediaPlayer player={player} key={player.getId()} />
        </>
    )
}
