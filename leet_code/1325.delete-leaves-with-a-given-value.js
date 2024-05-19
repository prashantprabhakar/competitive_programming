/**
 * https://leetcode.com/problems/delete-leaves-with-a-given-value/description/
 * Tags: DFS, Tree
 */

const { arrayToTree } = require("../utils/tree");
const { treeToArray } = require("../utils")

function removeLeafNodes(root, target) {

    function dfs(node,) {
        if(!node) return
        if(node.left === null && node.right === null ) {
            return node.val === target;
        }

        const isLeftRemoved = dfs(node.left);
        const isRightRemoved = dfs(node.right);
        if(isLeftRemoved) node.left = null;
        if(node.isRightRemoved) node.right = null;
        return node.val === target && isLeftRemoved && isRightRemoved

    }

    dfs(root)
    return root
}

const tree = arrayToTree([1,2,3,2,null,2,4])
resultTree = removeLeafNodes(tree)
console.log(treeToArray(resultTree))