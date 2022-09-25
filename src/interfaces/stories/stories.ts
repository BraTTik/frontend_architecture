import { VideoFile } from "../file";
import { IVideoPlayer } from "interfaces/player";

export interface IStories {
    load(path: string): Promise<VideoFile<"WebM">>;
    player: IVideoPlayer<"WebM">;
}
