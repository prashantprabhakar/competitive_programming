/**
 * 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit
 * https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/
 * Difficulty: medium
 * Solved: No
 */


// TLE: 58/61 cases passed
function longtestSubarray1(nums,limit) {
    let left = 0, right = 0;
    let result = 0, count  = 0;
    let max =nums[0], min = nums[0]
    // increment right until array is not valid
    // increment left till array becomes valid again
    while(right < nums.length) {
        max = Math.max(max, nums[right]);
        min = Math.min(min, nums[right]);
        let isValid = max - min <= limit;
        console.log({ right, max, min, isValid})

        if(isValid) {
            count++;
            right++;
        } else {
            result = Math.max(result, count)
            count = 0;
            left++;
            right = left+1;
            max = nums[left];
            min = nums[left]
        }
    }
    result = Math.max(result, count)
    return result;
}

/**
 * 
 * Solution copied from https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/solutions/5354780/beats-100-explained-with-video-c-java-python-js-sliding-window-interview-solution
 */
function longtestSubarray(nums,limit) {
    let increase = [], decrease = [];
    let max = 0, left = 0;
    for(let i=0; i<nums.length; i++) {
        while(increase.length && nums[i] < increase[increase.length-1]) {
            increase.pop();
        }
        increase.push(nums[i]);

        while(decrease.length && nums[i] > decrease[decrease.length-1]) {
            decrease.pop();
        }
        decrease.push(nums[i]);

        while(decrease[0]  - increase[0] > limit) {
            if(nums[left] === decrease[0]) decrease.shift();
            if(nums[left] === increase[0]) increase.shift();
            left++
        }
        max = Math.max(max, i - left + 1);
    }
    return max;
}

console.log(longtestSubarray([8,2,4,7], 4)) // 2
console.log(longtestSubarray([2,5,2], 7))
