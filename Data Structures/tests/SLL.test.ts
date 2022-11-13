import { SingleLinkedList, SLLNode } from "../SLList"

describe('Single Linked List', () => {
    it('Should create an empty linked list', () => {
        const list = new SingleLinkedList();

        expect(list.head).toBe(null);
        expect(list.length).toBe(0);
    })
    it('Should add element in the list', () => {
        const list = new SingleLinkedList<number>();

        const position = 0;
        const value = 3;

        list.addElement(value, position);

        expect(list.head).not.toBe(null);
        expect(list.head?.value).toBe(value);
        expect(list.length).toBe(1);
    })
    it('Should get an element from the list', () => {
        const list = new SingleLinkedList<number>();

        const position = 0;
        const value = 3;

        list.addElement(value, position);

        expect(list.head).not.toBe(null);

        const firstElement = list.getByIndex(0);

        expect(firstElement).not.toBe(null);

        if (!firstElement) throw new Error('Typescript');

        expect(list.head).toMatchObject<SLLNode<number>>(firstElement);

    })
    it('Should add element at the end of the list', () => {
        const list = new SingleLinkedList<number>();

        const position = 0;
        const value = 3;

        list.addElement(value, position);

        const lastElementValue = 5;
        list.addElementLast(lastElementValue);

        const lastElement = list.getByIndex(list.length - 1);

        expect(lastElement?.next).toBe(null);
        expect(lastElement?.value).toBe(lastElementValue);
    })
    it('Should remove the first element from the list', () => {
        const list = new SingleLinkedList<number>();

        const position = 0;
        const value = 3;

        list.addElement(value, position);

        const lastElementValue = 5;
        list.addElementLast(lastElementValue);

        const lengthBeforeDeletion = list.length;

        list.removeFirst();

        expect(list.length).toBe(lengthBeforeDeletion - 1);
        expect(list.head?.value).toBe(lastElementValue);
    })
    it('Should remove the desired element from the list', () => {
        const list = new SingleLinkedList<number>();

        const position = 0;
        const value = 3;

        list.addElement(value, position);

        const lastElementValue = 5;
        list.addElementLast(lastElementValue);

        const lengthBeforeDeletion = list.length;
        const indexOfTheElementToBeRemoved = 1;

        list.removeElement(indexOfTheElementToBeRemoved);

        expect(list.length).toBe(lengthBeforeDeletion - 1);
    })
    it('Should update element in the list', () => {
        const list = new SingleLinkedList<number>();

        const position = 0;
        const value = 3;

        list.addElement(value, position);

        const newValue = 5;
        list.updateElement(newValue, 0);

        const lastElement = list.getByIndex(list.length - 1);

        expect(lastElement?.next).toBe(null);
        expect(lastElement?.value).toBe(newValue);
    })
    it('Should check if there is node with the desired value in the list', () => {
        const list = new SingleLinkedList<number>();

        const position = 0;
        const value = 3;

        list.addElement(value, position);

        const notAddedValue = 5;

        expect(list.containsElement(value)).toBe(true);
        expect(list.containsElement(notAddedValue)).toBe(false);
    })
})