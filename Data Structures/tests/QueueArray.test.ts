import { QueueArrayDynamic as Queue } from "../QueueArray";

describe('Single Linked List', () => {
    it('Should create an empty queue', () => {
        const q = new Queue();

        expect(q.length).toBe(0);
        expect(q.front).toBe(undefined);
    })
    it('Should add element in the queue', () => {
        const q = new Queue<number>();

        const value = 35;

        q.pushBack(value);
        expect(q.length).toBe(1);

        expect(q.front).toBe(value);


    })
    it('Should get an element from the list', () => {
        const q = new Queue<number>();

        const valueFirst = 35;
        const valueSecond = 38;

        q.pushBack(valueFirst);
        q.pushBack(valueSecond)
        expect(q.length).toBe(2);

        expect(q.front).toBe(valueFirst);

        expect(q.getByIndex(1)).toBe(valueSecond);
    })
    it('Should remove the first element from the list', () => {
        const q = new Queue<number>();

        const value = 35;

        q.pushBack(value);
        expect(q.length).toBe(1);

        expect(q.front).toBe(value);

        q.popBack();

        expect(q.length).toBe(0);
        expect(q.front).toBe(undefined);
    })
})