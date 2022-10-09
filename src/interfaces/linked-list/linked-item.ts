export interface ILinkedItem<T> {
    prev(): ILinkedItem<T> | null;
    next(): ILinkedItem<T> | null;
    linkNext(link: ILinkedItem<T> | null): void;
    linkPrev(link: ILinkedItem<T> | null): void;
    getValue(): T;
}
