// https://leetcode.com/problems/reverse-linked-list/
const { arrayToLinkedList } = require("../utils")

function reverseList(head) {
    if(head == null || head.next == null) {
        return head
    }
    newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}

function main() {
    let list1  = arrayToLinkedList([1,2, 3, 4]);
    list1.printList()
    let l3 = reverseList(list1)
    l3.printList()
}

main()