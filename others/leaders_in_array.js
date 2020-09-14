/**
 * source: https://www.interviewbit.com/problems/leaders-in-an-array/
 * Topic: Array
 * Difficulty: Easy
 */

/**
 * Given an integer array A containing N distinct integers, you have to find all the leaders in the array A.

    An element is leader if it is strictly greater than all the elements to its right side.

    NOTE:The rightmost element is always a leader.
 */

function findAllLeaders(arr) {

    // base case
    if(arr.length == 0) return []

    let right_max = arr[arr.length-1]
    let leaders = [arr[arr.length-1]]
    for(let i=arr.length-2; i>=0; i--) {
        if(arr[i] > right_max) leaders.push(arr[i])
        right_max = Math.max(right_max, arr[i])
    }
    return leaders
}

console.log(findAllLeaders([16, 17, 4, 3, 5, 2]))