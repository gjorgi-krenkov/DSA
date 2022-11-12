import { CheckIndexOutOfBounds } from "./utils/ErrorChecks";

class N<T> {
    value: T;
    next: N<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}
export class SingleLinkedList<T> {
    head: N<T> | null;
    length: number;
    constructor() {
        this.head = null;
        this.length = 0;
    }
    addElementLast(value: T): void {
        if (!this.head) {
            this.head = new N(value);
            this.length = 1;
            return;
        }
        let iterator = this.head;

        while (iterator.next !== null) {
            iterator = iterator.next;
        }

        iterator.next = new N(value);
        this.length += 1;
    }
    addElementFirst(value: T): void {
        const newNode = new N(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length += 1;
    }
    addElement(value: T, index: number): void {
        if (index === 0) return this.addElementFirst(value);
        if (index === this.length) return this.addElementLast(value);
        CheckIndexOutOfBounds(index, this.length);

        let insertAfter = this.getByIndex(index);
        const newNode = new N(value);

        if (!insertAfter) return; //Badum_TSSSSSScript

        newNode.next = insertAfter.next;
        insertAfter.next = newNode;

        this.length += 1;
    }
    getByIndex(index: number): N<T> | null {
        CheckIndexOutOfBounds(index, this.length);

        let current = this.head;

        while (index--) {
            if (current)
                current = current.next;
        }

        return current;
    }
    removeFirst(): void {
        if (this.head) {
            this.head = this.head.next;
            this.length -= 1;
            return;
        }
        throw new Error('Nothing to remove :(');
    }
    updateElement(value: T, index: number): void {
        const updateElement = this.getByIndex(index);

        if (updateElement) updateElement.value = value;
    }
    containsElement(value: T): boolean {
        let iterator = this.head;

        while (iterator) {
            if (iterator.value === value) return true;
            iterator = iterator.next;
        }

        return false;
    }

}
