
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

function printList(list) {
    let res = ``
    while(list.next) {
        res += `${list.val} -> `
        list = list.next
    }
    res += list.val
    console.log(res)
}

function convertArrayToList(arr) {
    let list;
    arr.forEach((val, index) => {
        let node = new ListNode(val);
        if(!list) list = node;
        else {
            node.next = list
            list = node
        }
    });
    return list
}

const addTwoNumbers = (l1, l2) => {
    let sumArr = [];
    let carry = 0;


    while(l1 || l2) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let sum = v1 + v2  + carry;
        let unitSum = sum % 10;
        carry = Math.floor(sum / 10);
        sumArr.push(unitSum)


        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    if(carry) sumArr.push(carry)
    

    return convertArrayToList(sumArr)

}

function test() {
    let l1, l2, l3;

    // l1 = convertArrayToList([2,4,3])
    // l2 = convertArrayToList([5,6,4])
    // l3 = addTwoNumbers(l1, l2)
    // printList(l1)
    // printList(l2)
    // printList(l3)

    console.log('\n')
    
    l1 = convertArrayToList([9,9,9,9,9,9,9])
    l2 = convertArrayToList([9,9,9,9])
    l3 = addTwoNumbers(l1, l2)

    printList(l1)
    printList(l2)
    printList(l3)

    
}
test()