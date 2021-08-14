


/**
 * Print the left view of a binary tree
 */

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

function printLeftView(root) {

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

  leftView(root, 1)
  console.log(result)
}

function solution() {
  let node = new Node(1);
  node.left = new Node(2)
  node.right = new Node(3)
  node.left.left = new Node(4)
  node.right.left = new Node(5)
  node.right.left.right = new Node(6)
  printLeftView(node)
}
/*
                  1
        2                  3
    4                 5
                        6
*/

solution()