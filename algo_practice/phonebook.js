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
[]

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

allPossibleComb(['2', '3', '4'])