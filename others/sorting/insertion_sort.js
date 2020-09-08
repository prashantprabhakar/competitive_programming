/**
 * Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
 * { Stable } sorting algo
 */

 /**
  * Time Complexity: O(n*2)
  * Auxiliary Space: O(1)
  */

function insertionSort(arr) {

    for(let i=1; i<arr.length; i++) {
        let j = i-1
        while(j>=0 && arr[i] <  arr[j]) {
            [arr[j], arr[i]] = [arr[i], arr[j]]
            j--
            i--
        }
    }
    console.log(arr)
}

// we'll try to optimize this by reducing no of swaps required; we can 


let arr = [2,3,1,54,65, -6, 09]
insertionSort(arr)