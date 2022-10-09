export interface IFile {
    getName(): string;
}

export interface IMediaFile extends IFile {
    getPath(): string;
    getPoster(): string;
}
