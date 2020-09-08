/**
 * .reverse each word in a given string seperated by a .
        Input : pqr.mno
        output: mno.pqr
 */

function reverseByDot(str) {
    let arr = str.split('.')
    for(let i=0; i<Math.ceil(arr.length/2); i++) {
        [arr[i], arr[arr.length-1]] =  [arr[arr.length-1], arr[i]]
    }
    console.log(arr.join('.'))
}

// Reverse array
function reverseArray(arr) {
    for(let i=0; i<Math.ceil(arr.length/2); i++) {
        [arr[i], arr[arr.length-i-1]] =  [arr[arr.length-i-1], arr[i]]
    }
    console.log(arr)
}


reverseArray([1,2,3,4,5])
reverseArray([1,2,3,4])

reverseByDot('pqr.mno')