/**
 * source: https://www.geeksforgeeks.org/largest-sum-contiguous-subarray-having-unique-elements/
 * company: PayTm
 */

/**
 * Given an array arr[] of N positive integers, the task is to find the subarray having maximum sum among all subarrays having unique elements and print its sum.
 * Input arr[] = {1, 2, 3, 3, 4, 5, 2, 1}
 * Output: 15
 * Explanation:
    The subarray having maximum sum with distinct element is {3, 4, 5, 2, 1}.
    Therefore, sum is = 3 + 4 + 5 + 2 + 1 = 15

    Input: arr[] = {1, 2, 3, 1, 5}
    Output: 11
    Explanation:
        The subarray having maximum sum with distinct element is {2, 3, 1, 5}.
        Therefore, sum is = 2 + 3 + 1 + 5 = 11.
 */

// @dev: This solution fails for all negative numbers ;p
// Time O(n) Space O(n)
function largetSumInSubArrayWithUniqueConstraint(arr) {
    let i=0, j=1 // start and end index of subarray
    let map = new Map() // to store unique elements
    
    map.set(arr[0], 1)
    
    let sum = arr[0] // current Max sum
    let maxSum = arr[0] // globalMaxSum

    while(i<arr.length-1 && j <arr.length) {

        //if element found is unique add it to sum and track max Sum
        if(!map.has(arr[j])) {
            sum += arr[j]
            maxSum = Math.max(sum, maxSum) // this contains max sum from i to j

            map.set(arr[j], 1)
            j+=1
        
        } else {
            // in case an element is found to be existing in current map;
            // we'll remove "i" and from maps and calculations and move i pointer by 1
            // means maxSum till now denotes maxSum we can get if we start from "i"
            sum -= arr[i]
            map.delete(arr[i])
            i += 1
        }
    }
    return maxSum

}

console.log(largetSumInSubArrayWithUniqueConstraint([1, 2, 3, 3, 4, 5, 2, 1]))

console.log(largetSumInSubArrayWithUniqueConstraint([-1, -2, -3, -4]))