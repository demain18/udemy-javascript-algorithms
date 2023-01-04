class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val: val, priority: priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightGraph {
  constructor() {
    this.list = {};
  }

  addVertex(vertex) {
    if (!this.list[vertex]) this.list[vertex] = [];
  }

  addEdge(val1, val2, weight) {
    if (!(this.list[val1] && this.list[val2])) return;

    this.list[val1].push({ node: val2, weight: weight });
    this.list[val2].push({ node: val1, weight: weight });
  }

  dijkstra(start, end) {
    // nodes를 선언하고 우선순위 큐를 바인딩한다.
    const nodes = new PriorityQueue();
    // distances, previous, smallest를 선언하고 객체로 초기화시킨다.
    const distances = {};
    const previous = {};
    let smallest = {};
    // path를 선언하고 배열로 초기화시킨다.
    let path = [];

    // [초기 상태 설정하기]
    // list를 반복문으로 실행한다.
    for (let vertex in this.list) {
      // 만약 vertex가 start와 동일하다면
      if (vertex === start) {
        // distances[vertex]의 값을 0으로 초기화시킨다.
        distances[vertex] = 0;
        // nodes에 정점과 가중치(0)을 enqueue한다.
        nodes.enqueue(vertex, 0);
      }
      // 만약 아닐경우
      else {
        // distances[vertex]의 값을 무한으로 초기화시킨다.
        distances[vertex] = Infinity;
        // nodes에 정점과 가중치(무한)을 enqueue한다.
        nodes.enqueue(vertex, Infinity);
      }

      // previous[vertex]의 값을 null로 초기화시킨다.
      previous[vertex] = null;
    }

    // [그래프 순회하기]
    // nodes.vaules의 값이 존재하는 한 반복문을 수행한다.
    while (nodes.values.length) {
      // smallest를 dequeue한 값(가장 중요도가 낮은 정점)으로 초기화시킨다.
      smallest = nodes.dequeue().val;
      // console.log(smallest);

      // 만약 smallest가 end와 동일하다면
      if (smallest === end) {
        // previous[smallest]가 존재한다면 반복문을 수행한다.
        while (previous[smallest]) {
          // pauth에 smallest를 삽입한다.
          path.push(smallest);
          // smallest를 이전 정점으로 초기화시킨다.
          smallest = previous[smallest];
        }

        // 반복문을 종료한다.
        break;
      }

      // 만약 smallest가 존재하거나 distances[smallest]의 값이 무한이 아니라면
      if (smallest || distances[smallest] !== Infinity) {
        // this.list[smallest]의 정점이 가지는 인접점들을 반복문으로 수행한다.
        for (let neighbor in this.list[smallest]) {
          // nextNode를 선언하고 this.list[smallest]의 인접점으로 초기화한다.
          let nextNode = this.list[smallest][neighbor];
          // candidate를 선언하고 현재 방문한 정점까지의 거리 + 다음 정점까지의 거리를 합산한 값으로 초기화시킨다.
          let candidate = distances[smallest] + nextNode.weight;
          // nextNeighbor를 선언하고 다음 정점의 node로 초기화시킨다.
          let nextNeighbor = nextNode.node;

          // 만약 candidate(합산된 거리)가 다음 정점의 거리보다 작다면
          if (candidate < distances[nextNeighbor]) {
            // 다음 정점의 거리를 candidate로 초기화시킨다.
            distances[nextNeighbor] = candidate;
            // 다음 정점의 previous를 smallest로 초기화시킨다.
            previous[nextNeighbor] = smallest;
            // nodes에 다음 정점을 candidate와 함께 enqueue한다.
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

let g = new WeightGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.dijkstra("A", "E"));
