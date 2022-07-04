const ListNode = require("./ListNode");

const arrayToLinkedList = arr => {
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

module.exports = {arrayToLinkedList}