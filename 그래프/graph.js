class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(key) {
    this.list[key] = [];
  }
}

let gh = new Graph();
gh.addVertex("john wick");
gh.addVertex("sellby thomas");
console.log(gh);
