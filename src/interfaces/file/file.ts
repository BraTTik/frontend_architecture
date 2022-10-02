
export type VideoType = "AVI" | "MPEG" | "MKV" | "WebM" | "MP4"
export type AudioType = "MP3"

export interface IFile {
    getName(): string;
}

export interface IMediaFile extends IFile {
    getPath(): string;
    getPoster(): string;
}

export interface VideoFile<T extends VideoType> extends IMediaFile {
    getType(): T;
}
export interface AudioFile<T extends AudioType> extends IMediaFile {
    getType(): T;
}
