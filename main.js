'use strict';

function Node(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}

function DoublyLinkedList() {
  this.head =  null;
  this.tail = null;
  this._length = 0;
}

DoublyLinkedList.prototype.insert = function(data, index) {
  let current = this.head;
  let counter = 0;
  while (current) {
    if (counter === index) {
      const node = new Node(data);
      if (current === this.tail) {
        this.append(data);
      } else if (current === this.head) {
        this.prepend(data);
      } else {
        current.next.prev = node;
        node.prev = current;
        node.next = current.next;
        current.next = node;
        this.numberOfValues++;
      }
      return;
    }
    counter++;
    current = current.next;
  }
};

DoublyLinkedList.prototype.delete = function(index, count) {
  const deleter = (startPoint) => {
    let currentDel = startPoint;
    for (let counter = 0; counter < count; counter++) {
      currentDel.prev.next = currentDel.next;
      currentDel.next.prev = currentDel.prev;
      delete currentDel.prev;
      delete currentDel.data;
      currentDel = currentDel.next;
    }
  };
  let current = this.head;
  let counter = 0;
  while (true) {
    current = current.next;
    if (counter === index) {
      deleter(current);
      return;
    }
    counter++;
  }
};

DoublyLinkedList.prototype.remove = function(data) {
  let current = this.head;
  while (current) {
    if (current.data === data) {
      if (current === this.head && current === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (current === this.head) {
        this.head = this.head.next;
        this.head.prev = null;
      } else if (current === this.tail) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      this._length--;
      return;
    }
    current = current.next;
  }
};

DoublyLinkedList.prototype.append = function(data) {
  const node = new Node(data);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
  this._length++;
};

DoublyLinkedList.prototype.prepend = function(data) {
  const node = new Node(data);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    node.prev = null;
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }
  this._length++;
};

DoublyLinkedList.prototype.compare = function(list) {
  let current1 = this.head;
  let current2 = list.head;
  while (current1 || current2) {
    if (current1 !== current2) return false;
    current1 = current1.next;
    current2 = current2.next;
  }
  return true;
};

DoublyLinkedList.prototype.clone = function() {
  let current = this.head;
  const list = new DoublyLinkedList();
  while (current) {
    list.append(current.data);
    current = current.next;
  }
  return list;
};

DoublyLinkedList.prototype.print = function() {
  let string = '';
  let current = this.head;
  while (current) {
    string += current.data + ',';
    current = current.next;
  }
  console.log(string.trim());
};

module.exports = { DoublyLinkedList };
