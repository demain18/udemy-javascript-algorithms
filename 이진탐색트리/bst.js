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

  insert(value) {
    // newNode를 생성시켜준다.
    var newNode = new Node(value);

    // 만약 this.root가 비어있다면
    if (this.root === null) {
      // this.root를 newNode로 초기화시킨다.
      this.root = newNode;
      // this를 반환한다.
      return this;
    }
    // 만약 아니라면
    else {
      // current를 생성하여 포인터로 사용한다.
      var current = this.root;

      // 루프를 실행한다.
      while (true) {
        // 만약 value가 current.value와 동일하다면 undeinfed를 반환한다.
        if (value === current.value) return undefined;

        // 만약 value가 current.value보다 작다면
        if (value < current.value) {
          // 만약 current.left가 비어있다면
          if (current.left === null) {
            // newNode로 초기화시킨다.
            current.left = newNode;
            // this를 반환한다.
            return this;
          }
          // 만약 아니라면
          else {
            // 포인터를 이동시킨다.
            current = current.left;
          }
        }
        // 만약 value가 current.value보다 크다면
        else if (value > current.value) {
          // 만약 current.right가 비어있다면
          if (current.right === null) {
            // newNode로 초기화시킨다.
            current.right = newNode;
            // this를 반환한다.
            return this;
          }
          // 만약 아니라면
          else {
            // 포인터를 이동시킨다.
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    // 만약 this.root가 비어있다면 false를 반환한다.
    if (this.root === null) return false;

    // current, found를 선언해준다.
    var current = this.root;
    var found = false;

    // current가 존재하고, found가 false라면 반복문을 실행한다.
    while (current && !found) {
      // 만약 value가 current.value보다 작다면
      if (value < current.value) {
        // current를 current.left로 초기화시킨다.
        current = current.left;
      }
      // 만약 value가 current.value보다 크다면
      else if (value > current.value) {
        // current를 current.right로 초기화시킨다.
        current = current.right;
      }
      // 둘다 아닐경우
      else {
        // found를 true로 변경한다.
        found = true;
      }
    }

    // 만약 found가 거짓이라면 false를 반환하고, 참이라면 true를 반환한다.
    return !found ? false : true;
  }
}

var tree = new BinarySearchTree();
tree.insert(5);
tree.insert(7);
tree.insert(12);
tree.insert(4);
console.log(tree.find(12));
console.log(tree.find(15));
