class WeightGraph {
  constructor() {
    this.list = {};
  }

  // 정점이 존재하는지 확인
  isVertexExist(val1, val2) {
    // this.list에서 val1, val2의 값이 모두 존재한다면 true, 그 반대라면 false를 반환한다.
    return this.list[val1] && this.list[val2] ? true : false;
  }

  // 정점 추가
  addVertex(vertex) {
    // 만약 this.list[vertex]가 존재하지 않는다면 빈 배열로 초기화시킨다.
    if (!this.list[vertex]) this.list[vertex] = [];
  }

  // 간선과 가중치 추가
  addEdge(val1, val2, weight) {
    // 만약 val1, val2에 둘다 정점이 존재하지 않는다면 함수를 종료시킨다.
    if (!this.isVertexExist(val1, val2)) return;

    // node와 weight를 가지는 간선을 연결한다.
    this.list[val1].push({ node: val2, weight: weight });
    this.list[val2].push({ node: val1, weight: weight });
  }
}

let g = new WeightGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B", 9);
g.addEdge("A", "C", 5);
g.addEdge("B", "C", 7);

console.log(g.list);
