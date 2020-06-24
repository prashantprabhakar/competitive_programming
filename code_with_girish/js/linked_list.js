class LinkedListNode  {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.size = 0
        this.head = null
        this.tail= null
    }


    add(element) {
        let node = new LinkedListNode(element)

        if(this.head == null) {
            this.head = node
        } else {
            let currentNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
        }
        this.size++
    }

    indexOf(elem) {
        let count = 0
        let curr = this.head
        while(curr) {
            if(curr.value == elem) return count
            count++
            curr = curr.next
        }
        return -1
    }

    isEmpty() {
        return this.size == 0
    }

    printList() {
        let curr = this.head
        let str = ''
        while(curr) {
            str += curr.value + ' '
            curr = curr.next
        }
        console.log(str)
    }

    printInReverse() {
        let str = ''
        let rev = (node) => {
            if(!node.next) return node.value
            str += rev(node.next) + ' ' + node.value
            return str
        }
        rev(this.head)
        console.log(str)
    }
}

module.exports = LinkedList