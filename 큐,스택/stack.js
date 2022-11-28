class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // 스택 삽입하가
  push(val) {
    // 새로운 노드를 생성해준다.
    var newNode = new Node(val);

    // 만약 스택이 비어있다면
    if (!this.first) {
      // this.first, this.last를 newNode로 초기화시킨다.
      this.first = newNode;
      this.last = newNode;
    }
    // 아니라면
    else {
      // this.first를 temp에 바인딩한다.
      var temp = this.first;
      // this.first을 newNode로 초기화시킨다.
      this.first = newNode;
      // this.first.next에 temp를 바인딩해서 unshift를 구현한다.
      this.first.next = temp;
    }

    // this.size을 1을 증가시키고 해당 값을 반환한다.
    return this.size++;
  }

  // 스택 제거하기
  pop() {
    // 만약 스택이 비어있다면 null을 반환한다.
    if (!this.first) return null;

    // 만약 리스트에 값이 하나만 있다면 last를 null로 초기화시킨다.
    if (this.first === this.last) {
      this.last = null;
    }

    // this.first를 temp에 임시로 저장해둔다.
    var temp = this.first;
    // this.first를 this.first.next로 초기화시켜서 shift를 구현한다.
    this.first = this.first.next;
    // this.size의 값을 1 감소시킨다.
    this.size--;

    // 예전 this.first인 temp의 value를 반환한다.
    return temp.value;
  }
}

var list = new Stack();
list.push("155");
list.push("256");
list.push("1992");
console.log(list.pop());
console.log(list);
