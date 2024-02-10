// https://www.geeksforgeeks.org/k-largestor-smallest-elements-in-an-array/

/**
    Question: Write an efficient program for printing k largest elements in an array. Elements in an array can be in any order.
    For example, if the given array is [1, 23, 12, 9, 30, 2, 50] and you are asked for the largest 3 elements i.e., k = 3 then your program should print 50, 30, and 23.
 */

// Time complexity: O(n*2) in each case.. 
function bubbleSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
            }
        }
    }
    return arr
}

// Time complexity: O(n*k)
function findKLargetElement(arr, k) {
    debugger
    for(let i=0; i<arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] < arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
            }
        }
    }
    return arr.slice(0, k);
}



console.log(bubbleSort([1,4,2,3,5]))
console.log(bubbleSort([1, 23, 12, 9, 30, 2, 50]))

console.log(findKLargetElement([1,4,2,3,5], 3))
console.log(findKLargetElement([1, 23, 12, 9, 30, 2, 50], 3))