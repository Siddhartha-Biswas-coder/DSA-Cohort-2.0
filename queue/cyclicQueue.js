class Queue {
  constructor(size) {
    this.size = size;
    this.arr = new Array(this.size);
    this.front = -1;
    this.rear = -1;
  }

  enqueue(val) {
    if ((this.rear + 1) % this.size == this.front) {
      console.log("Full queue");
      return;
    }
    if (this.front === -1) this.front = 0;
    this.rear = (this.rear + 1) % this.size;
    this.arr[this.rear] = val;
  }
  dequeue() {
    if (this.front === -1) {
      console.log("Empty queue");
      return;
    }
    let deletedElement = this.arr[this.front];
    if (this.front === this.rear) this.front = this.rear = -1;
    else {
      this.front = this.front + 1;
    }
    return deletedElement;
  }
  printQueue() {
    if (this.front === -1) {
      console.log("Empty queue");
      return;
    }
    let i = this.front;
    while (true) {
      process.stdout.write(this.arr[i] + " ");
      if (i == this.rear) break;
      i = (i + 1) % this.size;
    }
    console.log();
  }
}

let q = new Queue(5);
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.printQueue();
q.dequeue();
q.printQueue();
q.enqueue(60);
q.printQueue();
