import {AudioPlayer, VideoPlayer} from "../player";
import {AudioType, IPlayer, VideoType} from "interfaces";

const isVideoType = (value: any): value is VideoType => {
    return value === "AVI" || value === "MKV" || value === "MPEG"  || value === "WebM"
}

const isAudioType = (value: any): value is AudioType => value === "MP3";

export const createPlayer = <T extends AudioType | VideoType>(type: T, container: HTMLElement): IPlayer<T> => {
    if (isVideoType(type)) {
        return new VideoPlayer(container);
    } else if (isAudioType(type)) {
        return new AudioPlayer(container);
    }
}
