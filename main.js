import {LinkedList} from "./LinkedList.js";

const list = new LinkedList();

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

// list.prepend("kamil");

// console.log(list.toString());
// // console.log(list.size());
// // console.log(list.getHead());
// // console.log(list.tail());
// // console.log(list.at(10));
// list.pop();
// list.pop();
// console.log(list.toString());
// console.log(list.contains("kamil"));
// console.log(list.contains("snake"));
// console.log(list.findIndex("kamil"));
// console.log(list.findIndex("snake"));

list.append(1);
list.append(2);
list.append(3);
console.log(list.toString());
//list.insertAt(0, 10, 11);
//console.log(list.toString());
console.log(list.removeAt(3));
console.log(list.toString());