/**
 * URL: https://leetcode.com/problems/linked-list-in-binary-tree/
 * source: ['leetcode']
 * tags: ['lcs', 'dp']
 */

const { arrayToTree } = require('../utils/tree')
const { arrayToList } = require('../utils/linkedlist')

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSubPath(head, root) {

    function internal(treeNode, listNode) {
        if(!listNode) return true;
        if(treeNode === null) return false;
        if(treeNode.val === listNode.val) {
            return (
                internal(treeNode.left, listNode.next) ||
                internal(treeNode.right, listNode.next)
            )
        } else {
            return false;
        }
    }

    
    function checkListForTreeNode(treeNode, listNode) {
        if(!treeNode) return false;
        let x = internal(treeNode, listNode)
        if(x) return true;
        return checkListForTreeNode(treeNode.left, listNode) || checkListForTreeNode(treeNode.right, listNode)
    }

    return checkListForTreeNode(root, head)

}

function isSubPath2(head, root) {

    function internal(treeNode, listNode) {
        if(!listNode) return true;
        if(treeNode === null) return false;
        if(treeNode.val === listNode.val) {
            return (
                internal(treeNode.left, listNode.next) ||
                internal(treeNode.right, listNode.next)
            )
        } else {
            return (
                internal(treeNode.left, listNode) ||
                internal(treeNode.right, listNode)
            )
        }
    }

    return (
        internal(root, head) ||
        internal(root?.left, head) ||
        internal(root?.right, head)
    )

}


const testCases = [{
    tree: [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3],
    list: [4,2,8],
    expected: true
}, {
    tree: [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3],
    list:  [1,4,2,6],
    expected: true
}, {
    tree: [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3],
    list: [1,4,2,6,8],
    expected: false
}, {
    list: [10,7,4,10,2,6,10,10,10,1,10,6],
    tree: [1,10,7,10,8,6,1,10,7,1,10,4,3,9,null,10,10,4,10,7,1,3,7,null,null,7,9,6,3,null,null,8,10,10,3,1,1,null,null,null,null,null,2,null,null,10,3,5,null,null,null,6,null,5,null,null,6,2,5,null,4,null,10,9,10,null,null,null,3,10,8,5,6,null,7,3,null,8,9,6,2,null,8,9,10,10,null,4,6,4,null,null,2,5,6,null,null,null,null,6,null,1,null,null,null,null,8,null,null,10,10,null,null,null,8,null,null,3,10,null,null,10,2,null,null,7,6,null,null,null,null,null,null,null,null,null,null,4,null,null,10,null,2,null,null,1,6,null,null,8,9,null,null,null,8,4,null,null,null,10,4,null,1,null,null,null,null,9,null,null,null,null,null,9,null,10,1,6,null,null,null,null,null,null,null,5,null,2,10,null,null,null,null,null,null,null,6,null,5],
    expected: true
}]

testCases.forEach(test => {
    let tree = arrayToTree(test.tree)
    let  list = arrayToList(test.list)
    let result = isSubPath( list, tree);
    console.log({ expected: test.expected, result})
})