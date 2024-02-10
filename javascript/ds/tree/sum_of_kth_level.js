const TreeNode = require('../../../utils/TreeNode');
const {arrayToTree} = require('../../../utils/tree')

function sumAtKthLevel(root, k,) {
    let queue = [];
    if(root === null) return -1;
    let sum = 0;
    let i = 0
    let level = 1
    queue.push({ node:root, level });
    while(i < queue.length) {
        let elem = queue[i];
        i++
        let node = elem.node
        //if(elem.level > k) break;
        if(elem.level === k) sum += elem.node.val;
        if(node.left) queue.push({node: node.left, level: level+1});
        if(node.right) queue.push({node: node.right, level: level+1})
        level = level+1;
    }
    return sum;
}


function test() {
    //  tree image:  https://leetcode.com/problems/linked-list-in-binary-tree/
    let arr = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
    let tree = arrayToTree(arr)
    const rootNodeInfo = sumAtKthLevel(tree, 2);
    console.log(rootNodeInfo)
}

test()
