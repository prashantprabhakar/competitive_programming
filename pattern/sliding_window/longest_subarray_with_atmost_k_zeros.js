/**
    Problem: Longest Subarray With At Most K Zeros

    You are given:
    Binary array nums
    Integer K

    You may flip at most K zeros to ones.
    Return the maximum length of a subarray containing only 1s after flipping.
1
    nums = [1,1,1,0,0,0,1,1,1,1,0]
    K = 2
    Output: 6

 */

    // This problem is same as longet substr (or window) with at most k zeroes... 

function longestSubArrayWithAtmostKZeroes(nums, k) {
    const len = nums.length;

    let left = 0;
    let zeroCount = 0;
    let result = 0;
    let right = 0;

    while(right < len) {
        if(nums[right] === 0) {
            zeroCount++;
        }

        // Make window valid
        while(zeroCount > k && left < len) {
            if(nums[left] === 0) zeroCount--;
            left++;
        }

        // window size
        const windowLen = right - left + 1;
        result = Math.max(result, windowLen)

        right++;

    }
    return result;
}