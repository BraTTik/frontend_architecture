import { LinkedList } from "./linked-list";

const data = Array(5).fill(0).map((_, index) => index);

describe("LinkedList", () => {
    let linkedList: LinkedList<number> = new LinkedList();

    afterEach(() => linkedList = new LinkedList());

    it("adds values to linked list", () => {
        data.forEach(value => expect(linkedList.add(value)).toBe(value));
    })

    it("goes through all items", () => {
        data.forEach(value => linkedList.add(value));

        expect(linkedList.current()).toBe(0);
        expect(linkedList.next()).toBe(1);
        expect(linkedList.next()).toBe(2);
        expect(linkedList.next()).toBe(3);
        expect(linkedList.next()).toBe(4);
        expect(linkedList.next()).toBe(null);
        expect(linkedList.current()).toBe(4);

        expect(linkedList.prev()).toBe(3);
        expect(linkedList.prev()).toBe(2);
        expect(linkedList.prev()).toBe(1);
        expect(linkedList.prev()).toBe(0);
        expect(linkedList.prev()).toBe(null);

        expect(linkedList.current()).toBe(0);
    })

    it ("throws an error if items not added any item", () => {

        expect(() => linkedList.current()).toThrow();
        expect(() => linkedList.prev()).toThrow();
        expect(() => linkedList.next()).toThrow();
    })
})
