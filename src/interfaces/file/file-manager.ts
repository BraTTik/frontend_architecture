export interface FileManager<T> {
    getFiles(): T[];
    getActiveFile(): number;
    setFiles(files: T[]): this;
    addFile(file: T): this;
    setActiveFile(index: number): number;
}
