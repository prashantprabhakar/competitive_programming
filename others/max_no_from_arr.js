/**
 * Source: https://leetcode.com/discuss/interview-experience/895780/Walmart-or-SSE-or-Bangalore-or-Oct-2020-or-Reject
 * company: Walmart
 * Given two arrays of 0-9 integers
    [6,8,0,0,5,6,7,6,7,4,3,6,9,9]
    [5,9,6,7,4,3,5,6,8,3,5,6,7,6]

    Find which one of the two arrays will make the largest number if the digits are rearranged
*/

function findMaxNo(arr1, arr2) {

    // check length based
    if(arr1.length > arr2.length) return 1
    if(arr2.length > arr1.length) return 2

    let len = arr1.length
    let countArr1 = new Map()
    let countArr2 = new Map()

    for(let i=0; i<len; i++) {
        addMapCounter(countArr1, arr1[i])
        addMapCounter(countArr2, arr2[i])
    }

    for(let i=9; i>=0; i++) {
        if(countArr1.get(i) > countArr2.get(i)) return 1
        else if (countArr1.get(i) < countArr2.get(i)) 2
    }
    return -1
}

function addMapCounter(map, key) {
    if(map.has(key)) {
        map.set(key, map.get(key)+1)
    } else {
        map.set(key, 1)
    }
}

let arr1 = [6,8,0,0,5,6,7,6,7,4,3,6,9,9]
let arr2 = [5,9,6,7,4,3,5,6,8,3,5,6,7,6]


console.log(findMaxNo(arr1, arr2))