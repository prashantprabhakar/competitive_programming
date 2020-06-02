/**
 * https://www.hackerrank.com/challenges/circular-array-rotation/problem
 */

/**
 * 
 * @param {Array} a original array
 * @param {Interger} k  no of rotatios from right
 * @param {Array} queries query indexed
 * @dev Time complexity O(n) where n is len of queries array
 */

function circularArrayRotation(a, k, queries) {
    let res = []
    for(let i=0; i<queries.length; i++) {
        let index = findIndexInCiruclarArray(a.length, k, queries[i])
        res.push(a[index])
    }
    return res

}

function findIndexInCiruclarArray(arrLen, k, index) {
    let newIndex = index - k % arrLen
    if(newIndex >= 0) return newIndex
    return arrLen + newIndex

}

for(let i=1; i<=5; i++) {
    console.log(circularArrayRotation([1,2,3], i, [0,1,2]))
}
/**
 * 1 2 3 - initial
 * 3 1 2
 * 1 2 3
 * 3 1 2
 * 2 3 1
 * 1 2 3
 */