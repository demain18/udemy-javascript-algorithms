class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(key) {
    if (!this.list[key]) this.list[key] = [];
  }

  isVertexExist(val1, val2) {
    return this.list[val1] && this.list[val2] ? true : false;
  }

  addEdge(val1, val2) {
    if (!this.isVertexExist(val1, val2)) return;

    this.list[val1].push(val2);
    this.list[val2].push(val1);
  }

  removeEdge(val1, val2) {
    if (!this.isVertexExist(val1, val2)) return;

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
gh.removeEdge("Tokyo", "Dallas");
console.log(gh);
