class minHeap {
  constructor() {
    this.heap = [];
  }
  insertion(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] > this.heap[i]) {
        swap(this.heap, parent, i);
        i = parent;
      } else return;
    }
  }

  deletion() {
    if (this.heap.length === 0) return;

    // Move last element to root
    this.heap[0] = this.heap[this.heap.length - 1];

    // Remove last element
    this.heap.pop();

    let i = 0;

    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      // No children
      if (left >= this.heap.length) {
        break;
      }

      // Assume left child is smaller
      let small = left;

      // If right exists and is smaller
      if (right < this.heap.length && this.heap[right] < this.heap[left]) {
        small = right;
      }

      // Current node already smaller
      if (this.heap[i] <= this.heap[small]) {
        break;
      }

      swap(this.heap, i, small);

      i = small;
    }
  }

  heapify(arr, i, size) {
    let small = i,
      left = 2 * i + 1,
      right = 2 * i + 2;
    if (left < size && arr[small] > arr[left]) {
      small = left;
    }
    if (right < size && arr[small] > arr[right]) {
      small = right;
    }
    if (small != i) {
      swap(arr, i, small);
      this.heapify(arr, small, size);
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

let obj = new minHeap();
// obj.insertion(50);
// obj.insertion(10);
// obj.insertion(400);
// obj.insertion(50);
// obj.insertion(15);
// obj.insertion(30);

// console.log(obj.heap);

// obj.deletion();

// console.log(obj.heap);

// obj.deletion();

// console.log(obj.heap);

let arr = [60, 15, 18, 45, 22, 9];
let size = arr.length;
for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
  obj.heapify(arr, i, size);
}

for (let i = size - 1; i >= 0; i--) {
  swap(arr, 0, i);
  obj.heapify(arr, 0, i);
}

console.log(arr);
