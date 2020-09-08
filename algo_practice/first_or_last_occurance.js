
/**
 * array is sorted but can have no repetitive values
 */

function binarySearch(arr, num, start=0, end=arr.length-1) {

    // case when to stop
    if(start == end) return start == num ? start : -1

    let medianIndex = Math.floor((start+end)/2)
    let medianValue = arr[medianIndex]
    if(medianValue > num) {
        // search in left part
        return binarySearch(arr, num, start, medianIndex)
    } else if(medianValue < num) {
        // search right part
        return binarySearch(arr, num, medianIndex+1, end)
    } else {
        return medianIndex
    }

}


function binarySearchWithRepetation(arr, num, start=0, end=arr.length-1) {
    // base case
    if(start == end) return start == num ? start : -1
    let medianIndex = Math.floor((start+end)/2)
    let medianValue = arr[medianIndex]
    if(medianValue > num) {
        // search in left part
        return binarySearchWithRepetation(arr, num, start, medianIndex)
    } else if(medianValue < num) {
        // search right part
        return binarySearchWithRepetation(arr, num, medianIndex+1, end)
    } else {
        // if number is same and a number exists on left is same then we should look left else current no is answer
        if(medianIndex == 0 || arr[medianIndex-1] != num) return medianIndex
        return binarySearchWithRepetation(arr, num, start, medianIndex)
    }
}


function binarySearchWithRepetationUsingIteration(arr, num, start=0, end=arr.length-1) {

    // base cases
    if(arr.length == 0) return -1
    
    while(start <= end) {

        if(start == end) return arr[start] == num ? 0 : -1

        let medianIndex = Math.floor((start+end)/2)
        let medianValue = arr[medianIndex]

        if(medianValue < num) {
            start = medianIndex+1
        } else if(medianValue > num) {
            end = medianIndex
        } else {
            if(medianIndex == 0 || arr[medianIndex-1] != num) return medianIndex
            else end = medianIndex
        }
    }


}

let recursionCount = 0
function firstAndLastOccurance(arr, num, start=0, end=arr.length-1, isFirstOcc) {
    recursionCount++
    // base case
    if(!arr.length) return -1
    if(start == end) return arr[start] == num ? start : -1
    let medianIndex = Math.floor((start+end)/2)
    let medianValue = arr[medianIndex]
    if(medianValue > num) {
        // search in left part
        return firstAndLastOccurance(arr, num, start, medianIndex, isFirstOcc)
    } else if(medianValue < num) {
        // search right part
        return firstAndLastOccurance(arr, num, medianIndex+1, end, isFirstOcc)
    } else {
        // if number is same and a number exists on left is same then we should look left else current no is answer
        if(isFirstOcc) {
            return (medianIndex == 0 || arr[medianIndex-1] < num) ? medianIndex : firstAndLastOccurance(arr, num, start, medianIndex, isFirstOcc)
        } else {
            return (medianIndex == arr.length-1 || arr[medianIndex+1] > num) ? medianIndex : firstAndLastOccurance(arr, num, medianIndex+1, end, isFirstOcc)
        }
    }
}

let iterationCount = 0
function firstAndLastOccuranceWithIteration(arr, num, start=0, end=arr.length-1) {

    // base cases
    if(arr.length == 0) return [-1, -1]

    let firstOccurance = -1, lastOccurance = -1
    let firstIndexOfNumberFound = -1

    while(start <= end) {

        iterationCount++
        if(start == end) {
            let retVal = arr[start] == num ?  start : -1
            if(firstOccurance == -1) firstOccurance = retVal
            if(lastOccurance = -1) lastOccurance = retVal
            break;
        }

        if(firstOccurance != -1 && lastOccurance != -1) break

        let medianIndex = Math.floor((start+end)/2)
        let medianValue = arr[medianIndex]

        if(medianValue < num) {
            start = medianIndex+1
        } else if(medianValue > num) {
            end = medianIndex
        } else {
            if(firstIndexOfNumberFound == -1) firstIndexOfNumberFound = medianIndex
            
            if(firstOccurance == -1) {
                if(medianIndex == 0 || arr[medianIndex-1] != num) firstOccurance = medianIndex
                else end = medianIndex
            } else {
                // we can start from firstIndexOfNumberFound
                if(medianIndex < firstIndexOfNumberFound )medianIndex = firstIndexOfNumberFound
                if(medianIndex == arr.length-1 || arr[medianIndex+1] != num) lastOccurance = medianIndex
                else start = medianIndex+1; end = arr.length-1
            }

        }
    }

    return [firstOccurance, lastOccurance]


}


function driver(arr, num) {
    let first = firstAndLastOccurance(arr, num, 0, arr.length-1, true)
    let last = firstAndLastOccurance(arr, num, first, arr.length-1, false)
    return [first, last]
}

let input = []

for(let i=0; i<50000000; i++) {
    // if(i<1) input.push(1)
    // else if (i < 5) input.push(2)
    // else if(i<4000000) input.push(5)
    // else input.push(7)
    input.push(5)
}


console.time("Binary Search approach")
// console.log(driver([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,],5))
// console.log(driver([2,3,5,5,5,6,6,8,9,9,9],5))
// console.log(driver([9,10], 9))
// console.log(driver([],0))
console.log(driver(input, 7))
console.timeEnd("Binary Search approach")

console.log('\n')

console.time("Optimized iteration approach")
// console.log(firstAndLastOccuranceWithIteration([5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,],5))
//console.log(firstAndLastOccuranceWithIteration([2,3,5,5,5,6,6,8,9,9,9],5))
//console.log(firstAndLastOccuranceWithIteration([9,10], 9))
//console.log(firstAndLastOccuranceWithIteration([],0))
console.log(firstAndLastOccuranceWithIteration(input, 7))
console.timeEnd("Optimized iteration approach")


console.log('\n')

console.log({recursionCount, iterationCount})

