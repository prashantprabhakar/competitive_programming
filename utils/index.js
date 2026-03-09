const ListNode = require("./ListNode");
const TreeNode = require('./TreeNode');
const treeUtil = require('./tree');

exports.arrayToLinkedList = arr => {
    let head = tail = undefined;
    arr.forEach(item => {
        let  node = new ListNode(item);
        if(!head) {
            head = node;
            tail = node;
        } else  {
            tail.next = node;
            tail = tail.next
        }

    })
    return head
}


exports.treeToObj = root => {
    function internal(node) {
        if(node === null) return undefined
        let obj = {val: node.val }
        obj.left = internal(node.left);
        obj.right = internal(node.right);
        return obj
    }
    return internal(root)
}

// exports.arrayToTree = treeUtil.arrayToTree;

/**
 * Converts an array to a binary tree.
 * @param {Array} arr - Array representation of the binary tree.
 * @returns {TreeNode} - Root of the binary tree.
 */
function arrayToTree(arr) {
    if (!arr || arr.length === 0) return null;

    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const current = queue.shift();

        if (arr[i] !== null) {
            current.left = new TreeNode(arr[i]);
            queue.push(current.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right);
        }
        i++;
    }

    return root;
}

/**
 * Converts a binary tree to an array representation.
 * @param {TreeNode} root - Root of the binary tree.
 * @returns {Array} - Array representation of the binary tree.
 */
function treeToArray(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();

        if (current) {
            result.push(current.val);
            queue.push(current.left);
            queue.push(current.right);
        } else {
            result.push(null);
        }
    }

    // Remove trailing nulls for a cleaner representation
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

module.exports = { arrayToTree, treeToArray };