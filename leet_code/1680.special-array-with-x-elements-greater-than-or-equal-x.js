/**
 * https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x/
 */

function specialArray(nums) {
    nums.sort((a, b) => a-b);
    let n = nums.length
    for(let i=1; i<= n; i++) {
        if(nums[n - i] >= i && (n - i - 1 < 0 || nums[n - i - 1] < i))
            return i
    }
    return -1

}

// return index of largest number that is smaller than "num", else return  -1
function findLargetIndex(nums, num) {
    let index = -1;
    if(num > nums[nums.length-1]) return -1;
    if(num <= nums[0]) return 0
    for(let i=0; i<nums.length; i++) {
        if(nums[i] > num) {
            break;
        }
        index = i;
    }
    return index;
}

console.log(specialArray([3,5]))
console.log(specialArray([0,0]))
console.log(specialArray([0,4,3,0,4]))