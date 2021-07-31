class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
  }

  pop() {
    let prev = this.head
    let curr = this.head
    while(curr.next !== null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    this.tail = prev;
    return this;
    
  }

  shift(){

  }

  unshift(){
    
  }

}

module.exports = LinkedList