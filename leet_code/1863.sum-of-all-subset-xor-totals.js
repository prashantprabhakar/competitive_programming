/**
 * https://leetcode.com/problems/sum-of-all-subset-xor-totals/
 * Tags: Array
 */

function subsetXorSum1(nums) {
    let  finalRes = 0;
    function calcSubset(arr, subset, index) {
        const localRes = subset.reduce((acc, curr) => acc ^ curr, 0);
        finalRes +=  localRes
        for(let i=index; i<arr.length; i++) {
            //  include current element in subset
            subset.push(arr[i]);
            calcSubset(arr, subset, i+1);
            // Exclude the current element from the subset (backtracking)
            subset.pop()
        }
    }

    calcSubset(nums, [], 0)
    return finalRes
}

function subsetXorSum(nums) {
    let  finalRes = 0;
    function calcSubset(arr, index, currentXor) {
        finalRes +=  currentXor
        for(let i=index; i<arr.length; i++) {
            //  include current element in xor
            currentXor = currentXor ^ arr[i];
            calcSubset(arr, i+1, currentXor);
            // Exclude the current element from the zor (by xoring again)
            currentXor = currentXor ^ arr[i]
        }
    }

    calcSubset(nums, 0, 0)
    console.log(finalRes)

}

// Number of Subsets of an array of size N = 2^n
function printAllSubsetsOfArray(nums) {

    function calcSubset(arr, subset, res, index) {
        res.push([...subset]);
        for(let i=index; i<arr.length; i++) {
            //  include current element in subset
            subset.push(arr[i]);
            calcSubset(arr, subset, res, i+1);
            // Exclude the current element from the subset (backtracking)
            subset.pop()
        }
    }
    let res = []

    calcSubset(nums, [], res, 0)
    console.log(res)
    
}

subsetXorSum([5,1,6,7]) // 56
subsetXorSum([5,1,6]) // 28
subsetXorSum([3,4,5,6,7,8]) // 480


/**

[5,1,6, 7]

51
56
57
16
17
67

516
517
567
167

5167

*/