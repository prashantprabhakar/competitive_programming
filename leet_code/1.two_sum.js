/**
 * URL:https://leetcode.com/problems/two-sum/
 * tag: leetcode
 */

/**
 * Statement: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twic
 * You can return the answer in any order.
 */


// O(n)- accepted
function twoSum(nums, target) {
  let obj = {}
  for(let i=0; i<nums.length; i++) {
    let requiredNum = target - nums[i]
    if(obj.hasOwnProperty(requiredNum)) {
      return [obj[requiredNum], i]
    }
    obj[nums[i]] = i
  }
  return [-1, -1]
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))