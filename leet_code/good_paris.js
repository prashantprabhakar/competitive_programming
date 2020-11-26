/**
 * Leet code
 * url: https://leetcode.com/problems/number-of-good-pairs/
 */

/**
 * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 * Return the number of good pairs.
 */

// Space: O(1) Time: O(n*n)
function numIdenticalPairs(arr) {
    let count = 0
    for(let i=0; i<arr.length-1; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] === arr[j]) count++
        }
    }
    return count
}


console.log(numIdenticalPairs([1,2,3,1,1,3]) == 4)
console.log(numIdenticalPairs([1,1,1,1]) === 6)
console.log(numIdenticalPairs([1,2,3]) === 0)