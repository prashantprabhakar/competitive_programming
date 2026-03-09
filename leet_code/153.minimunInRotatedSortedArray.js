/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description
 * 153. Find Minimum in Rotated Sorted Array
 * difficulty: medium
 * tags: binary search
 */

/**
    Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

    [4,5,6,7,0,1,2] if it was rotated 4 times.
    [0,1,2,4,5,6,7] if it was rotated 7 times.
    Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

    Given the sorted rotated array nums of unique elements, return the minimum element of this array.

    You must write an algorithm that runs in O(log n) time

    Constraints:

        n == nums.length
        1 <= n <= 5000
        -5000 <= nums[i] <= 5000
        All the integers of nums are unique.
        nums is sorted and rotated between 1 and n times.
 */

// recursive approach
function findMin_rec(nums) {

    function binarySearch(start, end, currentMin) {
        if (end < start) return currentMin;
        if (start === end) return Math.min(currentMin, nums[start]);

        const mid = Math.floor((end + start) / 2);
        currentMin = Math.min(currentMin, nums[mid]);
        const isLeftSorted = nums[start] <= nums[mid];
        const isRightSorted = nums[mid] <= nums[end];

        if (isLeftSorted && isRightSorted) {
            return Math.min(currentMin, nums[start]);
        }
        if (isLeftSorted) {
            return binarySearch(mid + 1, end, currentMin);
        }
        return binarySearch(start, mid - 1, currentMin);
    }

    return binarySearch(0, nums.length-1, nums[0])

}

// use iterative approach
// The key insight for finding the minimum element in a rotated sorted array is that 
// the smallest element is the point where the rotation occurs. This point is always in the unsorted part of the array. 
function findMin(nums) {
    let start = 0, end = nums.length-1;
    let currentMin = nums[0];
    while(start <= end) {
        const mid = Math.floor((end + start) / 2);
        currentMin = Math.min(currentMin, nums[mid]);
        // Check if the right subarray is sorted
        if (nums[mid] <= nums[end]) {
            // If the right subarray is sorted, the minimum must be in the left subarray
            end = mid - 1;
        } else {
            // If the left subarray is sorted, the minimum must be in the right subarray
            start = mid + 1;
        }
    }
    return currentMin;
}


console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17])); // 11
console.log(findMin([2, 1])); // 1
console.log(findMin([1])); // 1
console.log(findMin([13, 14, 15, 16, 1, 2, 3])); // 1
console.log(findMin([2,3,4,5,6,7, 1])) // 1
console.log(findMin([1, 2,3,4,5,6,7])) // 1