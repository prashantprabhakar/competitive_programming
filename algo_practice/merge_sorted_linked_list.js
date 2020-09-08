const LinkedList = require('./linked_list')

class LinkedListNode  {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
    add(elem) {

    }
}


let l1 = new LinkedListNode(1)


let ll1 = new LinkedList()
let ll2 = new LinkedList()

ll1.add(1);
ll1.add(3);
ll1.add(5);
ll1.add(9);

ll2.add(2);
ll2.add(4);
ll2.add(6);
ll2.add(7);
ll2.add(8)

function mergeSortedLL(l1, l2) {
    let mergedList = new LinkedList()
    while(l1 && l2) {
        if(l1.value <= l2.value) {
            // point smaller node to l3
            mergedList.addNode(l1)
            console.log("Added")
            // moved head of smaller node
            l1 = l1.next
        } else {
            mergedList.addNode(l2)
            l2 = l2.next
        }
    }

    if(l1 == null) mergedList.next = l2
    if(l2 == null) mergedList.next = l1


    mergedList.printList()
}

mergeSortedLL(ll1.head, ll2.head)