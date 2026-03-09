/**
 * https://leetcode.com/problems/subarray-sums-divisible-by-k/
 * Difficulty: Medium
 * TOdo cheat
 */

// Brute foruce: O(n*n): TLE: 66 / 73 testcases passed
var subarraysDivByK1 = function(nums, k) {
    let count = 0;
    for(let i=0; i<nums.length; i++) {
        let sum = nums[i];
        if(sum % k === 0) count++;
        for(let j=i+1; j<nums.length; j++) {
            sum += nums[j];
            if(sum % k === 0) count++;
        }
    }
    return count;
};


function subarraysDivByK(nums, k) {
    let remainder = {};
    let sum = 0;
    let count = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        let r = sum % k;
        
        if(remainder[r] === undefined) {
            remainder[r] = i;
            if(remainder === 0) count++
        } else {
            count++;
        }
    }
    return count;
}

// I think we might user logic used in https://leetcode.com/problems/continuous-subarray-sum/description/

console.log(subarraysDivByK([4,5,0,-2,-3,1], 5)) // 7
