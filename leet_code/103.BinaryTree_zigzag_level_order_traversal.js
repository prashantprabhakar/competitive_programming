/**
 * 103. Binary Tree Zigzag Level Order Traversal
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/?envType=problem-list-v2&envId=tree
 */

const { arrayToTree } = require("../utils");


function zigzagLevelOrder(root) {
    if(!root) return [];
    let queue = [[root]];
    const resultArr = [[root.val]];
    let index = 0;
    let isLeftFirst = false;

    while(index < queue.length) {
        let nodeArr = queue[index];
        let tempNodeArr = [], tempValuesArr = [];

        for(let i=0; i<nodeArr.length; i++) {
            const node = nodeArr[i];
            if(!node) continue;
            if(node.left) {
                tempNodeArr.push(node.left)
                tempValuesArr.push(node.left.val)
            }
            if(node.right) {
                tempNodeArr.push(node.right)
                tempValuesArr.push(node.right.val)
            }
        }
        if(!isLeftFirst) {
            tempValuesArr.reverse()
        }
        isLeftFirst = !isLeftFirst;
        tempNodeArr.length && queue.push(tempNodeArr) && resultArr.push(tempValuesArr);
        index++;
    }
    console.log(resultArr)
    
}

// zigzagLevelOrder(arrayToTree([3,9,20,null,null,15,7]))
zigzagLevelOrder(arrayToTree([1,2,3,4,null,null,5])) // expected: [[1],[3,2],[4,5]]
zigzagLevelOrder(arrayToTree([0,2,4,1,null,3,-1,5,1,null,6,null,8])) // [[0],[4,2],[1,3,-1],[8,6,1,5]]

