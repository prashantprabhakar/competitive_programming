


/**
 * Print the right view of a binary tree
 */

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

function printRightView(root) {

  if(root === null) return null;
  let result = [];
  let levelIerated = 0;

  function rightView(node, currentLevel) {
    if(node === null) return null;
    if(currentLevel > levelIerated) {
      result.push(node.data);
      levelIerated = currentLevel;
    }
    rightView(node.right, currentLevel+1);
    rightView(node.left, currentLevel+1);

  }

  rightView(root, 1)
  console.log(result)
}

function solution() {
  let node = new Node(1);
  node.left = new Node(2)
  node.right = new Node(3)
  node.left.left = new Node(4)
  node.right.left = new Node(5)
  node.right.left.right = new Node(6)
  printRightView(node)
}
/*
            1
        2          3
    4           5
             6
*/

solution()