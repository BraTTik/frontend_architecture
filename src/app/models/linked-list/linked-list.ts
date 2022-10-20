import { ILinkedItem, ILinkedList } from "./types";
import { LinkedItem } from "./linked-item";

export class LinkedList<T> implements ILinkedList<T> {
    private items: ILinkedItem<T>[] = [];
    private currentItem: ILinkedItem<T> = null;

    add(item: T): T {
        const last = this.getLastLink();
        const link = new LinkedItem(item);
        if (last) {
            link.setPrev(last);
            last.setNext(link);
        }
        if (!this.currentItem) this.currentItem = link;
        this.items.push(link);
        return item;
    }

    current(): T {
        this.areItemsAdded()
        return this.currentItem.getValue();
    }

    hasNext(): boolean {
        this.areItemsAdded()
        return Boolean(this.currentItem.next());
    }

    hasPrev(): boolean {
        this.areItemsAdded()
        return Boolean(this.currentItem.prev());
    }

    next(): T | null {
        if (this.hasNext()) {
            this.currentItem = this.currentItem.next();
            return this.currentItem.getValue();
        }
        return null;
    }

    prev(): T | null {
        if (this.hasPrev()) {
            this.currentItem = this.currentItem.prev();
            return this.currentItem.getValue();
        }
        return null;
    }

    private areItemsAdded = () => {
        if (!this.items.length) {
            throw new Error("No items has been added into the Linked list");
        }
        return true;
    }

    private getLastLink = () => {
        return this.items[this.items.length - 1] ?? null;
    }
}
