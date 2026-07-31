class Queue {
  constructor() {
    this.arr = [];
    this.size = 0;
  }

  enqueue(val) {
    this.size++;
    this.arr.push(val);
  }
  dequeue() {
    if (this.arr.length === 0) {
      console.log("Empty queue");
      return;
    }
    this.size--;
    this.arr.shift();
  }

  printQueue() {
    if (this.arr.length === 0) {
      console.log("Empty queue");
      return;
    }
    for (let i = 0; i < this.arr.length; i++) {
      process.stdout.write(this.arr[i] + " ");
    }
    console.log();
  }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.enqueue(60);
q.enqueue(70);

q.printQueue();

q.dequeue();
q.dequeue();

q.printQueue();
