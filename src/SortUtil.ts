import { ISortable } from "./ISortable";

export class SortUtil {
  collection: ISortable;

  constructor(collection: ISortable) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;
    let isSorted = false;
    let lastUnsorted = length - 1;
    console.log(length)
    while (!isSorted) {
      isSorted = true;
      console.log("i'm here!")
      for (let i = 0; i < lastUnsorted; i++) {
        if (this.collection.compare(i, i + 1)) {
          console.log("swapping")
          this.collection.swap(i, i + 1);
          isSorted = false;
        }
      }
    }
    lastUnsorted--;
  }
}