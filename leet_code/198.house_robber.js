/**
 * URL: https://leetcode.com/problems/house-robber/
 * title: 198. House Robber
 * sourceL leetcode
 */

/*
    You are a professional robber planning to rob houses along a street. 
    Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

    Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

    Example 1:
        Input: nums = [1,2,3,1]
        Output: 4
        Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
        Total amount you can rob = 1 + 3 = 4.


    Example 2:
        Input: nums = [2,7,9,3,1]
        Output: 12
        Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
        Total amount you can rob = 2 + 9 + 1 = 12.
    

    Constraints:
        1 <= nums.length <= 100
        0 <= nums[i] <= 400


*/

function houseRobber_rec(arr, i=arr.length-1) {
    if(i < 0) return 0;
    if(i == 0) return arr[0];
    if(i===1) return Math.max(arr[0], arr[1])
    return Math.max(
        arr[i] + houseRobber_rec(arr, i-2),
        houseRobber_rec(arr, i-1)
    )
}

function hourseRobber_bottomUpDp(arr) {
    if(arr.length ===  0) return 0
    if(arr.length === 1) return arr[0];

    let dp = [];
    dp[0] = arr[0]
    dp[1] = Math.max(arr[0], arr[1]);

    for(let i=2; i<arr.length; i++) {
        dp[i] = Math.max(arr[i] + dp[i-2], dp[i-1])
    }
    return dp[arr.length-1]
}


function hourseRobber_bottomUpDp_optimized(arr) {
    if(arr.length ===  0) return 0
    if(arr.length === 1) return arr[0];

    let secondLast = arr[0]
    let last = arr[1]

    for(let i=2; i<arr.length; i++) {
        let temp = last;
        last = Math.max(arr[i] + secondLast, last)
        secondLast = temp;
    }
    return Math.max(last, secondLast)
}

function main() {
    const tests = [
        { input: [1,2,3,1], expected: 4},
        { input: [3], expected: 3},
        { input: [2,9,7,3,1], expected: 12},
        { input: [2,1], expected: 2}
    ]

    console.log("\n****** recursion *****")
    tests.forEach(({input, expected}) => {
        let outtput = houseRobber_rec(input);
        console.log({input, expected, outtput})
    })

    console.log("\n****** bottom up do *****")
    tests.forEach(({input, expected}) => {
        let outtput = hourseRobber_bottomUpDp(input);
        console.log({input, expected, outtput})
    })

    console.log("\n****** bottom up dp optimized *****")
    tests.forEach(({input, expected}) => {
        let outtput = hourseRobber_bottomUpDp_optimized(input);
        console.log({input, expected, outtput})
    })
}


main()