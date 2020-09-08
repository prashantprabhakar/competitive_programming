/**
 * Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
 * {Stable} sorting algo
 */

/**
 * Besr case O(n)
 * Worst Case O(n^2)
 * Spce O(1)
 */

function bubbleSort(arr) {

    let isSwapped = true
    while(isSwapped) {
        isSwapped = false
        // loop through arr and sort adjecent elements; we need to stop while loop when no swap is made ( arr is sorted)
        for(let i=0; i<arr.length-1; i++) {
            if(arr[i+1] < arr[i]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                isSwapped = true
            }
        }

    }
    console.log(arr)
}

let arr = [2,3,1,54,65, -6, 09]
bubbleSort(arr)