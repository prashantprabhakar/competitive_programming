/**
 * https://leetcode.com/problems/subsets/
 * Tags: Array, backtracking
 */

var subsets = function(nums) {
    const result = [];
    function findAllSubsets(subset, index) {
        result.push([...subset])
        for(let i=index; i<nums.length; i++) {
            subset.push(nums[i]);
            findAllSubsets(subset, i+1);
            subset.pop()
        }
    }
    findAllSubsets([], 0)
    return result
};


console.log(subsets([1,2,3]))