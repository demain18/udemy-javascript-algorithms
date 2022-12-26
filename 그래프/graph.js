class Graph {
  constructor() {
    this.list = {};
  }

  isVertexExist(val1, val2) {
    // this.list에서 val1, val2의 값이 모두 존재한다면 true, 그 반대라면 false를 반환한다.
    return this.list[val1] && this.list[val2] ? true : false;
  }

  addVertex(key) {
    // 만약 this.list[key]가 falsy하다면 빈 배열로 초기화시킨다.
    if (!this.list[key]) this.list[key] = [];
  }

  removeVertex(key) {
    // 만약 this.list[key]가 존재하지 않는다면 함수를 종료시킨다.
    if (!this.list[key]) return;

    // this.list에서 key에 해당하는 요소를 삭제한다.
    delete this.list[key];
    // this.list를 순회한다.
    for (const vertex in this.list) {
      // key정점에 연결된 간선을 제거한다.
      this.list[vertex] = this.list[vertex].filter((i) => i !== key);
    }
  }

  addEdge(val1, val2) {
    // 만약 val1, val2에 둘다 정점이 존재하지 않는다면 함수를 종료시킨다.
    if (!this.isVertexExist(val1, val2)) return;

    // 각 정점에 상대 정점을 삽입한다.
    this.list[val1].push(val2);
    this.list[val2].push(val1);
  }

  removeEdge(val1, val2) {
    // 만약 val1, val2에 둘다 정점이 존재하지 않는다면 함수를 종료시킨다.
    if (!this.isVertexExist(val1, val2)) return;

    // 각 정점의 간선중 상대 정점에 연결된 간선이 있다면 제거한다.
    this.list[val1] = this.list[val1].filter((i) => i !== val2);
    this.list[val2] = this.list[val2].filter((i) => i !== val1);
  }
}

let gh = new Graph();
gh.addVertex("Tokyo");
gh.addVertex("Dallas");
gh.addVertex("Newyork");
gh.addVertex("Singapore");
gh.addEdge("Tokyo", "Dallas");
gh.addEdge("Dallas", "Newyork");
gh.addEdge("Newyork", "Singapore");
console.log(gh.list);
gh.removeEdge("Tokyo", "Dallas");
gh.removeVertex("Singapore");
console.log(gh.list);
