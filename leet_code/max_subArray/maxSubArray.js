/**
 * URL:https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/566/
 * Source: Leetcode
 * algo: Kadane’s Algorithm
 */

/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) 
 * which has the largest sum and return its sum.
 */

/**
 * Example:
 *  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: [4,-1,2,1] has the largest sum = 6. 
 */

// Time: O(n); space:  O(1)
function maxSubArray(arr) {
  let maxEndingHere = 0, maxSoFar = Math.max()

  for(let i=0; i<arr.length; i++) {
    maxEndingHere +=  arr[i]
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
    maxEndingHere = Math.max(maxEndingHere, 0)

  }
  return maxSoFar
}


console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray( [-1,-1, -1]))