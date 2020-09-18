

/**
 * Source: https://www.interviewbit.com/problems/wave-array/
 * 
 * Given an array of integers, sort the array into a wave like array and return it,
    In other words, arrange the elements into a sequence such that a1 >= a2 <= a3 >= a4 <= a5.....

    NOTE : If there are multiple answers possible, return the one thats lexicographically smallest.
    So, in example case, you will return [2, 1, 4, 3] 

 */

function wave_array(arr) {
    let sorted = arr.sort((a,b) => a-b)
    let swap = true
    for(let i=1; i<arr.length; i++) {
        if(swap) [sorted[i-1], sorted[i]] = [sorted[i], sorted[i-1]]
        swap = !swap
    }
    return sorted
}

console.log(wave_array([ 6, 17, 15, 13 ])) // expected 13 > 6  < 17  > 15