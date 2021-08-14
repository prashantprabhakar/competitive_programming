


/**
 * Print the outline of a binary tree from left ending to right with base (left-> right-> base)
 */

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

function printOutline(root) {

  if(root === null) return null;
  let result = [];
  let levelIerated = 0;

  function leftView(node, currentLevel) {
    if(node === null) return null;
    if(node.left === null && node.right === null) return
    if(currentLevel > levelIerated) {
      result.push(node.data);
      levelIerated = currentLevel;
    }

    leftView(node.left, currentLevel+1);
    leftView(node.right, currentLevel+1);

  }

  function rightView(node, currentLevel) {
    if(node === null) return null;
    if(node.left === null && node.right === null) return;
    if(currentLevel > levelIerated) {
      result.push(node.data);
      levelIerated = currentLevel;
    }
    rightView(node.right, currentLevel+1);
    rightView(node.left, currentLevel+1);

  }

  function leaves(node) {
    if(node === null) return;
    if(node.left === null && node.right === null) {
      result.push(node.data);
    }
    leaves(node.left)
    leaves(node.right)
  }

  // we need to add left view in reverse order..
  leftView(root.left, 1);
  _reverseArray(result)
  result.push(root.data);
  levelIerated = 0;
  rightView(root.right, 1)
  // we can reverse the right node..
  leaves(root)
  console.log(result)
}

function _reverseArray(arr) {
  let mid = Math.floor(arr.length / 2);
  for(let i=0; i<mid; i++) {
    let temp = arr[i]
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1- i] = temp;
  }
}



function solution() {
  let node = new Node(1);
  node.left = new Node(2);
  node.right = new Node(3);

  node.left.left = new Node(4);
  node.left.left.left = new Node(7);
  node.left.left.right = new Node(8);

  node.left.right = new Node(0);
  node.left.right.right = new Node(6);

  node.right.left = new Node(5)
  node.right.left.right = new Node(7)
  printOutline(node)
}
/*
              1
        2              3
    4      0       5
  7    8      6       7

  op: [7,4,2, 1, 3,5,7, 6, 8]
*/

solution()