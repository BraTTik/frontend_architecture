import { ILinkedItem } from "./types";

export class LinkedItem<T> implements ILinkedItem<T> {
    public prevLink: ILinkedItem<T>;
    public nextLink: ILinkedItem<T>;

    constructor(private value: T) {
    }

    getValue(): T {
        return this.value;
    }

    setNext(value: ILinkedItem<T>) {
        return this.nextLink = value;
    }

    setPrev(value: ILinkedItem<T>) {
        return this.prevLink = value;
    }

    next(): ILinkedItem<T> | null {
        return this.nextLink;
    }

    prev(): ILinkedItem<T> | null {
        return this.prevLink;
    }
}
