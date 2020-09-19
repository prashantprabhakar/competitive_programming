/**
 * source: hackerrank
 * URL: https://www.hackerrank.com/challenges/array-left-rotation/problem
 */

/**
 * A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer,
 * rotate the array that many steps left and return the result.
 * 
 * i/p: [1,2,3,4,5] r=2
 * o/p: [3,4,5,1,2]
 */

function rotateLeft(arr,r) {
    let actualR = (r < arr.length) ? r : r%arr.length
    return [...arr.slice(actualR), ...arr.slice(0, actualR)]
}


function rotateArrayWithoutLiberary(arr, r) {
    // needs extra o(n) space and O(n) times
    let actualR = (r < arr.length) ? r : r%arr.length
    let res = []
    let l = arr.length
    for(let i=actualR; i<arr.length; i++) {
       res.push(arr[i])
    }
    for(let i=0; i<actualR; i++) {
        res.push(arr[i])
    }
    return res
}

console.log(rotateLeft([1,2,3,4,5], 2))
console.log(rotateArrayWithoutLiberary([1,2,3,4,5], 2))