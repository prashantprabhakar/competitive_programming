// GFG: https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/

/**
    Given a binary tree (not a binary search tree) and two values say n1 and n2, write a program to find the least common ancestor.
 */

function Node(val) {
    this.left = null;
    this.right = null;
    this.val = val;
}

function findLCA(root, val1, val2) {
    let p1 = _findPathToNode(root, val1);
    if(!p1) throw `${val1} is not present`;

    let p2 = _findPathToNode(root, val2);
    if(!p2) throw `${val2} is not present`;

    let i=0
    for(; i<p1.length && i< p2.length; i++) {
        if(p1[i] !== p2[i]) break;
    }
    return p1[i-1]; // p1[i] !=== p2[i]; which means p1[i-1] === p2[i-1] and this will be result
}

function _findPathToNode(node, val, path=[]) {
    if(node === null) return false;
    path.push(node.val);
    if(node.val === val) return path;
    if(_findPathToNode(node.left, val, path)) return path;
    if(_findPathToNode(node.right, val, path)) return  path;
    path.pop();
    return false;
}

(function testSolution() {
    let root = new Node(20);
    root = new Node(20);
    root.left = new Node(8);
    root.right = new Node(22);
    root.left.left = new Node(4);
    root.left.right = new Node(12);
    root.left.right.left = new Node(10);
    root.left.right.right = new Node(14);

    let res = findLCA(root, 4, 10);
    console.log(res)
})()