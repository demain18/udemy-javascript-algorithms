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

  // 리스트 뒤에 노드 추가
  push(val) {
    // val로 새로운 노드를 생성한다.
    var newNode = new Node(val);

    // 만약 연결 리스트가 비어있다면
    if (!this.head) {
      // head, tail을 초기화시킨다.
      this.head = newNode;
      this.tail = this.head;
    }
    // 만약 아니라면
    else {
      // tail.next를 newNode로 초기화시키고
      this.tail.next = newNode;
      // tail을 newNode로 초기화시킨다.
      this.tail = newNode;
    }

    // length를 1 증가시킨다.
    this.length++;

    // 리스트를 반환한다.
    return this;
  }

  // 리스트 뒤에서 노드 제거
  pop() {
    // 만약 연결 리스트가 비어있다면 undefined를 반환한다.
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

  // 리스트 앞에서 노드 제거
  shift() {
    // 만약 연결 리스트가 비어있다면 undefined를 반환한다.
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

  // 리스트 앞에서 노드 추가
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

  // 리스트에서 index에 위치한 노드 반환
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

  // 리스트에서 indexdp 위치한 노드의 값 변경
  set(index, val) {
    // get 메소드를 사용해서 foundNode를 반환시킨다.
    // 해당 변수는 this.head에 '포인터'로 접근한 상태이기 때문에 this값에 접근할 수 있다.
    var foundNode = this.get(index);

    // 만약 foundNode값이 존재한다면
    if (foundNode) {
      // foundNode의 val값을 변경한다.
      foundNode.val = val;
      return true;
    }

    // 찾지 못했다면 false를 반환한다.
    return false;
  }

  // 리스트에서 index에 위치한 노드를 새로 생성한 노드로 교체하고 기존 노드는 한칸 뒤로 보내기
  insert(index, val) {
    // index가 음수거나 length보다 크다면 fasle를 반환한다.
    if (index < 0 || index > this.length) return false;

    // index값이 length와 같다면 push 메소드를 실행한다.
    if (index === this.length) return this.push(val);

    // index값이 0이라면 unshift 메소드를 실행한다.
    if (index === 0) return this.unshift(val);

    // newNode를 생성한다.
    var newNode = new Node(val);
    // index에서 바로 뒤에 있는 값으로 prev 노드를 가져온다.
    var prev = this.get(index - 1);
    // temp에 prev.next 정보를 임시로 저장해놓는다.
    var temp = prev.next;

    // prev 노드의 next값을 newNode로 초기화시킨다.
    prev.next = newNode;
    // newNode의 next값을 미리 저장해둔 temp(바로 위에서 초기화된 prev.next값)을 바인딩해준다.
    newNode.next = temp;

    // length값을 1 증가시킨다.
    this.length++;

    // 완료됬으니 true를 반환한다.
    return true;
  }
}

var list = new SinglyLinkedList();

list.push("100");
list.push("201");
list.push("250");
list.push("350");
list.insert(3, "550");
console.log(list, list.get(3));
