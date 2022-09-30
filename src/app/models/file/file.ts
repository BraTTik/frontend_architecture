import { AudioType, IMediaFile, VideoType } from "interfaces";

export class MediaFile<T extends AudioType | VideoType> implements IMediaFile<T> {
    constructor(public type: T, private name: string, private path: string) {
    }

    getName(): string {
        return `${this.name}.${this.type}`;
    }

    getPath(): string {
        return this.path;
    }

    toString(): string {
        return this.getName();
    }
}
