/**
 * Source: https://www.linkedin.com/posts/mircead_codinginterview-leetcode-problemsolvingskills-activity-6730461314239537152-lnsz
 * Given a sorted array, return the number of appearances of a given value.

    Input: nums = [1, 2, 3, 3, 3, 3, 4], value = 3
    Output: 4

    Giving away 1 week of Premium on AlgoCademy for correct answers!
 */

/**approach is to use binary search */

// complexity 2 * O(log n)
function countNumber(arr, num) {
    let startIndex = findLowerBound(arr, num)
    let endIndex = findUpperBound(arr, num)
    if(endIndex == -1 && startIndex == -1) return 0
    return endIndex - startIndex + 1
}

// optimizaton over countNumber: does common iteration in main fn
function countNumber2(arr, num, startIndex = 0, endIndex = arr.length-1) {
    if(startIndex == endIndex) return arr[startIndex] == num ? 1 : 0
    let midIndex = getMidIndex(startIndex, endIndex)

    if(arr[midIndex] > num) return countNumber2(arr, num, startIndex, midIndex)
    else if(arr[midIndex] < num) return countNumber2(arr, num, midIndex+1, endIndex)
    else {
        let firstIndex = findOccuraceIteration(arr, num, startIndex, endIndex, true)
        let secondIndex = findOccuraceIteration(arr, num, startIndex, endIndex, false)
        return secondIndex - firstIndex + 1
    }
}

// optimization: same as countNumber2; just this is iterative approach hence can save callstack
function countNumberIteration(arr, num) {
    let startIndex = 0
    let endIndex = arr.length - 1
    if(startIndex === endIndex) return arr[startIndex] === num ? 1 : 0

    // finish common iteration; so we don't do same again while finding upper and lower bound
    while(startIndex <= endIndex) {
        let midIndex = getMidIndex(startIndex, endIndex)
        if(arr[midIndex] > num) endIndex = midIndex - 1
        if(arr[midIndex] < num) startIndex = midIndex + 1
        else break; 
    }
    let firstOccurance = findOccuraceIteration(arr, num, startIndex, endIndex, true)
    if(firstOccurance === -1) return 0 // to avoid second calculation when num does not exits
    let secondOccurance = findOccuraceIteration(arr, num, startIndex, endIndex, false)
    return secondOccurance - firstOccurance + 1
}

function findOccuraceIteration(arr, num, startIndex=0, endIndex = arr.length-1, isFirstOccu) {
    let index = -1
    while(startIndex <= endIndex) {
        let midIndex = getMidIndex(startIndex, endIndex)
        if(arr[midIndex] < num) startIndex = midIndex+1
        else if(arr[midIndex] > num) endIndex = midIndex-1
        else {
            index = midIndex
            if(isFirstOccu) endIndex = midIndex - 1
            else startIndex = midIndex + 1
        }
    }
    return index
}

function getMidIndex(start, end) {
    return start + Math.floor((end-start) / 2 )
}

function findLowerBound(arr, num, startIndex = 0, endIndex = arr.length-1) {
    if(startIndex == endIndex) return arr[startIndex] == num ? startIndex : -1 
    let midIndex = getMidIndex(startIndex, endIndex)
    
    if(arr[midIndex] < num) return findLowerBound(arr, num, midIndex+1, endIndex)
    else if(arr[midIndex] > num) return findLowerBound(arr, num, startIndex, midIndex-1)
    else {
        if(midIndex == 0 || arr[midIndex-1] < num) return midIndex
        else return findLowerBound(arr, num, startIndex, midIndex-1)
    }
}

function findUpperBound(arr, num, startIndex=0, endIndex = arr.length-1) {
    if(startIndex == endIndex) return arr[startIndex] == num ? startIndex : -1 
    let midIndex = getMidIndex(startIndex, endIndex)
    if(arr[midIndex] < num) return findUpperBound(arr, num, midIndex+1, endIndex)
    else if(arr[midIndex] > num) return findUpperBound(arr, num, startIndex, midIndex-1)
    else {
        if(midIndex == arr.length-1 || arr[midIndex+1] > num) return midIndex
        else return findUpperBound(arr, num, midIndex+1, endIndex)
    }

}





console.log(countNumber( [1, 2, 3, 3, 3, 3, 3, 4], 3))
console.log(countNumber( [1, 2, 3, 3, 3, 3, 3, 4], 4))
console.log(countNumber( [1, 2, 3, 3, 3, 3, 3, 4], 5))

console.log('\n')
console.log(countNumberIteration( [1, 2, 3, 3, 3, 3, 3, 4], 3))
console.log(countNumberIteration( [1, 2, 3, 3, 3, 3, 3, 4], 4))
console.log(countNumberIteration( [1, 2, 3, 3, 3, 3, 3, 4], 5))

console.log('\n')
console.log(countNumberIteration([4, 4, 8, 8, 8, 15, 16, 23, 23, 42], 8)) // 3
console.log(countNumberIteration([3, 5, 5, 5, 5, 7, 8, 8], 6)) // 0
console.log(countNumberIteration([3, 5, 5, 5, 5, 7, 8, 8], 5)) // 4