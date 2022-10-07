import { FileManager } from "interfaces/file/file-manager";
import { IMediaFile } from "interfaces";

export class MediaFileManager implements FileManager<IMediaFile> {
    private files: IMediaFile[] = [];
    private activeFile = 0;

    hasNext(): boolean {
        return this.activeFile + 1 < this.files.length
    }

    hasPrev(): boolean {
        return this.activeFile - 1 >= 0;
    }

    next(): IMediaFile | undefined {
        if (this.hasNext()) {
            this.activeFile += 1;
            return this.files[this.activeFile];
        }
    }

    prev(): IMediaFile | undefined {
        if (this.hasPrev()) {
            this.activeFile -= 1;
            return this.files[this.activeFile];
        }
    }

    addFile = (file: IMediaFile): this => {
        this.files.push(file);
        return this;
    }

    getActiveFile = (): IMediaFile => {
        return this.files[this.activeFile];
    }

    getFiles (): IMediaFile[] {
        return Array.from(this.files);
    }

    getFile (index: number): IMediaFile | undefined {
        return this.files[index]
    }

    setActiveFile = (index: number): IMediaFile => {
        if (index < 0 || index + 1 > this.files.length) {
            return this.files[this.activeFile];
        }
        this.activeFile = index;
        return this.files[this.activeFile];
    }

    setFiles(files: IMediaFile[]): this {
        this.files = files;
        return this;
    }
}
