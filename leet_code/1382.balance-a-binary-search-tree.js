/**
 * https://leetcode.com/problems/balance-a-binary-search-tree/description/
 * 1382. Balance a Binary Search Tree
 * Difficulty: Medium
 * Solved: No
 * Topics: [Tree, BST]
 */


var balanceBST = function(root) {
    let arr = []
    inorderTraverse(root, arr);
    // now arr have all elements in sorted order
    let newTree = constructTree(arr, 0, arr.length-1)
    return newTree;
};

function inorderTraverse(node, arr) {
    if(!node) return;
    inorderTraverse(node.left, arr);
    arr.push(node.val);
    inorderTraverse(node.right, arr);
}

function constructTree(arr, start, end,)  {
    if(start > end) return null
    let mid = start + Math.ceil((end-start)/2);
    let node = new TreeNode(arr[mid]);
    node.left = constructTree(arr, start, mid-1);
    node.right = constructTree(arr, mid+1, end);
    return node;
}