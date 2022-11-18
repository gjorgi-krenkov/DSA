import { CheckIndexOutOfBounds } from "./utils/ErrorChecks";


//Definitely not for production use xD
export class DequeueArrayDynamic<T> {
  container: T[];
  length: number;
  popCount: number; // popCount back in this case
  front: T | undefined;
  back: T | undefined;

  constructor() {  // TODO: handle space allocation logic
    this.container = [];
    this.length = 0;
    this.popCount = 0;
    this.front = this.frontF();
  }

  pushBack(value: T): void {
    this.container.push(value);
    this.length += 1;
    this.front = this.frontF();
    this.back = this.backF();
  }

  popBack(): void {
    this.length -= 1;

    this.front = this.frontF();
    this.back = this.backF();
  }

  pushFront(value: T): void {
    this.container.splice(this.popCount,0,value);
    this.popCount -= 1;

    this.front = this.frontF();
    this.back = this.backF();
  }

  popFront(): void {
    this.popCount += 1;
    this.length -= 1;

    this.front = this.frontF();
    this.back = this.backF();
  }


  frontF(): T | undefined {
    return this.container[this.popCount];
  }
  backF(): T | undefined {
    return this.container[this.length-1];
  }

  getByIndex(index: number): T | undefined {
    CheckIndexOutOfBounds(index, this.length);

    return this.container[index];
  }
}
