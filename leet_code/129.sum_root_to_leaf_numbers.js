/**
 * 129. Sum Root to Leaf Numbers
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/description/?envType=problem-list-v2&envId=binary-tree
 */

const { treeToArray, arrayToTree } = require('../utils')

function sumNumbers(root) {
    function dfs(node, currentNumber=0) {
        if(!node) return 0;

        // Update the current number by appending the node's value
        currentNumber = currentNumber * 10 + node.val;

        // If it's a leaf node, return the current number
        if (!node.left && !node.right) {
            return currentNumber;
        }

        // Recursively process the left and right subtrees and sum their results
        const leftSum = dfs(node.left, currentNumber);
        const rightSum = dfs(node.right, currentNumber);

        return leftSum + rightSum;

    }
    const res = dfs(root);
    console.log(res)
    return res
}


const inputs = [
    // [4,9,3,5,1, null, null, 7, 2],
    // [4,9,0,5,1],
    // [1,2,3],
    // [1],
    // [],
    [6,8,null,7,3,null,8] // 7561


]



inputs.forEach(input => console.log( sumNumbers(arrayToTree(input))))