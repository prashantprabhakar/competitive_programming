/**
 * https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem
 */

function hackerrankInString(s) {
    let arr = ['h', 'a', 'c', 'k', 'e', 'r', 'r', 'a', 'n', 'k']
    let index = 0
    for(let i=0; i<s.length; i++) {
        if(index == arr.length-1) break
        if(s.charAt(i) == arr[index]) {
            index ++
        }
    }
    if(index == arr.length-1) return 'YES'
    else return 'NO'

}


console.log(hackerrankInString('hereiamstackerrank'))