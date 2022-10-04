import React from "react";
import { Button, MediaPlayer } from "app/components";
import {IMediaFile, IPlayer, VideoType} from "interfaces";
import {MediaFile, VideoPlayer} from "app/models";
import {FilesQueue} from "../../models/player/video-player/filesQueue";



export const PlayerPage = () => {
    const [player, setPlayer] = React.useState<IPlayer | null>(null)

    const handleClick = () => {
        const file:IMediaFile<VideoType> = new MediaFile("MP4", "BigBuckBunny", "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Big.Buck.Bunny.-.Opening.Screen.png/640px-Big.Buck.Bunny.-.Opening.Screen.png");
        const filesQueue = new FilesQueue<VideoType>([file]);
        const player = new VideoPlayer(filesQueue, { autoplay: true });
        setPlayer(player);
    }
    return <div>
        <Button onClick={handleClick} content={"Сыграть что-нибудь"} />
        { player ? <MediaPlayer player={player} key={player.getId()}/> : null }
    </div>
}
