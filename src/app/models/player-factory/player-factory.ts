import {AudioType, IMediaFile, VideoType, IPlayer} from "interfaces";
import { VideoPlayerController } from "app/models/player/video-player/video-player-controller";

export const createPlayer = <T extends AudioType | VideoType>(file: IMediaFile): IPlayer => {
    const player = new VideoPlayerController();
    player.load([file]);
    return player;
}
