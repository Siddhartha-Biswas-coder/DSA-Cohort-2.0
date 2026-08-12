let prompt = require("prompt-sync")();

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  buildTree() {
    let data = Number(prompt("Enter a number: "));
    if (data == -1) {
      return null;
    }
    let root = new Node(data);

    console.log("Enter left child for " + data);

    root.left = this.buildTree();

    console.log("Enter right child for " + data);

    root.right = this.buildTree();

    return root;
  }

  printTree(root) {
    if (root == null) return;
    process.stdout.write(root.data + " ");
    this.printTree(root.left);
    this.printTree(root.right);
  }
}

let obj = new Tree();

obj.root = obj.buildTree();
obj.printTree(obj.root);
