class MinHeap {

  constructor() {
    this.heap = [];
    this.compare = (a,b) => a > b;
  }

  get size() {
    return this.heap.length;
  }

  get isEmpty() {
    return this.size === 0;
  }

  peek() {
    return this.isEmpty ? undefined : heap[0];
  }

  insert(val) {
    if(val === null || val === undefined) return false
    this.heap.push(val);
    this.heapify(this.heap.length-1);
    this.print()
    return true;
  }

  print() {
    console.log(this.heap)
  }

  getLeftChild = (index) => 2*index + 1;
  getRightChild = index => 2*index + 2;
  getParent = (index) => index === 0 ? null : Math.floor((index-1) / 2)

  heapify(index) {
    let parentIndex = this.getParent(index);
    while(
      index > 0 &&
      this.compare(this.heap[parentIndex], this.heap[index])
    ) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]]
      index = parentIndex
      parentIndex = this.getParent(index)
    }
    
  }
}

module.exports =  MinHeap
