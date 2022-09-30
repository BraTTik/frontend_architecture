import {AudioPlayer, VideoPlayer} from "../player";
import {AudioType, IMediaFile, IPlayer, VideoType} from "interfaces";

const isVideoType = (value: any): value is VideoType => {
    return value === "AVI" || value === "MKV" || value === "MPEG"  || value === "WebM"
}

const isAudioType = (value: any): value is AudioType => value === "MP3";

export const createPlayer = <T extends AudioType | VideoType>(file: IMediaFile<T>, container: HTMLMediaElement): IPlayer => {
    if (isVideoType(file.type)) {
        const player = new VideoPlayer(container);
        player.load(file as IMediaFile<VideoType>);
        return player;
    } else if (isAudioType(file.type)) {
        const player = new AudioPlayer(container);
        player.load(file as IMediaFile<AudioType>);
        return player;
    }
}
