/**
 * Given a string "aaabbbcc", compress it, = "a3b3c2" . Given that output string's length is always smaller than input string, you have do it inplace. 
 * i/p: aaaabbccaaa o/p: a4b2c2a3 
 * i/p: abbc o/p: ab2c
 */


function compress(str) {
    if(str.length === 0) return '' // base case
    let output = '' 
    let currentChar = str[0]
    let counter = 1
    for(let i=1; i<str.length; i++) {
        if(str[i] === currentChar) {
            counter++
        }
        else {
            output +=  counter === 1 ? currentChar : `${currentChar}${counter}`
            counter = 1;
            currentChar = str[i]
        }
    }
    output += counter === 1 ? currentChar : `${currentChar}${counter}`
    return output;
}

// @TODO - NOt working
// don't use extra space
function inplaceCompression(str) {
    if(str.length === 0) return '' // base case
    let currentIndex = 0 // to keep track of index where we are writing...
    let currentChar = str[0]
    let counter = 1
    for(let i=1; i<str.length;i++) {
        if(str[i] === currentChar) {
            counter++
        } else {
            let replacementChar = currentChar
            if(counter > 1) replacementChar += counter
            str = str.replace_char_at(currentIndex, replacementChar)
            //console.log({str, currentIndex, replacementChar})
            currentIndex += replacementChar.length
            // Need tp update "i" as well with counter - replacementChar.length
            i += counter - replacementChar.length - 1
            currentChar = str[i]
            counter = 1
            i--; // since i++ will be done
        }
    }

    // last char
    let replacementChar = currentChar
    if(counter > 1) replacementChar += counter
    str = str.replace_char_at(currentIndex, replacementChar)
    currentIndex += replacementChar.length
    console.log({counter, currentIndex, str})
    return str.slice(0, currentIndex)

}

String.prototype.replace_char_at = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}





console.log(compress('aaabbbcc'))
console.log(compress('abc'))
console.log(compress('a'))

console.log('\n')
console.log(inplaceCompression('aaabbbcc'))
console.log(inplaceCompression('abc'))
console.log(inplaceCompression('a'))




// emp: emp_id, emp_name, salary, dept_id
// dept: dept_id, dept_name, location

//1. Total salary based on location
// select sum(salary), location,
// from emp 
// right join emp.dept_id = dept.id
// group by location


// 2. for each location, top salaried employee





