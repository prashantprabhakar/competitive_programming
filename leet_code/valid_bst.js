// WAP to check if a binary tree is BST

/**
 * A BST is b-tree where 
 * The left subtree of a node contains only nodes with keys lesser than the node’s key.
 * The right subtree of a node contains only nodes with keys greater than the node’s key.
 * The left and right subtree each must also be a binary search tree. 
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isValidBst(node, min, max) {
  if(!node) return true;
  if(min!=undefined && (node.val <= min || node.val >= max) ) return false;
  

  return isValidBst(node.left, min, node.val) && isValidBst(node.right, node.val, max);



  //return isValidBst(node.left) && isValidBst(node.right);
  
}


function test1() {
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  console.log(isValidBst(root));
}

function test2() {
  let root = new Node(8)
  root.left = new Node(3)
  root.right = new Node(10)

  root.left.left = new Node(1)
  root.left.right = new Node(6)
  root.right.right = new Node(14)

  root.left.right.left = new Node(4)
  root.left.right.right = new Node(7)
  root.right.right.left = new Node(13)
  console.log(isValidBst(root))
}

function test3() {
  let root = new Node(5);
  root.left = new Node(4);
  root.right = new Node(6);

  root.right.left = new Node(3);
  root.right.right = new Node(7);
  console.log(isValidBst(root))
}

test1()
test2()
test3()