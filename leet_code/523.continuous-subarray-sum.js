/**
 * https://leetcode.com/problems/continuous-subarray-sum/description/
 * Difficulty: Medium
 */

// O(n*n): TLE
function checkSubarraySum(nums, k) {
    for(let i=0; i<nums.length-1; i++) {
        let sum = nums[i];
        for(let j=i+1; j<nums.length; j++) {
            sum += nums[j];
            if(sum === 0 || sum % k === 0) return true;
        }
    }
    return false;
}

// O(n): Solution link: https://leetcode.com/problems/continuous-subarray-sum/solutions/4704366/simple-solution-with-mathematical-explanation
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    // for cases like [3, 3]
    const map = {'0': -1};

    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        let remainder = sum % k;
        // we want subarrays of atleast length 2
        if(i - map[remainder] > 1) {
            return true;
        }
        if(map[remainder] === undefined) {
            map[remainder] = i;
        }
    }
    return false;
   
};