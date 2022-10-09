

export interface ILinkedList<T> {
    add(item: T): T;
    current(): T;
    next(): T | null;
    prev(): T | null;
    hasNext(): boolean;
    hasPrev(): boolean;
}
