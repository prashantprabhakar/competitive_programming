/**
 * https://leetcode.com/problems/find-the-winner-of-an-array-game/
 * 
 * 1535. Find the Winner of an Array Game

 */

var getWinner = function(arr, k) {

    console.log(arr.length)
    let streak  = 0;

    if(k >= arr.length) {
        return Math.max.apply(null, arr);
    }

    // This is the index we'll compare 0th element to, since we have already made sure k < arr.length,
    // so we don't need to place the loosing element at last.
    let indexToCompare = 1;
    console.log(arr[6])

    while(streak < k && indexToCompare < arr.length) {
        if(arr[0] >= arr[indexToCompare]) {
            streak++;
        } else {
            arr[0] = arr[indexToCompare];
            streak = 1;
        }
        indexToCompare++;
    }
    return arr[0]
};


console.log(getWinner([1,25,35,42,68,70], 2))