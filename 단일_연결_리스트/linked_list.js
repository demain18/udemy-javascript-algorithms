class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    // 첫번째 노드로 current와 newTail을 초기화시켜 준다.
    var current = this.head;
    var newTail = current;

    // current.next가 undefined가 아니라면 반복문을 실행한다(리스트에 끝에 닿을때까지).
    while (current.next) {
      // newTail에 현재 위치한 노드를 바인딩한다.
      newTail = current;
      // current에 바로 다음 노드를 바인딩한다.
      current = current.next;
    }

    // newTail이후에 있는 current와의 연결을 끊어주고, tail에 바인딩해준다.
    this.tail = newTail;
    this.tail.next = null;
    // 배열의 전체 길이를 1만큼 줄인다.
    this.length--;

    // 만약 노드의 길이가 0이라면 head와 tail을 모두 비운다
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // 삭제된 노드를 반환한다.
    return current;
  }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");

console.log(list);
list.pop();
console.log(list);
list.pop();
console.log(list);
list.pop();
console.log(list);
