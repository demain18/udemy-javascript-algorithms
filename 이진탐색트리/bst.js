class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

// bst를 생성시켜 준다.
var tree = new BinarySearchTree();
// 아래와 같이 노드를 생성하면
tree.root = new Node(10);
tree.root = new Node(7);
tree.root.right = new Node(15);
tree.root.left.right = new Node(9);
/**
 *        10
 *   7         15
 *      9
 */
// 와 같은 이진 탐색 트리가 생성된다.
