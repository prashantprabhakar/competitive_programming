/**
 * 33. Search in Rotated Sorted Array
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 */

/**
 There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
 */


/**
 * Approach 1:
 *  do binary search, either left or right array will be sorted, if the target is in the sorted array, do binary search on that array, 
 *  else do binary search on the other array, repeat the process until the target is found or the array is empty
 */

function search(nums, target) {

    function binarySearch(start, end) {
        // base case
        if(start > end) {
            return -1;
        }
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        let isLeftSubarraySorted = nums[start] <= nums[mid];
        // if left subarray is sorted, try that path first, else try right subarray
        if(isLeftSubarraySorted) {
            // if number lies in the left subarray do bs
            if(target >= nums[start] && target < nums[mid]) {
                return binarySearch(start, mid - 1);
            }
            return binarySearch(mid + 1, end);
        } else {
            // if number lies in the right subarray do bs
            if(target > nums[mid] && target <= nums[end]) {
                return binarySearch(mid + 1, end);
            }
            return binarySearch(start, mid - 1);
        }
    }

    return binarySearch(0, nums.length - 1);

}

// when can be on right:
//     1. RS is sorted and taget > mid
//     2. LS is sorted and target > mid

// when can be on left:
//     1. LS is sorted and target < mid
//     2. RS is sorted and target < mid;


// test
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([1], 0)); // -1
console.log(search([1], 1)); // 0
console.log(search([1,3], 3)); // 1
console.log(search([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 8)); // 7