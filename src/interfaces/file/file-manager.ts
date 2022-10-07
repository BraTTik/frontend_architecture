export interface FileManager<T> {
    getFiles(): T[];
    getActiveFile(): T;
    setFiles(files: T[]): this;
    addFile(file: T): this;
    setActiveFile(index: number): T;
    next(): T | undefined;
    prev(): T | undefined;
    hasNext(): boolean;
    hasPrev(): boolean;
}
