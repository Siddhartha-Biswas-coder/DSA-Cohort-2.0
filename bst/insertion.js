class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insertNode(root, val) {
    if (root == null) {
      root = new TreeNode(val);
      return root;
    }
    if (root.val < val) {
      root.right = this.insertNode(root.right, val);
    } else if (root.val > val) {
      root.left = this.insertNode(root.left, val);
    }
    return root;
  }
  printTree(root) {
    if (root == null) return;
    this.printTree(root.left);
    process.stdout.write(root.val + " ");
    this.printTree(root.right);
  }
}

let nodes = [43, 32, 85, 34, 89, 71, 45];
let bst = new BST();
for (let node of nodes) {
  bst.root = bst.insertNode(bst.root, node);
}

bst.printTree(bst.root);
