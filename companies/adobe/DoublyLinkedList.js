class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLL {

  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding node at start of  linkedList
  prepend(val) {
    let node = new Node(val);
    if(this.length ==  0) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.length++;
  }

  // adding node at end of Linkedlist
  append(val) {
    // check if adding to head
    let node = new Node(val);
    if(this.length === 0) {
      this.head = node;
      this.tail = node;
    }else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++
  }

  // insert node at given index
  insert(val, index) {
    if(!Number.isInteger(index) || index < 0 || index > this.length+1) {
      throw("Invalid index");
    }

    if(index == 0) {
      this.prepend(val);
      return this;
    }
    if(index == this.length) {
      this.append(val);
      return this;
    }

    let node = new Node(val);
    let prevNode = this.head;
    for(let k=0; k<index; k++) {
      prevNode = prevNode.next()
    }

    let nextNode = prevNode.next;
    prevNode.next = node;
    nextNode.prev = node;
    node.prev = prevNode;
    node.next = nextNode;
    this.length++
  }

  // remove from end of LL
  pop() {
    if(this.length == 0) throw("Can not remove from empty list");
    let lastVal = this.tail.value;
    if(this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let secondLastNode = this.tail.prev;
      secondLastNode.next = null;
      this.tail = secondLastNode;
    }
    this.length--;
    return lastVal;
  }

  // remove from start
  shift() {
    if(this.length == 0) throw("Can not remove from empty list");
    let firstNode = this.head
    if(this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let secondNode = this.head.next;
      secondNode.prev = null;
      this.head = secondNode;
    }
    this.length--;
    return firstNode.val;
  }

  remove(index) {
    if(!Number.isInteger(index) || index < 0 || index > this.length+1) {
      throw("Invalid index");
    }
    if(index == 0) return this.shift();
    if(index == this.length-1) return this.pop();

    let nodeToRemove = this.head
    for(let k=0; k<index; k++) {
      nodeToRemove = nodeToRemove.next;
    }

    let prev = nodeToRemove.prev;
    let next = nodeToRemove.next;

    prev.next = next;
    next.prev = prev;

    this.length--;
    this.print()
    return nodeToRemove.val;
    

  }

  // remove a node
  detach(node) {
    let prev = node.prev;
    let next = node.mext;
    if(node.prev) {
      prev.next = next;
    }
    if(node.next) {
      next.prev = prev
    }
    this.length--;
  }

  print() {
    if(this.length == 0) return [];
    if(this.length === 1) return [this.head.val]
    let node = this.head;
    
    while(node.next != null) {
      res.push(node.val)
      node = node.next;
    }
    res.push(node.val)
    console.log(res)
  }
}

// Not working
class LRU {
  // use DLL to store most recently used at head and lest recently used at tail
  constructor(cacheSize) {
    this.cacheMap = new Map(); // value => dll Node
    this.cacheSize = cacheSize;
    this.dll = new DoublyLL();
    
  }

  write(val) {
    let existingNode = this.cacheMap.has(val);
    if(existingNode) {
      this.dll.detach(existingNode);
    } else if(this.dll.length == this.cacheSize) {
      delete this.cacheMap[this.dll.tail.key]
      this.dll.pop();
    }

    this.dll.prepend(val);
    this.dll.print()
    this.cacheMap[val] = this.dll.head
  }

  read() {

  }

  pop() {

  }

  // iterate over cache items
  list()  {
    console.log(this.cacheMap.keys())
  }
}

let lru = new LRU(3);
lru.write(5);
lru.write(1);
// lru.write(2);
lru.list()