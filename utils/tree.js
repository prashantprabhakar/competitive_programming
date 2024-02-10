// from Leetcode
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}


exports.arrayToTree = (arr) => {
    const root = new TreeNode(arr.shift());
    const queue = [root];
    while (queue.length > 0 && arr.length > 0) {
      const curNode = queue.shift();
      const leftVal = arr.shift();
      const rightVal = arr.shift();
      if (leftVal !== null) {
        curNode.left = new TreeNode(leftVal);
        queue.push(curNode.left);
      }
      if (rightVal !== null) {
        curNode.right = new TreeNode(rightVal);
        queue.push(curNode.right);
      }
    }
    return root;
}