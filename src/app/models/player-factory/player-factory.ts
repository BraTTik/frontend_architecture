import {IMediaFile} from "app/models/file";
import {IPlayer} from "app/models/player";
import {VideoPlayerController} from "app/models/player/video-player/video-player-controller";
import {MediaPlayerMode} from "app/components";
import {StoriesPlayerController} from "app/models/player/stories-player";

export const createPlayer = (files: IMediaFile[], mode: MediaPlayerMode): IPlayer => {
    switch (mode) {
        case "Video": {
            return new VideoPlayerController().load(files);
        }
        case "Stories": {
            return new StoriesPlayerController().load(files)
        }
    }
}
