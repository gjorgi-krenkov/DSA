import { CheckIndexOutOfBounds } from "./utils/ErrorChecks";

export class UnionFind<T> {
  parent: number[]; // indexes

  constructor(length: number) {  // TODO: handle space allocation logic
    this.parent = [];

    for(let i = 0; i <length; i++)
      this.parent[i] = i;
  }

  find(index: number) // find the representative node of the union
  {
    if(this.parent[index]===index) return index;

    return this.find(this.parent[index]);
  }
  union(newDirectFather: number, son: number)
  {
    this.parent[this.find(son)] = this.find(newDirectFather); // sounds like divorce, where the root correlates to grand-grand-parents xD
  }
}
