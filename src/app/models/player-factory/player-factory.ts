import { IMediaFile } from "app/models/file";
import { IPlayer } from "app/models/player";
import { VideoPlayerController } from "app/models/player/video-player/video-player-controller";

export const createPlayer = (file: IMediaFile): IPlayer => {
    const player = new VideoPlayerController();
    player.load([file]);
    return player;
}
