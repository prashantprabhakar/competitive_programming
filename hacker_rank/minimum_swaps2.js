/**
 * source: hackerrank
 * URL: https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

/**
 * You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
 * You are allowed to swap any two elements. 
 * You need to find the minimum number of swaps required to sort the array in ascending order.
 * i/p: [7,1,3,2,4,5,6] o/p: 5
 */


/**
 * Algo
 * Build an array of indexes of the values in the input: indexes[arr[i] - 1] = i;.
 * Iterate over the input array, and when arr[i] != i + 1, then swap arr[i] with arr[indexes[i]], and update the index of the original value of arr[i].
 */
function minimumSwaps(arr) {
    // indexes store 
    let indexes = []
    for(let i=0; i<arr.length; i++) {
        indexes[arr[i]-1] = i
    }


    let swapCount = 0
    for(let i=0; i<arr.length; i++) {
        // If value is not at it's correct position; bring the correct value here
        if(arr[i] !== i+1) {
            let orig = arr[i]
            swap(arr, i, indexes[i])
            indexes[orig-1] = i
            swapCount++
        }
    }

    return swapCount
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6]))
console.log(minimumSwaps([4,3,1,2]))