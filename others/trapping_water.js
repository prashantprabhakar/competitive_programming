/**
 * Company: Paytm
 * source: https://www.geeksforgeeks.org/trapping-rain-water/
 */


function trappingWater(arr) {
    // handle edge case
    if(arr.length == 0 || arr.length == 1) return 0
    let left_max = [arr[0]], right_max = []

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > left_max[i-1]) left_max.push(arr[i]) 
        else left_max.push(left_max[i-1])
    }

    right_max[arr.length-1] = arr[arr.length-1]
    for(let i=arr.length-2; i>=0; i--) {
        right_max[i] = Math.max(arr[i], right_max[i+1])
    }

    let totalWaterStored = 0
    for(let i=0; i<arr.length; i++) {
        let waterStored = Math.min(right_max[i], left_max[i]) - arr[i]
        totalWaterStored += waterStored
    }
    return totalWaterStored
}

//trappingWater([3, 0, 2, 0, 4]) //  0 + 3 + 1 + 3 + 0 = 7 
console.log(trappingWater([0,1,0,2,1,0,1,3,2,1,2,1]))