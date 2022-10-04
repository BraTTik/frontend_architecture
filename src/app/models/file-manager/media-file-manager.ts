import {FileManager} from "interfaces/file/file-manager";
import {IMediaFile} from "interfaces";

export class MediaFileManager implements FileManager<IMediaFile> {
    private files: IMediaFile[] = [];
    private activeFile = 0;

    addFile = (file: IMediaFile): this => {
        this.files.push(file);
        return this;
    }

    getActiveFile = (): number => {
        return this.activeFile;
    }

    getFiles (): IMediaFile[] {
        return Array.from(this.files);
    }

    getFile (index: number): IMediaFile {
        return this.files[index]
    }

    setActiveFile = (index: number): number => {
        if (index < 0 || index + 1 > this.files.length) {
            return this.activeFile;
        }
        this.activeFile = index;
        return this.activeFile;
    }

    setFiles(files: IMediaFile[]): this {
        this.files = files;
        return this;
    }
}
