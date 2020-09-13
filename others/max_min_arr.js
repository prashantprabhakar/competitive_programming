/**
 * Given an array A of size N. You need to find the sum of Maximum and Minimum element in the given array.
 */

function findMaxMin(arr) {
    let max = arr[0], min= arr[0]

    for(let i=1; i<arr.length; i++) {
        max = Math.max(max, arr[i])
        min = Math.min(min, arr[i])
    }
    return max+min
}