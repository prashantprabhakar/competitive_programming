/**
 * https://medium.com/javascript-in-plain-english/algorithms-101-house-robber-in-javascript-da3e6ee36241
 */

 // incorrect failes for maxProfit([1, 9, 6, 3, 2, 7, 9])
function maxProfit(arr){
    let oddSum = 0
    let evenSum = 0
    for(let i=0; i<arr.length; i++){
        if(i==0 || i%2 !== 0) oddSum += arr[i]
        else evenSum += arr[i]
    }
    console.log(Math.max(oddSum, evenSum))
}

// incorrect fails for maxProfit2([2,3,2])
function maxProfit2(arr){
    let blocked = new Map()
    let totSum = 0
    while(blocked.size < arr.length){
        let localMax = Math.max()
        let localMaxIndex = -1
        for(let i=0; i<arr.length; i++){
            if(blocked.has(i)) continue
            //console.log(localMax, arr[i])
            if(localMax < arr[i]){
                localMax = arr[i]
                localMaxIndex = i
            }
        }
        if(localMaxIndex != -1) blocked.set(localMaxIndex, true)
        if(localMaxIndex > 0) blocked.set(localMaxIndex-1, true)
        if(localMaxIndex < arr.length) blocked.set(localMaxIndex+1, true)
        totSum += localMax
        //console.log([...blocked.keys()])
    }
    console.log(totSum)
    
}

function maxProfit3(arr){
    if(arr.length == 1) return arr[0]
    if(arr.length == 2) return Math.max(arr[0], arr[1])
    let sorted = []
    sorted[0] = arr[0]
    sorted[1] = Math.max(arr[0], arr[1])
    for(let i=2; i<arr.length; i++){
        let op1 = sorted[i-2]
        let op2 = sorted[i-1]
        let current = arr[i]
        if(current+op1 > op2){
            sorted[i] = current+op1
        } else{
            sorted[i] = op2
        }
    }
    console.log(sorted[sorted.length-1])
}

function maxProfit4(arr){
    if(arr.length == 1) return arr[0]
    if(arr.length == 2) return Math.max(arr[0], arr[1])
    let op1 = arr[0]
    let op2 = Math.max(arr[0], arr[1])
    for(let i=2; i<arr.length; i++){
        let current = arr[i]
        if(current+op1 > op2){
            op1 = op2
            op2 = current+op1
        } else{
            
        }
    }
    console.log(op1, op2)
}

// maxProfit([1,2,3,1])
// maxProfit([2,7,9,3,1])
// maxProfit2([1, 9, 6, 3, 2, 7, 9])
// maxProfit2([ 1, 9, 9, 8, 4, 3])
maxProfit4([1,2,3,1])
maxProfit4([2,3,2])