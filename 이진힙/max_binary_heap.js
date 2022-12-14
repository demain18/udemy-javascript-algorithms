class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    // this.values에 vaule를 삽입시킨다.
    this.values.push(element);
    // bubbleUp()을 실행한다.
    this.bubbleUp();
  }

  bubbleUp() {
    // this.values의 마지막 인덱스 값을 구한다.
    let idx = this.values.length - 1;
    // this.vaules에서 idx에 위치한 값을 구한다.
    const element = this.values[idx];

    // 만약 idx가 0보다 크다면 반복문을 실행한다.
    while (idx > 0) {
      // 부모 노드의 인덱스 값을 구한다.
      let parentIdx = Math.floor((idx - 1) / 2);
      // this.values에서 부모 노드를 구한다.
      let parent = this.values[parentIdx];

      // 만약 element가 parent보다 작거나 같다면 반복문을 종료시킨다.
      if (element <= parent) break;

      // 두 노드의 위치를 교환한다.
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      // 노드가 교환되었으니 idx의 값은 parentIdx로 변경된다.
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap);
