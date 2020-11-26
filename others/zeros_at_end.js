/**
 * Write a function to reorder the elements of an array so that all zeros occur at the end
 * Try not using extra space
 */

function zeros_at_end(arr) {
    let pointer1 = 0 // pointer to keep track of non zero values
    for(let pointer2 = 0; pointer2 < arr.length; pointer2 ++) {
        if(arr[pointer2] == 0) continue
        arr[pointer1++] = arr[pointer2]
    }
    // add zero at all remaining place
    for(let i=pointer1; i<arr.length; i++) arr[i] = 0
    return arr
}

console.log(zeros_at_end([1,0,2,0,9,0,0,3]))