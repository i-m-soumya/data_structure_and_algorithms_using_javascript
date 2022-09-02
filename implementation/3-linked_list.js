class Node {
  constructor(value) {
    this.value = value,
      this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    let newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
  prepend(value) {
    let newNode = new Node(value)
    newNode.next= this.head
    this.head = newNode
    this.length++
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList)