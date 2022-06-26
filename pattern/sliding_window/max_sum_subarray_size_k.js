/**
    @GFG: https://www.geeksforgeeks.org/find-maximum-minimum-sum-subarray-size-k/
    Find maximum (or minimum) sum of a subarray of size k
 */

/**
    Given an array of integers and a number k, find the maximum sum of a subarray of size k. 

    Input  : arr[] = {100, 200, 300, 400} | k = 2
    Output : 700

    Input  : arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20} |k = 4 
    Output : 39
 */

function maxSubArraySum(arr, k) {
    let maxSum = 0;
    // handle arr.length  < k based on ques

    let i=0, j=0, tempSum = 0;
    while(j < k) {
        tempSum += arr[j];
        j++;
    }
    maxSum = Math.max(maxSum, tempSum);
    tempSum -= arr[i];
    i++
    while(j < arr.length) {
        tempSum += arr[j];
        maxSum = Math.max(maxSum, tempSum);
        tempSum -= arr[i];
        i++; j++
    }
    console.log(maxSum);
    return maxSum;
}

maxSubArraySum([100, 200, 300, 400], 2)
maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)