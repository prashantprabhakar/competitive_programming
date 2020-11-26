

// here we are finding unique pairs.. 
function findPairsWithGivenSum(arr, k) {
    let map = new Map()
    for(let i=0; i<arr.length; i++) {
        if(map.has(arr[i])) map.set(arr[i], map.get(arr[i])+ 1)
        else map.set(arr[i], 1)
    }

    let pairs = []
    for(let [num, count] of map) {
        let req = k - num
        if(map.get(req)) {
            pairs.push([num, req])
            map.delete(num)
            map.delete(req)
        }
    }
    console.log(pairs)
    return pairs
}

// count non-unique pairs; of if a pair appears twice; we count it twice
function countPairsWithGivenSum(arr, k) {
    let map = new Map()
    for(let i=0; i<arr.length; i++) {
        if(map.has(arr[i])) map.set(arr[i], map.get(arr[i])+ 1)
        else map.set(arr[i], 1)
    }

    let pairCount = 0
    for(let [num, count] of map) {
        let req = k - num
        let reqCount = map.get(req)
        if(reqCount) {
            pairCount += Math.min(reqCount, count)
            map.delete(num)
            map.delete(req)
        }
    }
    console.log(pairCount)
    return pairCount
}


findPairsWithGivenSum([1,5,7, -1, 5, 1, 6], 6)
countPairsWithGivenSum([1,5,7, -1, 5, 1, 6], 6)