import { IMediaFile } from "./types";

export class MediaFile<T extends string> implements IMediaFile {
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
