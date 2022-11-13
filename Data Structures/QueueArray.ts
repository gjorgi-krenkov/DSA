import { CheckIndexOutOfBounds } from "./utils/ErrorChecks";


//Definitely not for production use xD
export class QueueArrayDynamic<T> {
    container: T[];
    length: number;
    popCount: number;

    constructor() {  // TODO: handle space allocation logic
        this.container = [];
        this.length = 0;
        this.popCount = 0;
    }

    pushBack(value: T): void {
        this.container.push(value);
        this.length += 1;
    }

    popBack(): void {
        this.popCount += 1;
        this.length -= 1;
    }

    front(): T | undefined {
        return this.container[this.popCount];
    }

    getByIndex(index: number): T | undefined {
        CheckIndexOutOfBounds(index, this.length);

        return this.container[index];
    }
}
