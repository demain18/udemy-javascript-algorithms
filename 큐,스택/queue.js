class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 큐 삽입하기
  enqueue(val) {
    // 새로운 노드를 생성한다.
    var newNode = new Node(val);

    // 만약 큐가 비어있다면
    if (!this.first) {
      // this.first, this.last를 newNode로 초기화시킨다.
      this.first = newNode;
      this.last = newNode;
    }
    // 만약 아니라면
    else {
      // this.last.next, this.last를 newNode로 초기화시켜서 push를 구현한다.
      this.last.next = newNode;
      this.last = newNode;
    }

    // this.size에서 1을 증가한 값을 반환한다.
    return this.size++;
  }

  // 큐 삭제하기
  dequeue() {
    // 큐가 비어있다면 null을 반환한다.
    if (!this.first) return null;

    // this.first와 this.last가 동일하다면(큐의 길이가 1임을 뜻함) this.last를 null로 초기화시킨다.
    if (this.first === this.last) this.last = null;

    // temp에 this.first를 임시로 저장해놓는다.
    var temp = this.first;
    // this.first를 this.first.next로 초기화시켜서 shift를 구현한다.
    this.first = this.first.next;
    // this.size값을 1 감소시킨다.
    this.size--;

    // 임시로 저장해둔 temp의 value를 반환한다.
    return temp.value;
  }
}

var q = new Queue();

q.enqueue("FIRST");
q.enqueue("SECOND");
q.enqueue("THIRD");
q.dequeue();
console.log(q);
