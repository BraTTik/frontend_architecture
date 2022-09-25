import { AudioType, IFile, VideoType } from "interfaces";

export class File<T extends AudioType | VideoType> implements IFile<T> {
    constructor(public type: T, public filename: string) {
    }

    getName(): string {
        return `${this.filename}.${this.type}`;
    }

    toString(): string {
        return this.getName();
    }
}
