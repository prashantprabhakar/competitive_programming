/**
 The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.

    1) The subarray which is already sorted.
    2) Remaining subarray which is unsorted.

    In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray.

    Following example explains the above steps:

        arr[] = 64 25 12 22 11

        // Find the minimum element in arr[0...4]
        // and place it at beginning
        11 25 12 22 64

        // Find the minimum element in arr[1...4]
        // and place it at beginning of arr[1...4]
        11 12 25 22 64

        // Find the minimum element in arr[2...4]
        // and place it at beginning of arr[2...4]
        11 12 22 25 64

        // Find the minimum element in arr[3...4]
        // and place it at beginning of arr[3...4]
        11 12 22 25 64 
*/

/**
 * Best for partially sorted array
 * Time O(n*2)
 * Space O(1)
 */

function selectionSort(arr) {
    for(let i=0; i<arr.length-1; i++) {
        let min_index = i
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min_index]) {
                min_index = j
            }
        }
        // swap min index with first element
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]]
    }
    console.log(arr)
}


let arr = [2,3,1,54,65, -6, 09]
selectionSort(arr)