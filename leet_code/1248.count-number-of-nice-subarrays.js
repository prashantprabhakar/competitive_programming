/**
 * https://leetcode.com/problems/count-number-of-nice-subarrays/description/
 * 1248. Count Number of Nice Subarrays
 * Difficulty: Medium
 * Tags: 3 pointer sliding window
 */

function numberOfSubarrays(nums, k) {
    let l=0, m = 0, r=0, oddCount = 0, result = 0;

    while(r < nums.length) {
        if(nums[r] %2 === 1) {
            oddCount++;
        }

        while(oddCount > k) {
            if(nums[l] % 2 === 1) oddCount--;
            l++;
            m = l
        }
        
        if(oddCount === k) {
            while(nums[m]%2 === 0) m++;
            result += m - l + 1;
        }

        r++
    }
    return result;
};

console.log(numberOfSubarrays([1,1,2,1,1], 3)) // 2
console.log(numberOfSubarrays([2,4,6], 1)) // 0
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2)) // 16