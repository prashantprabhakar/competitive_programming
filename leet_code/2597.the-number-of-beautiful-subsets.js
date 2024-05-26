/**
 * https://leetcode.com/problems/the-number-of-beautiful-subsets/description/
 */

function beautifulSubsets(nums, k) {
    let result = [];
    let partition = [];

    function backtrack(start) {
        if(partition.length) result.push([...partition])
        for(let end= start; end<nums.length; end++) {
           const isDiffFound =  partition.find(num => Math.abs(num - nums[end]) === k);
           if(!isDiffFound) {
                partition.push(nums[end]);
                backtrack(end+1);
                partition.pop()
           }
        }
    }

    backtrack(0)
    return result.length
}

console.log(beautifulSubsets([2,4,6], 2))
console.log(beautifulSubsets([5,2,7], 2))
console.log(beautifulSubsets([1], 1))