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
    newNode.next = this.head
    this.head = newNode
    this.length++
  }
  printList() {
    let currentNode = this.head
    let listElements = []
    while (currentNode) {
      listElements.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(listElements)
  }
  insert(index, value) {
    if (this.length < index) {
      throw new Error("Given index is greater than the linked list length!")
    }
    if (index === this.length) {
      this.append(value)
      return
    }
    let newNode = new Node(value)
    let previousNode = this.getNodeAtIndex(index - 1)
    let nextNode = previousNode.next

    newNode.next = nextNode
    previousNode.next = newNode
    this.length++
  }
  getNodeAtIndex(index) {
    if (this.length < index) {
      throw new Error("Given index is greater than the linked list length!")
    }
    let currentNode = this.head
    let counter = 0
    while (counter < index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }
  remove(index) {
    if (this.length < index) {
      throw new Error("Given index is greater than the linked list length!")
    }
    let previousNode = this.getNodeAtIndex(index - 1)
    let unwantedNode = previousNode.next

    previousNode.next = unwantedNode.next
    this.length--
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.getNodeAtIndex(2)
myLinkedList.insert(1, 3)
myLinkedList.insert(1, 4)
myLinkedList.insert(1, 5)
myLinkedList.insert(4, 58)
myLinkedList.printList()
myLinkedList.remove(4)
myLinkedList.printList()