const main = require(__dirname + '/main');

const list = new main.DoublyLinkedList();
const list2 = new main.DoublyLinkedList();
let list3 = new main.DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
//list.append({ name: 'second' });
list.prepend(4);
list.prepend(5);
//console.log(list3);
//list.print();
list.delete(1, 2);
//list.remove(1);
//list.insert(5, 0);
list2.append(1);
//list.append({ name: 'second' });
list2.prepend(2);
list.compare(list2);
list3 = list.clone();
//console.log(list3);
list.print(); // => ''S
list3.print();
