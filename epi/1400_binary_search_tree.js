class BSTNode {
  constructor(val, parent=null, left=null, right=null) {
    this.value = val;
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.depth = parent.depth + 1 || 0;
  }
}

class BinarySearchTree {
  constructor(root) {
    this.root = root;
  }

  add(addNode) {
    let currentNode = this.root;
    if (addNode.value >= currentNode) {
      currentNode = currentNode.right;
    }
  }

  remove(val) {

  }


}
