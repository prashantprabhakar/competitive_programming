/**
 * https://medium.com/javascript-in-plain-english/algorithms-101-house-robber-in-javascript-da3e6ee36241
 */

// Time 0(n); space O(n)
function maxProfit(arr){
    if(arr.length == 1) return arr[0]
    if(arr.length == 2) return Math.max(arr[0], arr[1])
    let sorted = []
    sorted[0] = arr[0]
    sorted[1] = Math.max(arr[0], arr[1])
    for(let i=2; i<arr.length; i++){
        let op1 = sorted[i-2] // second last house
        let op2 = sorted[i-1] // last house
        let current = arr[i] // current house
        // if second last + current is greater than last house ( since we can only choose alternates)
        if(current+op1 > op2){
            sorted[i] = current+op1
        } else{
            sorted[i] = op2
        }
    }
    console.log(sorted[sorted.length-1])
}

// Trying to optimize space complexity: Non working
function maxProfit2(arr){
    if(arr.length == 1) return arr[0]
    if(arr.length == 2) return Math.max(arr[0], arr[1])
    let secondLast = arr[0]
    let last = arr[1]

    for(let i=2; i<arr.length; i++){
        let current = arr[i]
        if(current+secondLast > last){
            last = current+secondLast
            secondLast = last
        } else{
            last = current
            secondLast = last
        }
    }
    console.log(Math.max(last, secondLast))
}

// maxProfit([1,2,3,1])
// maxProfit([2,7,9,3,1])
// maxProfit([1, 9, 6, 3, 2, 7, 9])
// maxProfit([ 1, 9, 9, 8, 4, 3])
maxProfit([1,2,3,1])
maxProfit2([1,2,3,1])
//maxProfit2([2,3,2])

// 1 6 2