// diameter of a tree
/**
 * tags: ['dp on tree']
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


function diameterOfTree(node) {

  let result = 0;


  function solveForNode_rec(node) {
    if(node === null) return 0;
    
    let left =  solveForNode_rec(node.left);
    let right = solveForNode_rec(node.right);
  
    // either  this node is included in diameter of not
    // case 1: not included
    let notIncluded = 1 + Math.max(left, right)
    let included = left + right + 1;
    result = Math.max(result, included, notIncluded);
    return notIncluded;
  }

  solveForNode_rec(node)


  return  result;

}


function test() {
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    console.log(diameterOfTree(root))
}

test()