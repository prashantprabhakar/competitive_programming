/**
 * Source: https://www.interviewbit.com/problems/noble-integer/
 * 
 * Given an integer array A, find if an integer p exists in the array such that the number of integers greater than p in the array equals to p.
 */

// brute-force approach
function isNobleInt(arr) {
    for(let i=0; i<arr.length; i++) {
        let greater_count = 0;
        for(let j=0; j<arr.length; j++) {
            if(arr[j] > arr[i]) greater_count++
        }
        if(greater_count === arr[i]) return 1
    }
    return -1
}

function isNobleInt1(arr) {
    arr = arr.sort()
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] == arr[i+1]) continue
        else {
            if(arr.length-i-1 == arr[i]) return 1
        } 
    }
    // If last element is 0 then also noble
    if(arr[arr.length-1] == 0) return 1
    return -1

}

console.log(isNobleInt1([3, 2, 1, 3]))