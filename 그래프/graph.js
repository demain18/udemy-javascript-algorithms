class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(key) {
    if (!this.list[key]) this.list[key] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.list[vertex1] && this.list[vertex2]) {
      this.list[vertex1].push(vertex2);
      this.list[vertex2].push(vertex1);
    }
  }
}

let gh = new Graph();
gh.addVertex("Tokyo");
gh.addVertex("Dallas");
gh.addVertex("Newyork");
gh.addEdge("Tokyo", "Dallas");
gh.addEdge("Dallas", "Newyork");
console.log(gh);
