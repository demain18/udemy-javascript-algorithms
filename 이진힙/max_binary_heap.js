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

  remove() {
    // 루트 노드에 해당되는 값을 저장한다.
    const max = this.values[0];
    // 가장 작은 값을 저장한다.
    const end = this.values.pop();

    // this.values의 길이가 0보다 크다면
    if (this.values.length > 0) {
      // this.values의 첫번째 노드를 end로 변경한다.
      this.values[0] = end;
      // sinkDown()을 실행한다.
      this.sinkDown();
    }

    // 이전 루트 노드를 반환한다.
    return max;
  }

  sinkDown() {
    // idx, length, element를 선언한다.
    let idx = 0;
    let length = this.values.length;
    let element = this.values[0];

    // 반복문을 수행한다.
    while (true) {
      // 왼쪽 자식 노드를 구한다.
      let leftChildIdx = 2 * idx + 1;
      // 오른쪽 자식 노드를 구한다.
      let rightChildIdx = 2 * idx + 2;
      // leftChild, rightChild, swap을 선언한다.
      let leftChild,
        rightChild,
        swap = null;

      // 만약 leftChildIdx가 length보다 작다면(배열 범위 안이라면)
      if (leftChildIdx < length) {
        // leftChild를 leftChilIdx에 위치한 노드로 초기화시킨다.
        leftChild = this.values[leftChildIdx];

        // 만약 leftChild가 element보다 크다면
        if (leftChild > element) {
          // swap을 leftChildIdx로 초기화시킨다.
          swap = leftChildIdx;
        }
      }

      // 만약 rightChildIdx가 length보다 작다면(배열 범위 안이라면)
      if (rightChildIdx < length) {
        // rightChild를 rightChildIdx에 위치한 노드로 초기화시킨다.
        rightChild = this.values[rightChildIdx];

        if (
          // swap이 비어있고, 오른쪽 노드가 element보다 더 클 경우. 또는
          (swap === null && rightChild > element) ||
          // swap이 비어있지 않고, 오른쪽 노드가 왼쪽 노드보다 더 클 경우
          (swap !== null && rightChild > leftChild)
        ) {
          // swap을 rightChildIdx로 초기화시킨다.
          swap = rightChildIdx;
        }
      }

      // 만약 swap이 비어있다면 반복문을 중지시킨다.
      if (swap === null) break;

      // idx에 위치한 노드를 swap에 위치한 노드와 교환한다.
      this.values[idx] = this.values[swap];
      // swap에 위치한 노드를 element로 초기화시킨다.
      this.values[swap] = element;
      // idx를 swap으로 초기화시킨다.
      idx = swap;
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
console.log(heap.remove());
// console.log(heap.remove());
console.log(heap);
