

/**
 * Replace all hashes with pqr and return value at given index in sorted order
 */

function getAllpqr(str, index) {

    let hashIndex = []
    let combinations = []
    let chars = ['p', 'q', 'r']

    for(let i=0; i<str.length;i++) {
        if(str.charAt(i) == "#") hashIndex.push(i)
    }

    
    // complexity : no_of_hash * 3
    for(let j=0; j<chars.length; j++) {
        let currentChar = chars[j]
        let withoutHashStr = _replaceAllOccurance(str, "#", currentChar)
        if(!combinations.includes(withoutHashStr)) combinations.push(withoutHashStr)
        for(let i=hashIndex.length-1; i>=0; i--) {
            if(currentChar != 'p') {
                let replaced = _replaceCharAt(withoutHashStr, hashIndex[i], 'p')
                if(!combinations.includes(replaced)) combinations.push(replaced)
            }
            if(currentChar != 'q') {
                let replaced = _replaceCharAt(withoutHashStr, hashIndex[i], 'q')
                if(!combinations.includes(replaced)) combinations.push(replaced)
            }
            if(currentChar != 'r') {
                let replaced = _replaceCharAt(withoutHashStr, hashIndex[i], 'r')
                if(!combinations.includes(replaced)) combinations.push(replaced)
            }
        }
    }

    //console.log(combinations)
    console.log(combinations.sort())

    return combinations.sort()
}


function _replaceCharAt(str, index, replaceWith) {
    return str.slice(0,index) + replaceWith + str.slice(index+1)
}

function _replaceAllOccurance(str, replaceChar, replaceWith) {
    return str.split('').map(char => char !== replaceChar ? char : replaceWith).join('')
}

let res = getAllpqr('#pq#')
console.log(res.length)

//let expected = ['pqrpp','pqrpq','pqrpr','pqrqp','pqrqq','pqrqr','pqrrp','pqrrq','pqrrr']


