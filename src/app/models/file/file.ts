import { IMediaFile } from "./types";

export class MediaFile<T extends string> implements IMediaFile {
    private readonly type: T;
    private readonly name: string;
    private readonly path: string;
    private readonly poster: string;

    constructor(props: { type: T, name: string, path: string, poster: string}) {
        this.type = props.type;
        this.name = props.name;
        this.path = props.path;
        this.poster = props.poster;
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
