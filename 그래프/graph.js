class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(key) {
    if (!this.list[key]) this.list[key] = [];
  }
}

let gh = new Graph();
gh.addVertex("john wick");
gh.addVertex("sellby thomas");
console.log(gh);
