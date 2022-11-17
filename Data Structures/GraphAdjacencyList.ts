import { SingleLinkedList } from "./SLList";
import { CheckIndexOutOfBounds } from "./utils/ErrorChecks";


//Definitely not for production use xD
export class GraphAdjacencyList {
  list: SingleLinkedList<number>[];
  isUndirected: boolean;
  length: number;

  constructor(length: number, isUndirected: boolean = true) {
    this.list = new SingleLinkedList<number>()[length];
    this.length = length;
    this.isUndirected = isUndirected;
  }
  initVertex = (index: number) => { // Let's consider that the indexing implementation is done by someone else above and will match 0 - N
    this.list[index] = new SingleLinkedList();
  }
  addEdge(sourceIndex: number, destinationIndex: number) {
    this.list[sourceIndex].addElementLast(destinationIndex);
    if (this.isUndirected)
      this.list[destinationIndex].addElementLast(sourceIndex);
  }
  hasEdge(sourceIndex: number, destinationIndex: number) {
    return this.list[sourceIndex].containsElement(destinationIndex);
  }
}
