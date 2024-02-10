// GFG: https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/

/**
    Given values of two values n1 and n2 in a Binary Search Tree, find the Lowest Common Ancestor (LCA).
    You may assume that both the values exist in the tree. 
 */

function Node(val) {
    this.left = null;
    this.right = null;
    this.val = val;
}

function findLCARecusion(root, val1, val2) {
    if(root === null) return null;

    if(root.val > val1 && root.val > val2) {
        // lca lies in left subtree
        return findLCARecusion(root.left, val1, val2);
    }
    else if(root.val < val1 && root.val < val2)  {
        // lca lies in righ subtree
        return findLCARecusion(root.right, val1, val2);
    }
    else return root.val;
}

function findLCAIter(root, val1, val2) {
    while(root !== null) {
        if(root.val > val1 && root.val > val2) {
            root = root.left;
        } else if(root.val < val1 && root.val < val2) {
            root = root.right
        } else {
            break;
        }
    }
    return root.val
}
    
    
(function testSolution() {
    let root = new Node(20);
    root.left = new Node(8);
    root.right = new Node(22);
    root.left.left = new Node(4);
    root.left.right = new Node(12);
    root.left.right.left = new Node(10);
    root.left.right.right = new Node(14);

    console.log(findLCARecusion(root, 4, 10)); // 8
    console.log(findLCARecusion(root, 10, 14)); // 12
    console.log(findLCARecusion(root, 8, 14)); // 8
    console.log(findLCARecusion(root, 10, 22)); // 20
    console.log(findLCARecusion(20, 22)) // ?? 

    console.log(findLCAIter(root, 4, 10)); // 8
    console.log(findLCAIter(root, 10, 14)); // 12
    console.log(findLCAIter(root, 8, 14)); // 8
    console.log(findLCAIter(root, 10, 22)); // 20
    console.log(findLCAIter(20, 22)) // ?? 
})()
