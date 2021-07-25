/**
 * source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/
 * platform: leetcode
 * topic: tree
 * title:   Maximum Depth of Binary Tree
 */


/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 */

/**
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 3
 */

function maxDepth(arr, rootIdx =  0) {
  if(arr.length == 0) return 0
  if(rootIdx == null || rootIdx >= arr.length) return 0;
  let lChildIndex = rootIdx * 2 + 1
  let rChildIndex = rootIdx * 2 + 2
  return 1 + Math.max(maxDepth(arr, lChildIndex), maxDepth(arr, rChildIndex))

}


// function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }
  

// console.log(maxDepth([3,9,20,null,null,15,7]))
// console.log(maxDepth([1,null,2]))
// console.log(maxDepth([]))
console.log(maxDepth([3,9,20,null,null,15,7]  ))
