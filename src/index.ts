import { NumberGroup } from "./NumberGroup";
import { CharacterGroup } from "./CharacterGroup";
import { LinkedListGroup } from "./LinkedListGroup";
import { SortUtil } from "./SortUtil";

const numberGroup = new NumberGroup([2, 3, 4, -1231]);
const sorter1 = new SortUtil(numberGroup);
sorter1.sort();
console.log(numberGroup.data);
console.log("-------------------------");

const characterGroup = new CharacterGroup("Xaeyb");
const sorter2 = new SortUtil(characterGroup);
sorter2.sort();
console.log(characterGroup.data);
console.log("-------------------------");

const linkedListGroup = new LinkedListGroup();
linkedListGroup.add(520);
linkedListGroup.add(-10);
linkedListGroup.add(-7);
linkedListGroup.add(4000000);

linkedListGroup.compare(0, 1)
const sorter3 = new SortUtil(linkedListGroup);
console.log("at sorter3.sort")
sorter3.sort();
linkedListGroup.print();