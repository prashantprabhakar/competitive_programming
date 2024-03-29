


/**
 * Print the outline of a binary tree from left ending to right (ignore base)
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
    if(currentLevel > levelIerated) {
      result.push(node.data);
      levelIerated = currentLevel;
    }

    leftView(node.left, currentLevel+1);
    leftView(node.right, currentLevel+1);

  }

  function rightView(node, currentLevel) {
    if(node === null) return null;
    if(currentLevel > levelIerated) {
      result.push(node.data);
      levelIerated = currentLevel;
    }
    rightView(node.right, currentLevel+1);
    rightView(node.left, currentLevel+1);

  }

  // we need to add left view in reverse order..
  leftView(root.left, 1);
  _reverseArray(result)
  result.push(root.data);
  levelIerated = 0;
  rightView(root.right, 1)
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
  node.left = new Node(2)
  node.right = new Node(3)
  node.left.left = new Node(4)
  node.right.left = new Node(5)
  node.right.left.right = new Node(6)
  printOutline(node)
}
/*
            1
        2          3
    4           5
             6
*/

solution()