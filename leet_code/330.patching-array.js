/**
 * https://leetcode.com/problems/patching-array/description/
 * Difficulty: Hard
 */

function minPatches(nums, n) {
    let i=0, result = 0, upto = 0;
    while(upto <n) {
        if(i<nums.length && nums[i] <= upto+1) {
            upto += nums[i];
            i++;
        } else {
            result++;
            upto += (upto+1)
        }
    }
    console.log(result)
    return result
}
minPatches([1,3], 6) // 1
minPatches([1,5,10], 20) // 2
minPatches([1,2,2], 5) //0
process.exit()