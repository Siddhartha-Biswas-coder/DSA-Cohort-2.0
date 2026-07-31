class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  dequeue(val) {
    if (this.head === null) {
      console.log("Empty queue..");
      return;
    }
    this.head = this.head.next;
  }

  printQueue() {
    if (this.head === null) {
      console.log("Empty queue...");
      return;
    }

    let temp = this.head;
    while (temp !== null) {
      process.stdout.write(temp.data + " ");
      temp = temp.next;
    }
    console.log();
  }
}

let q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.enqueue(60)
q.enqueue(70)

q.printQueue()

q.dequeue()
q.dequeue()

q.printQueue()

