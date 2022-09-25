
export type VideoType = "AVI" | "MPEG" | "MKV" | "WebM"
export type AudioType = "MP3"

export interface IFile<T extends string> {
    type: T;
    filename: string;
    getName(): string;
}

export interface IMediaFile<T extends VideoType | AudioType> extends IFile<T> {
    length: number;
}

export interface VideoFile<T extends VideoType> extends IMediaFile<T> {}
export interface AudioFile<T extends AudioType> extends IMediaFile<T> {}
