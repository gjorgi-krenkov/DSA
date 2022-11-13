import { CheckIndexOutOfBounds } from "./utils/ErrorChecks";

class N<T> {
    value: T;
    next: N<T> | null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export type SLLNode<T> = {
    value: T;
    next: SLLNode<T> | null;
};

//Definitely not for production use xD
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

    getByIndex(index: number): N<T> | null | undefined {
        CheckIndexOutOfBounds(index, this.length);

        let current = this.head;

        while (index--) {
            if (current)
                current = current.next;
        }

        return current;
    }

    removeFirst(): N<T> | undefined {
        if (this.head) {
            const data = this.head;
            this.head = this.head.next;
            this.length -= 1;
            return data;
        }
        throw new Error('Nothing to remove :(');
    }

    removeElement(index: number): N<T> | undefined {
        if (index === 0) return this.removeFirst();
        CheckIndexOutOfBounds(index, this.length);

        const previousElement = this.getByIndex(index - 1);


        if (!previousElement?.next) throw new Error('Links are crushed!');

        const elementToRemove = previousElement.next;

        previousElement.next = elementToRemove.next;

        this.length -= 1;

        return elementToRemove;
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

    print(): void {
        let iterator = this.head;

        if (!iterator) return;

        console.table(iterator.value);

        while (iterator.next) {
            iterator = iterator.next;
            console.log(" -> ")
            console.table(iterator.value);
        }
    }

}
