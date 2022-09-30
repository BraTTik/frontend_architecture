
export type VideoType = "AVI" | "MPEG" | "MKV" | "WebM" | "MP4"
export type AudioType = "MP3"

export interface IFile<T extends string> {
    type: T;
    getName(): string;
}

export interface IMediaFile<T extends VideoType | AudioType> extends IFile<T> {
    getPath(): string;
}

export interface VideoFile<T extends VideoType> extends IMediaFile<T> {}
export interface AudioFile<T extends AudioType> extends IMediaFile<T> {}
