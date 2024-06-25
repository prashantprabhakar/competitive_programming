/**
 * https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/
 * 1038. Binary Search Tree to Greater Sum Tree
 * Difficulty: Medium
 * Solved: Yes
 */

var bstToGst = function(root) {
    function rec(node, sum) {
        if(!node) return sum;
        let right = rec(node.right, sum);
        node.val += right;
        let left = rec(node.left, node.val);
        return left;

    }
    rec(root, 0)
    return root
};