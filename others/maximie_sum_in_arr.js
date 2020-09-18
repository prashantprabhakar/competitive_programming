/**
 * https://www.geeksforgeeks.org/window-sliding-technique/
 */

/**
 * Given an array of integers of size ‘n’.
    Our aim is to calculate the maximum sum of ‘k’ 
    consecutive elements in the array.
 */

function maxSum(arr, k) {
    let maxSum = Math.max() // -Infinity

    if(arr.length < k) throw("Invalid  k value")

    let windowSum = 0

    // calculate sum of first window
    for(let i=0; i<k; i++) {
        windowSum += arr[i]
    }

    // slide window
    for(let i=0; i<arr.length-k; i++) {
        windowSum = windowSum - arr[i] + arr[i+k]
        maxSum = Math.max(windowSum, maxSum)

    }

    console.log(maxSum)

}

maxSum([100, 200, 300, 400], 2) // 700
maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
