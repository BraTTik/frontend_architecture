import { AudioType, IMediaFile, VideoType } from "./types";

export class MediaFile<T extends AudioType | VideoType> implements IMediaFile {
    constructor(private type: T, private name: string, private path: string, private poster: string) {
    }

    getName(): string {
        return `${this.name}.${this.type}`;
    }

    getPath(): string {
        return this.path;
    }

    getPoster(): string {
        return this.poster;
    }

    toString(): string {
        return this.getName();
    }
}
