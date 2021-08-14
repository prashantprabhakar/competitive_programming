


/**
 * Print the left view of a binary tree
 */

class Node {
  constructor(item) {
    this.data = item;
    this.left = this.right = null;
  }
}

function topView(root) {

  if(root === null) return null;
  let obj = {};
  let queue = [];

  queue.push({node: root, level: 0});

  while(queue.length) {
    let {node, level} = queue.shift(); // O(n)
    if(!node) continue;

    if(!obj[level]) obj[level] = node.data;

    queue.push({node: node.left, level: level-1});
    queue.push({node: node.right, level: level+1});

  }

  console.log(obj)
  //console.log(Object.values(obj))

}

function solution() {
  let node = new Node(1);
  node.left = new Node(2);
  node.right = new Node(3);

  node.left.left = new Node(4);
  node.left.right = new Node(5);

  node.right.right = new Node(6)
  topView(node)
}
/*

              1
          2       3
      4       5       6

    top view: [1,2,3,4,6]
*/

solution()