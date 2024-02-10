/**
 * url: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/submissions/
 * source: 'leetcode'
 */

const { arrayToTree } = require("../../../utils/tree");

/**
    Given the root of a binary tree, the level of its root is 1, the level of its children is 2, and so on.
    Return the smallest level x such that the sum of all the values of nodes at level x is maximal.
 */

// @ts-check
var maxLevelSum = function(root) {
    let levelSumArr = [];
    sumAtEachLevel(root, levelSumArr);
    // we now need to  find index of max value in levelSumArr
    if(!levelSumArr.length) return -1;
    let maxSum = levelSumArr[1], maxSumLevel = 1;
    for(let i=2; i<levelSumArr.length; i++) {
        let sum = levelSumArr[i];
        if(sum > maxSum) {
            maxSum = sum,
            maxSumLevel = i;
        }
    }

   
    return maxSumLevel
};
    
function sumAtEachLevel(root, levelSumArr) {
    let queue = [];
    if(root === null) return [];
    queue.push({ node: root, level: 1});
    let i=0; levelIndex = 1;
    while(i < queue.length) {
        let elem = queue[i];
        i++;
        let node = elem.node
        let level = elem.level
        if(levelSumArr[level] !== undefined) levelSumArr[level] += node.val
        else levelSumArr[level] = node.val

        if(node.left) queue.push({node: node.left, level: level+1});
        if(node.right) queue.push({node: node.right, level: level+1})
    }
    return levelSumArr;
}
    
const inputs = [
    {
        arr: [63909,43838,4549,-31714,-99701,-96320,88666,75152,-14750,-12671,60405,null,29388,null,null,null,-83674,null,null,-83490,null,-49913,86188,84455,null,null,null,null,null,null,null,null,null,-36061,91438,-75550],
        expected: 4,
        //ignore: true
    },
    {
        arr: [1,7,0,7,-8,null,null],
        expected: 2,
    },
   
]

inputs.forEach(({arr, expected, ignore}) => {
    if(ignore) return
    let tree = arrayToTree(arr);
    let result = maxLevelSum(tree);
    console.log({expected, result})
})