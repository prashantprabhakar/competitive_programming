const TreeNode = require('../../../utils/TreeNode');
const {arrayToTree} = require('../../../utils/tree')

function diameterOfTree(root) {
    if(root === null) return { height: 0, diameter: 0}

    let leftTreeInfo = diameterOfTree(root.left);
    let rightTreeInfo = diameterOfTree(root.right);

    let height = Math.max(leftTreeInfo.height, rightTreeInfo.height) + 1;
    
    let currentDiameter = leftTreeInfo.height + rightTreeInfo.height + 1
    let diameter = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter, currentDiameter)
    return { height, diameter }
}

function test() {
    let arr = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
    let tree = arrayToTree(arr)
    const rootNodeInfo = diameterOfTree(tree);
    console.log(rootNodeInfo)
}

test()