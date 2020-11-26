
function quickSort(arr, left, right) {
    let len = arr.length, pivot, paritionIndex

    if(left < right) {
        pivot = right
        paritionIndex = 
    }
}

function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot]
    let partitionIndex = left

    for(let i=0; i<right; i++) {
        if(arr[i] < pivotValue) {
            [arr[i], [arr[partitionIndex]]] = [arr[partitionIndex], arr[i]]
            partitionIndex++
        }
    }

}