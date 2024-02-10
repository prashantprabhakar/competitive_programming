// GFG: https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/

/**
    Given two numbers represented by two lists, write a function that returns the sum list. 
    The sum list is a list representation of the addition of two input numbers.
 */

/**
 * 
    Input: 
    List1: 5->6->3 // represents number 563 
    List2: 8->4->2 // represents number 842 
    Output: 
    Resultant list: 1->4->0->5 // represents number 1405 
    Explanation: 563 + 842 = 1405

    Input: 
    List1: 7->5->9->4->6 // represents number 75946
    List2: 8->4 // represents number 84
    Output: 
    Resultant list: 7->6->0->3->0// represents number 76030
    Explanation: 75946+84=76030
 */

function Node(val) {
    this.val = val;
    this.next = null;

    this.printList = () => {
        let out = ``;
        let head = this;
        while(head) {
            out += `${head.val} `;
            head =  head.next
        }
        console.log(out)
    }
}

function addLinkedList(head1, head2) {
    let {head1: h1, head2: h2, len} = prefixZeros(head1, head2);
    h1.printList();
    h2.printList();
    console.log({len})

    let h3 = new Node(0);

    function addTwoNodes(n1, n2) {
        if(n1 === null || n2 === null)  return 0;
        let sum = n1.val + n2.val + addTwoNodes(n1.next, n2.next);

        let intVal = sum % 10;
        let carry = Math.floor(sum / 10);
        let node = new Node(intVal);
        node.next = h3.next;
        h3.next = node;
        
        return carry;
    }

    addTwoNodes(h1, h2)
    h3.printList()

   
}

function prefixZeros(head1, head2) {
    let l1 =0, l2 = 0;
    let start1 = head1, start2 = head2;
    while(start1) {
        l1++;
        start1 = start1.next;
    }
        
    while(start2) {
        l2++;
        start2 = start2.next;
    }

    while(l2 < l1) {
        let node = new Node(0);
        node.next = head2;
        l2++;
        head2 = node;
    }
        
    while (l1 < l2) {
        let node = new Node(0);
        node.next = head1;
        l1++;
        head1 = node;
    }
    return { head1, head2, len: l1};

}

(function (){
    debugger;

    // creating first list
    head1 = new Node(7);
    head1.next = new Node(5);
    head1.next.next = new Node(9);
    head1.next.next.next = new Node(4);
    head1.next.next.next.next = new Node(6);
    console.log("First List is ");
    head1.printList(head1);

    // creating second list
    const head2 = new Node(8);
    head2.next = new Node(4);
    console.log("Second List is \b");
    head2.printList(head2);

    console.log('\n')

    addLinkedList(head1, head2)
})()