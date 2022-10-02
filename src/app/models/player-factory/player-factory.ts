import {AudioType, IMediaFile, VideoType, ReactPlayer} from "interfaces";
import {VideoPlayer} from "app/models/player/video-player/video-player";

const isVideoType = (value: any): value is VideoType => {
    return value === "AVI" || value === "MKV" || value === "MPEG"  || value === "WebM" || value === "MP4"
}

const isAudioType = (value: any): value is AudioType => value === "MP3";

export const createPlayer = <T extends AudioType | VideoType>(file: IMediaFile): ReactPlayer => {
    const player =  new VideoPlayer();
    player.load(file);
    return player;
}
