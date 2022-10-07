import {AudioType, IMediaFile, VideoType, IPlayer} from "interfaces";
import { VideoPlayer } from "app/models/player/video-player/video-player";

export const createPlayer = <T extends AudioType | VideoType>(file: IMediaFile): IPlayer => {
    const player = new VideoPlayer();
    player.load(file);
    return player;
}
