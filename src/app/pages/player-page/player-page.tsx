import React from "react";
import { Button, MediaPlayer } from "app/components";
import { IPlayer } from "interfaces";
import { createRandomMediaFile } from "app/pages/player-page/player-page.helpers";
import { createPlayer } from "app/models/player-factory";

export const PlayerPage = () => {
    const playerContainerRef = React.useRef<HTMLDivElement>(null);
    const [player, setPlayer] = React.useState<IPlayer>(null)

    const handleClick = () => {
        const file = createRandomMediaFile(Math.random() > 0.5 ? "My favorite" : "The best track");
        const player = createPlayer(file, playerContainerRef.current);
        setPlayer(player);
    }

    return <div>
        <Button onClick={handleClick} content={"Сыграть что-нибудь"} />
        <MediaPlayer player={player} ref={playerContainerRef} autoplay />
    </div>
}
