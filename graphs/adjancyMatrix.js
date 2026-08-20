// implementationAdjMat(4);
function implementationAdjMat(v) {
  let adjMat = Array.from({ length: v }, () => new Array(v).fill(0));

  buildMatrix(0, 1, adjMat, false);
  buildMatrix(0, 2, adjMat, true);
  buildMatrix(1, 2, adjMat, false);
  buildMatrix(0, 3, adjMat, true);
  buildMatrix(2, 3, adjMat, false);

  console.log(adjMat);

  function buildMatrix(u, v, adjMat, isDirected) {
    adjMat[u][v] = 1;
    if (!isDirected) adjMat[v][u] = 1;
  }
}

function implementationAdjList(v) {
  let list = [];
  for (let i = 0; i < v; i++) {
    list[i] = [];
  }

  buildAdjList(0, 1, false);
  buildAdjList(0, 2, true);
  buildAdjList(0, 3, false);
  buildAdjList(1, 2, true);
  buildAdjList(2, 3, false);

  console.log(list);

  function buildAdjList(u, v, isDirected) {
    list[u].push(v);
    if (!isDirected) list[v].push(u);
  }
}

implementationAdjList(4);
