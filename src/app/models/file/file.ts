import { AudioType, IMediaFile, VideoType } from "interfaces";

export class MediaFile<T extends AudioType | VideoType> implements IMediaFile<T> {
    constructor(public type: T, public filename: string, public length: number) {
    }

    getName(): string {
        return `${this.filename}.${this.type}`;
    }

    toString(): string {
        return this.getName();
    }
}
