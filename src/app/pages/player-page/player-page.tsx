import React, { useEffect } from "react";
import {MediaPlayer, MediaPlayerMode} from "app/components";
import { createPlayer } from "app/models/player-factory";
import { MediaFile, IPlayer } from "app/models";
import { Tabs } from "app/components/tabs";
import { tabItems } from "./constants";

const filePath = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
const poster = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big.Buck.Bunny.-.Opening.Screen.png/640px-Big.Buck.Bunny.-.Opening.Screen.png";

export const PlayerPage = () => {
    const [player, setPlayer] = React.useState<IPlayer>(null);
    const [tab, setTab] = React.useState<MediaPlayerMode>(MediaPlayerMode.Video);

    useEffect(() => {
        const file = new MediaFile("MP4", "BigBuckBunny", filePath, poster);
        const player = createPlayer(file);
        setPlayer(player);
    }, [])

    const handleSelectTab = (id: string | number) => {
        setTab(id as MediaPlayerMode);
    }

    if (!player) return null;
    return (
        <>
            <Tabs selectedTab={tab} tabs={tabItems} onClick={handleSelectTab} />
            <MediaPlayer mode={tab} player={player} key={player.getId()} />
        </>
    )
}
