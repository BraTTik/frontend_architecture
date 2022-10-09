import { ILinkedItem } from "interfaces/linked-list";


export class LinkedItem<T> implements ILinkedItem<T> {
    constructor(private value: T, private prevLink: ILinkedItem<T> = null, private nextLink: ILinkedItem<T> = null) {
        if (prevLink) {
            prevLink.linkNext(this);
        }
    }

    getValue(): T {
        return this.value;
    }

    linkNext(value: ILinkedItem<T>) {
        return this.nextLink = value;
    }

    linkPrev(value: ILinkedItem<T>) {
        return this.prevLink = value;
    }

    next(): ILinkedItem<T> | null {
        return this.nextLink;
    }

    prev(): ILinkedItem<T> | null {
        return this.prevLink;
    }
}
