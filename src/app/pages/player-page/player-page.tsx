import React, { useEffect } from "react";
import {MediaPlayer, MediaPlayerMode} from "app/components";
import { createPlayer } from "app/models/player-factory";
import { IPlayer } from "app/models";
import { Tabs } from "app/components/tabs";
import { tabItems } from "./constants";
import {getFiles} from "app/pages/player-page/helpers";

export const PlayerPage = () => {
    const [player, setPlayer] = React.useState<IPlayer>(null);
    const [tab, setTab] = React.useState<MediaPlayerMode>("Video");

    useEffect(() => {
        const files = getFiles(tab);
        const player = createPlayer(files, tab);
        setPlayer(player);
    }, [tab])

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
