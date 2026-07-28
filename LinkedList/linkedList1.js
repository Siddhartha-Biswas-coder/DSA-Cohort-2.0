class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertAtFirst(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }

    this.size++;
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtLast(val) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    this.size++;

    temp.next = newNode;
  }

  deleteAtFirst() {
    if (this.head === null) {
      console.log("Empty Linked List");
      return;
    }
    this.size--;
    let deleteNode = this.head;
    this.head = deleteNode.next;
    deleteNode.next = null;
  }

  deleteAtValue(val) {
    if (this.head === null) {
      console.log("Empty Linked List");
      return;
    }

    if (this.head.data === val) {
      this.deleteAtFirst();
      return;
    }

    let temp = this.head;

    while (temp.next !== null && temp.next.data !== val) {
      temp = temp.next;
    }

    if (temp.next === null) {
      console.log("Value not found");
      return;
    }

    this.size--;

    let deleteNode = temp.next;
    temp.next = deleteNode.next;
    deleteNode.next = null;
  }

  printLL() {
    if (this.head == null) {
      console.log("empty Linked List");
      return;
    }
    let temp = this.head;
    while (temp != null) {
      process.stdout.write(temp.data + " ");
      temp = temp.next;
    }
    console.log("null");
  }
}

let obj = new LL();
obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);
obj.insertAtFirst(40);
obj.insertAtFirst(50);
obj.insertAtLast(0);
obj.insertAtLast(-10);
obj.insertAtLast(-20);
obj.insertAtLast(-30);
obj.insertAtLast(-40);
obj.insertAtLast(-50);
obj.printLL();
obj.deleteAtValue(-10);
obj.printLL();
obj.deleteAtFirst();
obj.printLL();
