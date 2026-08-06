class Stack {
  constructor() {
    this.arr = [];
  }
  push(val) {
    this.arr.push(val);
  }
  pop() {
    if (this.arr.length === 0) {
      console.log("Empty stack");
      return;
    }
    this.arr.pop();
  }
}

let st = new Stack();
st.push(10);
st.push(20);
st.push(30);
st.push(40);
console.log(st.arr);
st.pop();
console.log(st.arr);
