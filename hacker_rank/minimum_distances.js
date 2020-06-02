/**
 * https://www.hackerrank.com/challenges/minimum-distances/problem
 */

function minimumDistances(a) {
    let elemIndexs = new Map()
    let minDistance = -1
    for(let i=0; i<a.length; i++) {
        let elem = a[i]
        if(elemIndexs.has(elem))
            minDistance = minDistance == -1 ? i - elemIndexs.get(elem) : Math.min(minDistance, i - elemIndexs.get(elem))
        elemIndexs.set(elem, i)
    }
    return minDistance

}