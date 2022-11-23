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

  shift() {
    if (!this.head) return undefined;

    // currentHead에 this.head를 바인딩해준다.
    var currentHead = this.head;

    // this.head를 currentHead의 다음 노드로 초기화시킨다.
    this.head = currentHead.next;
    // this.length값을 1 감소시킨다.
    this.length--;

    // 만약 노드의 길이가 0이라면 head와 tail을 모두 비운다
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    // 삭제된 노드를 반환한다.
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);

    // 만약 연결 리스트가 비어있다면
    if (!this.head) {
      // head와 tail을 newNode로 초기화시킨다.
      this.head = newNode;
      this.tail = this.head;
    }
    // 만약 연결 리스트에 하나 이상의 노드가 있다면
    else {
      // 수동으로 head를 변경해준다.
      newNode.next = this.head;
      this.head = newNode;
    }

    // newNode의 다음 노드를 this.head로 초기화시킨다.
    newNode.next = this.head;
    // head를 newNode로 초기화시킨다.
    this.head = newNode;
    // length를 1 증가시킨다.
    this.length++;

    // 연결 리스트를 반환한다.
    return this;
  }

  get(index) {
    // index값이 음수이거나 length보다 크다면 null을 반환한다.
    if (index < 0 || index >= this.length) return null;

    // counter, current(node)를 선언해준다.
    var counter = 0;
    var current = this.head;

    // index값에 node가 위치할때까지 다음 노드로 넘어간다.
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    // 찾은 노드를 반환한다.
    return current;
  }
}

var list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");
list.push("!");
list.push("<3");
list.push(":");
console.log(list.get(2));
