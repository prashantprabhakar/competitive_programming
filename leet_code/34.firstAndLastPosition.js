/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 */

function searchRange(nums, target) {
    function binarySearch(nums, target, start, end) {
        if(start > end) return [-1, -1];
        if(start === end) return nums[start] === target ? [start, start] : [-1, -1]
        let mid = start + Math.floor((end-start) / 2);
        const midNum = nums[mid]
        if(midNum < target) {
            // search in right part
            return binarySearch(nums, target, mid+1, end);
           
        } else if(midNum > target) {
           // search in left part
           return binarySearch(nums, target, start, mid-1);
        } else {
            if(end-start === 1) {
                let firstIndex = -1, lastIndex = -1
                if(nums[start] === target){
                    firstIndex = start;
                    lastIndex = start;
                }
                if(nums[end] === target) {
                    if(firstIndex == -1) firstIndex = end;
                    lastIndex = end;
                }
                return [firstIndex, lastIndex]
            } else {
                let lastIndex = binarySearch(nums, target, mid, end, false)[1];
                let firstIndex = binarySearch(nums, target, start, mid, true)[0];
                return [firstIndex, lastIndex];
            }
        }
    }

    return binarySearch(nums, target, 0, nums.length-1)
}

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([8,8], 8))
console.log(searchRange([8], 8))