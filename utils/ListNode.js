function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

ListNode.prototype.printList = function() {
    let out = ``;
    let head = this;
    while(head.next) {
        out += `${head.val} -> `;
        head =  head.next
    }
    out += head.val
    console.log(out)
}

//export default ListNode;
module.exports = ListNode