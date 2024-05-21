/**
 * https://leetcode.com/problems/find-the-maximum-sum-of-node-values/description/
 * difficulty: hard
 * Tags: Array, DP. tree,
 * 
 * Solution: https://www.youtube.com/watch?v=bnBp6_b4GCw
 */


// my initial approcch: doesn't work
function maximumValueSum1(nums, k ,edges) {
    let originalNumSum = nums.reduce((acc, curr) => acc + curr, 0);
    let maxSum = originalNumSum;

    function rec(nums, sum, isVisied) {
        for(let i=0; i<edges.length; i++) {
            if(isVisied[i]) continue
            let [u,v] = edges[i];
            let originalU = nums[u], originalV = nums[v];
            let xoedVal = nums[u] ^ k + nums[v] ^ k;
            let currentSum = sum - (originalU + originalV) + xoedVal
            maxSum  = Math.max(maxSum, currentSum);
            isVisied[i] = true
            // now let's 
            rec(nums, sum, isVisied)
            // backtrack
            nums[u] = originalU;
            nums[v] = originalV;
            
        }
    }

    rec(nums, maxSum, {})
    
    return maxSum;

}

function maximumValueSum(nums, k, edges) {
    // find if node val will increase or decrease after xor
    const delta = nums.map(num => (num ^ k) - num);
    delta.sort((a,b) => b-a);
    let maxSum = nums.reduce((acc, curr) => acc+curr, 0)
    for(let i=0; i<nums.length-1; i+=2) {
        let sum = delta[i] + delta[i+1];
        if(sum > 0) {
            maxSum += sum;
        }
    }
    return maxSum
}
0 
console.log(maximumValueSum([1, 2, 1], 3, [[0,1],[0,2]])) // 6
console.log(maximumValueSum([2, 3], 7, [[0,1]])) // 9
console.log(maximumValueSum([1, 1, 1], 3, [[0,1],[0,2]])) // 5
console.log(maximumValueSum([24,78,1,97,44], 6, [[0,2],[1,2],[4,2],[3,4]])) // 260
