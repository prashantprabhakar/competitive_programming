let Stack = require('./stack')
let stack = new Stack()

/**
 * calculates post fix operation
 * assumes expression is correct; no extra checks are added for simplicity
 * assumes number will be seperated by spance
 */
function postFix(str) {
    let arr = str.split(" ")
    let expressions = ['+', '-', '*', '/']

    for(let i=0; i<arr.length; i++) {
        if(expressions.includes(arr[i])) {
            let first_number = stack.pop()
            let second_number = stack.pop()
            let res = solveExpression(second_number, first_number, arr[i])
            stack.push(res)
        } else {
            stack.push(arr[i])
        }
        
    }
    return stack.pop()
}

function solveExpression(a, b, operator) {
    a = Number(a)
    b = Number(b)
    switch(operator) {
        case '+': return a+b
        case '-': return a-b
        case '*': return a*b
        case '/': return a/b
    }
}

console.log(postFix("2 3 1 * + 15 -")) // 10
