class Node {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function invert(node) {
  if(node === null) return;
  invert(node.left);
  invert(node.right);

  let left = node.left;
  node.left = node.right;
  node.right = left;

}


function solution() {
  let node = new Node(1);
  node.left = new Node(2)
  node.right = new Node(3)
  node.left.left = new Node(4)
  node.right.left = new Node(5)
  node.right.left.right = new Node(6)
  invert(node)
  console.log(node)
}

solution()

/*
            1
        2          3
    4           5
             6
*/