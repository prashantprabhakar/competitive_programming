/**
 * URL: https://leetcode.com/problems/jump-game/
 * Source: ['leetcode']
 * difficulty: medium
 */

/**
  Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
  Each element in the array represents your maximum jump length at that position.
  Determine if you are able to reach the last index.
 */

/**
  Input: nums = [2,3,1,1,4]
  Output: true
  Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index

  Input: nums = [3,2,1,0,4]
  Output: false
  Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index. 
 */


function carJump(nums) {

  // base case
  if(nums[0] == 0) return nums.length === 1;

  let maxReachable = 1;
  
  let i=0;
  while(i<=maxReachable) {
    let currentMax = nums[i] === 0 ? 0 : i+ nums[i];
    maxReachable = Math.max(maxReachable, currentMax);
    if(maxReachable >= nums.length-1) return true;
    i++
  }

  
  return false;

}

const inputs = [
  [1,2,3],
  [1,0,1,0],
  [2,3,1,1,4],
  [3,2,1,0,4],
  [0,1, 2],
  [0],
  [1],
  [3,2,1,0,4]
]


const expectedOutput = [true,false, true, false, false, true, true, false]
const outputs = inputs.map(input => carJump(input))
console.log({
  expectedOutput,
  outputs,
})