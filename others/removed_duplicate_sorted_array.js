/**
 * From: Algoacadmy
 * Remove duplicates from sorted array without using extra space (in-place)
 * i.p: [1,3,3,3, 5,5,7,7,7,7]
 * o/p: [1,3,5,7]
 */

function removeDuplicated(arr) {
    if(!arr.length) return []
    let pointer1 = 0
    
    for(let pointer2=0; pointer2<arr.length; pointer2++) {
        if(arr[pointer2] == arr[pointer1]) continue
        arr[pointer1+1] = arr[pointer2]
        pointer1++
    }
    arr.length = pointer1+1
    return arr
}

removeDuplicated([1,3,3,3, 5,5,7,7,7,7])
removeDuplicated([1,1,1,1,1,1,1,1])
removeDuplicated([])