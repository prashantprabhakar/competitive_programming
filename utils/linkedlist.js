function ListNode(val, next){
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

exports.ListNode = ListNode

exports.arrayToList = arr => {
    let head = node = new ListNode(arr[0])
    for(let i=1; i<arr.length; i++) {
        node.next = new ListNode(arr[i]);
        node = node.next;
    }
    return head;
}

exports.listToArray = head => {
    let arr = [];
    while(head) {
        arr.push(head.val);
        head = head.next;
    }
}

