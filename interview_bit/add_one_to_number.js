/**
 * https://www.interviewbit.com/problems/add-one-to-number/
 * 
 * i/p: [ 9, 9, 9, 9, 9 ]
 * o/p: [ 1 0 0 0 0 0 ]
 */

function plusOne(arr) {

    // drop 0 start values
    let zeroIndex = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 0) zeroIndex++
        else break
    }

    arr = arr.slice(zeroIndex)
    
    let i=arr.length-1

    while(arr[i] == 9) {
        arr[i] = 0
        i--
    }

    if(i>=0) arr[i] = arr[i]+1
    else arr = [1, ...arr]

    return arr
    
}

//console.log(plusOne([ 1, 9, 9, 9, 9, 9, 9 ]))
console.log(plusOne([1,2,3]))
console.log(plusOne([1,9,9,9,9,9]))
console.log(plusOne([2,9,9,3,4,4,4]))
console.log(plusOne([ 0, 3, 7, 6, 4, 0, 5, 5, 5 ]))