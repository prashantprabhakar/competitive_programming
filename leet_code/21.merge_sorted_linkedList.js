const { arrayToLinkedList } = require("../utils")
const ListNode = require("../utils/ListNode");

function mergeSortedLinkedList(list1, list2) {
    let head = tail = undefined;
    while(list1 && list2) {
        let newNode = undefined;
        if(list1.val <= list2.val) {
            newNode = new ListNode(list1.val)
            list1 = list1.next;
        } else {
            newNode = new ListNode(list2.val)
            list2 = list2.next;
        }
        if(!head) head = tail = newNode
        else {
            tail.next = newNode;
            tail = tail.next
        }
    }
    if(!list1 && !list2) return head;
    
    let remainingList = list1 || list2;
    if(!head) head = tail = remainingList
    else tail.next = remainingList
    return head
}


function main() {
    let list1  = arrayToLinkedList([]);
    let list2 = arrayToLinkedList([0])
    let l3 = mergeSortedLinkedList(list1, list2)
    l3.printList()
}

main()