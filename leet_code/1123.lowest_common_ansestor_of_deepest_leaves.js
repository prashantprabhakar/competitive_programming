/**
 * 1123. Lowest Common Ancestor of Deepest Leaves
 * https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/description/?envType=daily-question&envId=2025-04-04
 */


function lcaDeepestLeaves1(root) {

    function internal(node) {
        if(!node) return {
            level: 0,
            node,
        };

        const lRes = internal(node.left);
        const rRes = internal(node.right);

        if(lRes.level > rRes.level) return { level: 1 + lRes.level, node: lRes.node }
        if(rRes.level > lRes.level) return { level: 1 + rRes.level, node: rRes.node }

        return {
            level: 1 + lRes.level,
            node
        };
    }

    return internal(root).node
}



const { treeToArray, arrayToTree } = require('../utils')


function test(inputArr) {
    const inputRoot = arrayToTree(inputArr);
    const result = lcaDeepestLeaves1(inputRoot);
    console.log(treeToArray(result))
}

const inputs = [
    [3,5,1,6,2,0,8,null,null,7,4],
    [1],
    [0,1,3,null,2],
    [1,2,null,3,4,null,6,null,5]
]

inputs.forEach(input => test(input))