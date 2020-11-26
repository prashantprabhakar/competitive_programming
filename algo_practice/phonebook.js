/**
    * Given a string containing digit form 2-9 return all possible combinations the number could represent by phonebook
    * i/p 23
    * op: ad, ae, af, bd, be, bf, cd, ce, cf
    * sequence doesn't matter
 */

const digitMapping = {
    '1': [],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}


function allPossibleComb(digits, output='') {
    if(digits.length == 0) {
        console.log(output)
        return
    }
    // loop over first all chard of first digit
    let current = digitMapping[digits[0]]
    for(let i=0; i<current.length; i++) {
        //a then b then c
        allPossibleComb(digits.slice(1), output+current[i])
    }
}

function allPossibleComb_v2(digits, output='', index = 0) {
    if(index == digits.length) {
        console.log(output)
        return
    }
    // loop over first all chard of first digit
    let current = digitMapping[digits[index]]
    for(let i=0; i<current.length; i++) {
        allPossibleComb_v2(digits, output+current[i], index + 1)
    }
}


let printAllValues = (prefix, index) => {
    if(!digitMapping[index]) return console.log(prefix)

    for(let i of digitMapping[index]){
        printAllValues(prefix+i, index+1)
    }
}

allPossibleComb(['2', '3', '4'])
console.log("************")

allPossibleComb_v2(['2', '3', '4'])

