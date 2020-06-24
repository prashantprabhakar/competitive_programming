const LinkedList = require('./linked_list')

let ll = new LinkedList()

for(let i=1; i<10; i++) {
    ll.add(i)
}

ll.printList()
ll.printInReverse()
