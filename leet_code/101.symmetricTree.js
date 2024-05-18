/**
 * https://leetcode.com/problems/symmetric-tree/description/
 * tags: [Tree,  bfs, dfs]
 */

/**
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
 */


var isSymmetric1 = function(root) {
    function dfs(node1, node2) {
        if(node1 === null && node2 === null) return true;
        if(node1?.val !== node2?.val) return false;
        return dfs(node1.left, node2.right) && dfs(node1.right, node2.left)
    }
    return dfs(root.left, root.right)
};


var isSymmetric = function(root) {
    let queue = [];
    
}

