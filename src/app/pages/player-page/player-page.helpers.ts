import {AudioType, IMediaFile, VideoType} from "interfaces";
import {MediaFile} from "app/models";

export const createRandomMediaFile = (name: string): IMediaFile<VideoType | AudioType> => {
    const type: IMediaFile<VideoType | AudioType>["type"] = Math.random() > 0.5 ? "MP3" : "WebM";
    const length: number = Math.random() > 0.5 ? 10 : 5;

    return new MediaFile(type, name, length);
}
