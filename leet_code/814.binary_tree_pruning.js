/**
 * 814. Binary Tree Purning
 * https://leetcode.com/problems/binary-tree-pruning/description/
 * Tags: ['Tree', 'Depth-first Search', 'Binary Tree']
 */

/**
    Given the root of a binary tree, return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

    A subtree of a node node is node plus every node that is a descendant of node.
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const { treeToArray, arrayToTree } = require('../utils')


function pruneTree(root) {


    function internal(node) {
        if(!node) return null;
        if(!shouldKeepNode(node.left)) {
            node.left = null;
        } else {
            // if node.left is not pruned, check for left subtree where other nodes can be pruned
            internal(node.left)
        }

        if(!shouldKeepNode(node.right)) {
            node.right = null;
        } else {
            internal(node.right)
        }
        return node;
    }

    // this function will return true if there is any '1' found in any of it's subtrees.
    function shouldKeepNode(node) {
      if(!node) return false;
      if(node.val === 1) return true;
      if(shouldKeepNode(node.left)) return true;
      if(shouldKeepNode(node.right)) return true;
      return false;

    }

    return shouldKeepNode(root) ? internal(root): null;
}


function test() {
    const root = arrayToTree([1,null,0,0,1]);
    const resultTree = pruneTree(root);
    const result = treeToArray(resultTree);
    console.log(result) // Expected: [1,null,0,null,1]

}



test()




/**
 Developer Section:

 * Should I use bfs or dfs?
 
*/