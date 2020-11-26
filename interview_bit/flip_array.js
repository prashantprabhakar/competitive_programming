/**
 * source: https://www.interviewbit.com/problems/flip/
 * 
 * Alt version: https://www.geeksforgeeks.org/maximize-number-0s-flipping-subarray/
 */

/**
 * Find index of 0 to be flipped so that number of consecutive 1’s is maximized. 
 * ** ONly one zero can be flipped
 * Update1: Try returning index of zeroe as well @Todo
 */
function flipBinary(arr) {
    // For all positions of 0’s calculate left[] and right[] which defines the number of consecutive 1’s to the left of i and right of i respectively.
    let left = [0], right = [], zeroes = []
    let lastSeen1 = 0, lastSeen0

    for(let i=1; i<arr.length; i++) {
        left[i] = !lastSeen0 ? lastSeen1+1 : lastSeen1 > lastSeen0 ? (lastSeen1-lastSeen0): 0
        if(arr[i] === 1) lastSeen1 = i
        else {
            lastSeen0 = i
            zeroes.push(i)
        }
    }

    right[arr.length-1] = 0
    lastSeen1 = arr.length-1, lastSeen0 = undefined
    for(let i=arr.length-2; i>=0; i--) {
        right[i] = !lastSeen0 ? arr.length-lastSeen1 : lastSeen0 < lastSeen1 ? 0 : lastSeen0 - lastSeen1
        if(arr[i] === 1) lastSeen1 = i
        else lastSeen0 = i
    }

    let max1 = 0, indexToUpdate = -1
    for(let i=0; i<zeroes.length; i++) {
        let noOfOnes = left[zeroes[i]] + right[zeroes[i]] + 1
        if(noOfOnes > max1) {
            indexToUpdate = zeroes[i]
            max1 = noOfOnes
        }
    }

    console.log({indexToUpdate, max1})
    
}

/**
 * Find index of 0's to be flipped so that number of consecutive 1’s is maximized, max flipped allowed in m
 * ** "m" zeroes can be flipped
  * Update1: Try returning index of zeroe as well @Todo

 */

function flipBinary1(arr, m) {
    // For all positions of 0’s calculate left[] and right[] which defines the number of consecutive 1’s to the left of i and right of i respectively.
    let left = [0], right = [], zeroes = []
    let lastSeen1 = 0, lastSeen0

    // O(n)
    for(let i=1; i<arr.length; i++) {
        left[i] = !lastSeen0 ? lastSeen1+1 : lastSeen1 > lastSeen0 ? (lastSeen1-lastSeen0): 0
        if(arr[i] === 1) lastSeen1 = i
        else {
            lastSeen0 = i
            zeroes.push(i)
        }
    }

    right[arr.length-1] = 0
    lastSeen1 = arr.length-1, lastSeen0 = undefined
    // O(n)
    for(let i=arr.length-2; i>=0; i--) {
        right[i] = !lastSeen0 ? arr.length-lastSeen1 : lastSeen0 < lastSeen1 ? 0 : lastSeen0 - lastSeen1
        if(arr[i] === 1) lastSeen1 = i
        else lastSeen0 = i
    }

    // if m >= no of zeroes; we can flip all zeros
    if(m >= zeroes.length) return zeroes

    let max1 = 0
    for(let i=0; i<zeroes.length-m; i+=m) {
        let maxForSubArr = 0
        for(let j=0; j<m; j++) {
            maxForSubArr = maxForSubArr +  left[zeroes[j]] + 1 + right[zeroes[j]]
            max1 = Math.max(max1, maxForSubArr)
        }
    }

    console.log(max1)
    
}

/***
 * interview bit
 * You are given a binary string(i.e. with characters 0 and 1) S consisting of characters S1, S2, …, SN. In a single operation, you can choose two indices L and R such that 1 ≤ L ≤ R ≤ N and flip the characters SL, SL+1, …, SR. By flipping, we mean change character 0 to 1 and vice-versa.

    Your aim is to perform ATMOST one operation such that in final string number of 1s is maximised. If you don’t want to perform the operation, return an empty array. Else, return an array consisting of two elements denoting L and R. If there are multiple solutions, return the lexicographically smallest pair of L and R.

 */

function maximiseZero(arr) {
    let orgiZeroCount = 0, maxDiff = 0, currMax = 0

    for(let i=0; i<arr.length; i++) {
        // Not related to Kadane's algo
        if(arr[i] == 0) {
            orgiZeroCount++
        }

        val = arr[i] == 1 ? 1 : -1
        currMax = Math.max(val, currMax+val)
        maxDiff = Math.max(currMax, maxDiff)
        if(maxDiff < 0) maxDiff = 0
    }

    return maxDiff
}

// flipBinary([1, 1, 0, 1, 1, 0, 0, 1, 1, 1])
// flipBinary1([1, 1, 0, 1, 1, 0, 0, 1, 1, 1], 2)

console.log(maximiseZero([ 0, 1, 0, 0, 1, 1, 0 ]))

//    left [0, 1, 2, 0, 1, 2, 0, 0, 1, 2]
//   right [1, 0, 2, 1, 0, 0, 3, 2, 1, 0]