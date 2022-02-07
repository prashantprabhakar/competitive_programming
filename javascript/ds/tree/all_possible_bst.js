class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

function allPossibleBst(start, end) {
  const list = [];

  if(start >= end) {
    list.push(null);
    return list;
  }

  for(let i=start; i<=end; i++) {
    
    let leftSubtree = allPossibleBst(start, i-1);
    let rightSubTree = allPossibleBst(i+1, end);

  }
}