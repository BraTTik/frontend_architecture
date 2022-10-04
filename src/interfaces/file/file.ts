
export type VideoType = "AVI" | "MPEG" | "MKV" | "WebM" | "MP4"
export type AudioType = "MP3"

export interface IFile {
    getName(): string;
}

export interface IMediaFile<T extends AudioType | VideoType>  extends IFile {
    getPath(): string;
    getPoster(): string;
}

export interface VideoFile<T extends VideoType> extends IMediaFile<VideoType> {
    getType(): T;
}
export interface AudioFile<T extends AudioType> extends IMediaFile<AudioType> {
    getType(): T;
}
