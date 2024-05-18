/**
 * https://leetcode.com/problems/distribute-coins-in-binary-tree/description/
 * Tags: Tree, dfs
 */

var distributeCoins = function(root) {

    let count = 0;
    function dfs(node,) {
        if(node.left) {
            let val = dfs(node.left);
            count += Math.abs(val);
            node.val += val;
        }

        if(node.right) {
            let val = dfs(node.right);
            count += Math.abs(val);
            node.val += val;
        }


        return node.val - 1
    }
    
    dfs(root, 0);
    return count;
};
