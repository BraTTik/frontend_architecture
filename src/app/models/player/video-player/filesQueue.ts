import {AudioType, IMediaFile, VideoType} from "../../../../interfaces";

/**
 * Реализует очередь файлов
 * const queue = new FilesQueue(files_list:IMediaFile[]);
 *
 * Получение текущего: queue.get();
 * Получение следуюешего: queue.next().get();
 * Получение предыдущего: queue.prev().get();
 */

export interface IFilesQueue<T extends AudioType | VideoType> {
    get():IMediaFile<T> | null;
    next():IFilesQueue<T>;
    prev():IFilesQueue<T>;
}

/**
 * Фейковая очередь файлов сейчас работает с массивом из одного файла.
 * При желании этот класс можно доработать :)
 */
export class FilesQueue<T extends AudioType | VideoType> implements IFilesQueue<T>{
    private current:IMediaFile<T> | null = null;
    constructor(private files:IMediaFile<T>[]) {
        this.current = files[0] || null;
    }

    get() {
        return this.current;
    }

    prev() {
        return this
    }

    next() {
        return this
    }
}
