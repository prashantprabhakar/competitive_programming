/**
 * source: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 */

 /**
  * Problem: Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers which has the largest sum.
  * Version2: Return start and end index of subarray
  */
//  Kadane’s algorithm 
// Does not work for all -ve numbers
function largetSubArraySum(arr) {
    let maxEndingHere = 0, maxSoFar = 0

    for(let i=0; i<arr.length; i++) {
        maxEndingHere = maxEndingHere + arr[i]
        if(maxSoFar < maxEndingHere )maxSoFar = maxEndingHere
        if(maxEndingHere < 0) maxEndingHere = 0
    }

    console.log({maxSoFar})
    return maxSoFar
}

function largetSubArraySum2(arr) {
    let maxEndingHere = 0, maxSoFar = 0

    for(let i=0; i<arr.length; i++) {
        maxEndingHere = Math.max(maxEndingHere, maxEndingHere+arr[i], 0)
        maxSoFar = Math.max(maxSoFar, maxEndingHere)
        //if(maxEndingHere < 0) maxEndingHere = 0
    }

    console.log({maxSoFar})
    return maxSoFar
}

function indexOfLargetSubArray(arr) {
    let maxEndingHere = 0, maxSoFar = 0, start =0, end = 0, _satrt = 0;
    for(let i=0; i<arr.length; i++) {

        maxEndingHere = maxEndingHere + arr[i]

        if(maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere
            start = _satrt
            end = i
        }
        if(maxEndingHere < 0) {
            maxEndingHere = 0
            _satrt = i+1
        }
       
    }
    console.log({maxSoFar, start, end})
}

largetSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3])
largetSubArraySum([-1, -2, -3])

largetSubArraySum2([-2, -3, 4, -1, -2, 1, 5, -3])
largetSubArraySum2([-1, -2, -3])
//indexOfLargetSubArray([-2, -3, 4, -1, -2, 1, 5, -3])
