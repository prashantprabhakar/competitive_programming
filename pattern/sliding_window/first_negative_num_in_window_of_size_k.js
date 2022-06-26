//  GFG
/**
 * https://www.geeksforgeeks.org/first-negative-integer-every-window-size-k/
 */

/**
  Given an array and a positive integer k, find the first negative integer for each window(contiguous subarray) of size k.
  If a window does not contain a negative integer, then print 0 for that window.

    Input : arr[] = {-8, 2, 3, -6, 10}, k = 2
    Output : -8 0 -6 -6

    Input : arr[] = {12, -1, -7, 8, -15, 30, 16, 28} , k = 3
    Output : -1 -1 -7 -15 -15 0
 */


function firstNegative(arr, k) {
    let res = [];
    let negativeNums =  [];
    // case1: check of arr.size < k;

    let i=0, j=0, negIndex = 0;
    while(j < k) {
        if(arr[j] < 0) negativeNums.push(arr[j]);
        j++
    };
    negativeNums.length ? res.push(negativeNums[negIndex]) : res.push(0);
    negIndex = negativeNums.length > negIndex && negativeNums[negIndex] === arr[i] ?  negIndex+1 :  negIndex;

    i++;
    while(j < arr.length) {
        if(arr[j] < 0) negativeNums.push(arr[j]);
        negativeNums.length > negIndex ? res.push(negativeNums[negIndex]) : res.push(0);
        negIndex = negativeNums.length && negativeNums[negIndex] === arr[i] ?  negIndex+1 :  negIndex;
        i++; j++
    }
    console.log(res)
    return res
}

firstNegative([-8, 2, 3, -6, 10], 2)
firstNegative([12, -1, -7, 8, -15, 30, 16, 28], 3)