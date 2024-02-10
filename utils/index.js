const ListNode = require("./ListNode");
const TreeNode = require('./TreeNode');

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

// exports.arrayToTree = arr => {
//     function toTree(i) {
//         if(i >= arr.length) return null
//         if(arr[i] === null) return null
//         let node = new TreeNode(arr[i]);
//         const leftChildIndex = 2*i + 1;
//         const rightChildIndex = 2*i + 2;
//         node.left = toTree(leftChildIndex)
//         node.right = toTree(rightChildIndex)
//         return node;
//     }

//     return toTree(0);
// }

exports.treeToArray = root => {
    let arr = [];

    function fromTree(node, i) {
        if(!node)  return arr[i] = null
        arr[i] = node ? node.val : null
        const leftChildIndex = 2*i + 1;
        const rightChildIndex = 2*i + 2;
        fromTree(node.left, leftChildIndex);
        fromTree(node.right, rightChildIndex)
    }
    fromTree(root, 0)
    return arr;
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