

function solution(arr) {
    let leftHighest = []
    let rightHighest = []
    let h = arr[0]
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > h) h = arr[i]
        leftHighest.push(h)
    }

    h = arr[arr.length - 1]
    for(let i=arr.length-1; i>=0; i--) {
        if(arr[i] >= h)  h = arr[i]
        rightHighest[i] = h
    }

    let totalWater = 0
    for(let i=0; i<arr.length; i++) {
        let minHeight = Math.min(leftHighest[i], rightHighest[i])
        let waterStored =  (minHeight-arr[i])
        totalWater += waterStored
    }
    console.log(totalWater)
}

function solution2(arr) {
    
    let l = -1, r = -1
    let leftHighest= [], rightHighest = []
    for(let i=0, j= arr.length-1; i<arr.length, j>=0; i++, j--) {
        if(arr[i] > l) l = arr[i]
        if(arr[j] > r) r = arr[j]
        leftHighest.push(l)
        rightHighest[j] = r
    }

    let totalWater = 0
    for(let i=0; i<arr.length; i++) {
        let minHeight = Math.min(leftHighest[i], rightHighest[i])
        let waterStored =  (minHeight-arr[i])
        totalWater += waterStored
    }
    console.log(leftHighest)
    console.log(rightHighest)
    console.log(totalWater)
}

function solution3(arr) {
    
    let l = -1, r = -1
    let leftHighest= [], rightHighest = []
    for(let i=0, j= arr.length-1; i<arr.length, j>=0; i++, j--) {
        if(arr[i] > l) l = arr[i]
        if(arr[j] > r) r = arr[j]
        leftHighest.push(l)
        rightHighest[j] = r
    }

    let totalWater = 0
    for(let i=0; i<arr.length; i++) {
        let minHeight = Math.min(leftHighest[i], rightHighest[i])
        let waterStored =  (minHeight-arr[i])
        totalWater += waterStored
    }
    console.log(totalWater)
}


solution([0,2,1,3,0,1,2,1,2,1])
solution2([0,2,1,3,0,1,2,1,2,1])

//googleSol([0, 1, 0, 2,1, 0, 1, 3, 2, 1, 2, 1])
//googleSol([1,1,2,2,3,4,5,9,2,1,0,0,5])
