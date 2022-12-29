class GraphTraversal {
  constructor() {
    this.list = {};
  }

  // 정점이 존재하는지 확인하기
  isVertexExist(val1, val2) {
    // this.list에서 val1, val2의 값이 모두 존재한다면 true, 그 반대라면 false를 반환한다.
    return this.list[val1] && this.list[val2] ? true : false;
  }

  // 정점 추가하기
  addVertex(key) {
    // 만약 this.list[key]가 falsy하다면 빈 배열로 초기화시킨다.
    if (!this.list[key]) this.list[key] = [];
  }

  // 정점 제거하기
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

  // 간선 추가하기
  addEdge(val1, val2) {
    // 만약 val1, val2에 둘다 정점이 존재하지 않는다면 함수를 종료시킨다.
    if (!this.isVertexExist(val1, val2)) return;

    // 각 정점에 상대 정점을 삽입한다.
    this.list[val1].push(val2);
    this.list[val2].push(val1);
  }

  // 간선 제거하기
  removeEdge(val1, val2) {
    // 만약 val1, val2에 둘다 정점이 존재하지 않는다면 함수를 종료시킨다.
    if (!this.isVertexExist(val1, val2)) return;

    // 각 정점의 간선중 상대 정점에 연결된 간선이 있다면 제거한다.
    this.list[val1] = this.list[val1].filter((i) => i !== val2);
    this.list[val2] = this.list[val2].filter((i) => i !== val1);
  }

  // 재귀형으로 DFS 순회하기
  dfsRecursive(start) {
    // result, visited를 선언해준다.
    const result = [];
    const visited = {};
    // listCopy를 선언하고 this.list로 초기화시킨다.
    const listCopy = this.list;

    // 헬퍼 함수를 선언해준다.
    function dfs(vertex) {
      // 만약 정점(vertex)이 존재하지 않는다면 함수를 종료한다.
      if (!vertex) return;

      // 정점을 visited에 참으로 저장한다.
      visited[vertex] = true;
      // 정점을 result에 삽입한다.
      result.push(vertex);

      // vertex의 인접점 리스트를 반복문으로 실행한다.
      listCopy[vertex].map((neighbor) => {
        // 만약 인접점(neighbor)을 방문한 적이 없다면
        if (!visited[neighbor]) {
          // 재귀형으로 dfs함수를 실행한다.
          return dfs(neighbor);
        }
      });
    }

    // dfs함수를 실행한다.
    dfs(start);

    // result을 반환한다.
    return result;
  }

  // 순환형으로 DFS 순회하기
  dfsIterative(start) {
    // stack, result, visited를 선언해준다.
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    // start정점을 방문처리 해준다.
    visited[start] = true;

    // stack에 값이 있는한 반북문을 수행한다.
    while (stack.length > 0) {
      // stack에서 가장 뒤에 있는 요소로 currentVertex를 초기화시킨다.
      currentVertex = stack.pop();
      // currentVertex를 result에 삽입한다.
      result.push(currentVertex);

      // this.list[currentVertex]의 인접점 리스트로 반복문을 수행한다.
      this.list[currentVertex].map((neighbor) => {
        // 만약 인접점(neihbor)을 방문한 적이 없다면
        if (!visited[neighbor]) {
          // 인접점을 방문처리 해준다.
          visited[neighbor] = true;
          // stack에 인접점을 삽입한다.
          stack.push(neighbor);
        }
      });
    }

    // result를 반한다.
    return result;
  }

  bfs(start) {
    // queue, result, visited을 선언해준다.
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    // queue에 값이 있는한 반복문을 수행한다.
    while (queue.length > 0) {
      // queue에서 가장 앞에 있는 요소로 currentVertex를 초기화시킨다.
      currentVertex = queue.shift();
      // result에 currentVertex를 삽입한다.
      result.push(currentVertex);

      // this.list[currentVertex]의 인접점 리스트로 반복문을 수행한다.
      this.list[currentVertex].map((neighbor) => {
        // 만약 인접점(neihbor)을 방문한 적이 없다면
        if (!visited[neighbor]) {
          // 인접점을 방문처리 해준다.
          visited[neighbor] = true;
          // queue에 인접점을 삽입한다.
          queue.push(neighbor);
        }
      });
    }

    // result를 반환한다.
    return result;
  }
}

let g = new GraphTraversal();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.list);
console.log("재귀형 DFS 그래프 순회: ", g.dfsRecursive("A"));
console.log("반복형 DFS 그래프 순회: ", g.dfsIterative("A"));
console.log("BFS 그래프 순회: ", g.bfs("A"));
