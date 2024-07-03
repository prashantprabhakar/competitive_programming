/**
 * https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves/description/
 * 1509. Minimum Difference Between Largest and Smallest Value in Three Moves
 * Difficulty: Medium
 * Solved: No
 * Topics: Array, Heap
 */


function minDifference(nums) {
    if(nums.length <= 4) return 0;
    nums.sort((a,b) => a-b);
    let result = Math.min();
    let n = nums.length;
    for(let i=0; i<4; i++) {
        result = Math.min(result, nums[n-4+i] - nums[i])
    }
    console.log(result)
    return result
}

minDifference([5,3,2,4]) // 0
minDifference([1,5,0,10,14]) // 1
minDifference([0, 1, 5, 10, 11, 14, 17, 20, 55, 77]) // 17