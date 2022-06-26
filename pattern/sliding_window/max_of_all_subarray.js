/**
    @GFG : https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/
    Sliding Window Maximum (Maximum of all subarrays of size k)
 */

/**
    Given an array and an integer K, find the maximum for each and every contiguous subarray of size k.

    Examples : 

    Input: arr[] = {1, 2, 3, 1, 4, 5, 2, 3, 6}, K = 3 
    Output: 3 3 4 5 5 5 6

    Input: arr[] = {8, 5, 10, 7, 9, 4, 15, 12, 90, 13}, K = 4 
    Output: 10 10 10 15 15 90 90
    Explanation:
    Maximum of first 4 elements is 10, similarly for next 4 
    elements (i.e from index 1 to 4) is 10, So the sequence 
    generated is 10 10 10 15 15 90 90

 */

/**
 * @notice array can have negative numbers 
 */


function maxOfSubArray(arr, k) {
    let res = []

    let i=0, j=0, maxArr = [];

    // pre-window calc
    while(j< k-1) {
        let curr = arr[j];
        //before inserting pop all elem from maxArr less than curr
        let k = maxArr.length-1
        while(maxArr.length && maxArr[k] < curr) {
            maxArr.pop();
            k--;
        }
        maxArr.push(curr)
        j++
    }

    while(j < arr.length) {
        // add jth elem to window
        let curr = arr[j];
        //before inserting pop all elem from maxArr less than curr
        let k = maxArr.length-1
        while(maxArr.length && maxArr[k] < curr) {
            maxArr.pop();
            k--;
        }
        maxArr.push(curr)

        // check result
        maxArr.length ? res.push(maxArr[0]) : -1;

        // remove ith elem from window
        if(maxArr.length && maxArr[0] === arr[i]) maxArr = maxArr.slice(1);


        i++;
        j++;
    }

    console.log(res)
}

maxOfSubArray([1, 2, 3, 1, 4, 5, 2, 3, 6], 3)
maxOfSubArray([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4)