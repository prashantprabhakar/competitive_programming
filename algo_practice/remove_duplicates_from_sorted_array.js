/**
 * Write a fn to remove duplicates in sorted array in O(n) time and O(n) space
 */


function removeDuplicate(arr) {
    let current_index = 0

    for(let i=0; i<arr.length; i++) {
        if(arr[i] != arr[i+1]) {
            arr[current_index] = arr[i]
            current_index++
        }
    }
    arr.length = current_index // to remove last unused elements
    return arr    
}

removeDuplicate([1,2,2,2,2,3,4,5,5, 6])