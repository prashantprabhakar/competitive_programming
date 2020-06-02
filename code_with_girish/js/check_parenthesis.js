let Stack = require('./stack')

// lets expect paranthesis will be in array
function balancedParanthesis(str) {
    let stack = new Stack()
    for(let i=0; i<str.length; i++) {
        if(str.charAt(i) == '(') stack.push('(')
        if(str.charAt(i) == ')') {
            if(stack.IsEmpty()) return false
            stack.pop()
        }
    }
    return stack.IsEmpty()
}


function checkBodmasBracketsUsingStack(str) {
    let stack = new Stack()
    let start_brackets = ['[', '{', '(' ]
    let end_brackets = [']', '}', ')' ]
    for(let i=0; i< str.length; i++) {
        let char = str.charAt(i)
        if(start_brackets.includes(char)) {
            stack.push(char)
        }

        if(end_brackets.includes(char)) {
            if(stack.IsEmpty()) return false
            let elem = stack.pop()
            let end_brackets_index = end_brackets.indexOf(char)
            let start_brackets_index = start_brackets.indexOf(elem)
            if(end_brackets_index != start_brackets_index) return false
        }
    }

    return stack.IsEmpty()
}

function checkBodmasBracketsUsingStackUsingArray(str) {
    let stack = []
    let start_brackets = ['[', '{', '(' ]
    let end_brackets = [']', '}', ')' ]
    for(let i=0; i< str.length; i++) {
        let char = str.charAt(i)
        if(start_brackets.includes(char)) {
            stack.push(char)
        }

        if(end_brackets.includes(char)) {
            if(stack.length == 0) return false
            let elem = stack.pop()
            let end_brackets_index = end_brackets.indexOf(char)
            let start_brackets_index = start_brackets.indexOf(elem)
            if(end_brackets_index != start_brackets_index) return false
        }
    }

    return stack.length == 0

}

// Tests

console.log(balancedParanthesis('((()))') === true)
console.log(balancedParanthesis('(())(()') === false)
console.log(balancedParanthesis('))') === false)
console.log(balancedParanthesis('(((())(()()))') === false)
console.log(balancedParanthesis('(((())((()))') === false)
console.log(balancedParanthesis('(((())(()())))') === true)


console.log("\n")

console.log(checkBodmasBracketsUsingStack('[()]{}{[()()]()}') === true)
console.log(checkBodmasBracketsUsingStack('[(])') === false)


console.log("\n")
console.log(checkBodmasBracketsUsingStackUsingArray('[()]{}{[()()]()}') === true)
console.log(checkBodmasBracketsUsingStackUsingArray('[(])') === false)
