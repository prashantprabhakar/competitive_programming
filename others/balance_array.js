/**
 * source: https://www.interviewbit.com/problems/balance-array/
 * Hint1: Maintain PrefixSum and SuffixSum for odd and even index seperately.
 */

/**
 * Statement:
 * Given an integer array A of size N. You need to count the number of special elements in the given array.
    A element is special if removal of that element make the array balanced.
    Array will be balanced if sum of even index element equal to sum of odd index element.
 */

 // O(n^2) complexity; O(1) space
function countBalance(arr) {
    let count = 0
    for(let i=0; i<arr.length; i++) {
        let evenSum = 0, oddSum = 0, isOdd = true
        for(let j=0; j<arr.length; j++) {
            if(j == i) continue
            if(isOdd) oddSum += arr[j]
            else evenSum += arr[j]
            isOdd = !isOdd
        }
        if(oddSum == evenSum) count++
    }
    return count

}

/**
    Maintain PrefixSum and SuffixSum for odd and even index seperately.
    Let consider the following variable:
    leftOdd[i] : Denote the prefixSum of element on odd index till i-1.
    leftEven[i] : Denote the prefixSum of element on even index till i-1.
    rightOdd[i] : Denote the SuffixSum of element of odd index till i+1.
    rightEven[i] : Denote the SuffixSum of element of even index till i+1.

    Now, check if the ith element is the special or not.

    If leftOdd[i] + rightEven[i] == leftEven[i] + rightOdd[i], then ith element is special, so we increase the count.
 */
// based on solution approach

function countBalance2(arr) {
    
    let leftOdd = [arr[0]], leftEven = [0], rightOdd = [], rightEven = []

    // Get predix sum
    for(let i=1; i<arr.length; i++) {
        if((i+1) % 2 == 0) {
            leftEven[i] = leftEven[i-1] + arr[i]
            leftOdd[i] = leftOdd[i-1]
        } else {
            leftEven[i] = leftEven[i-1]
            leftOdd[i] = leftOdd[i-1] + arr[i]
        }

    }

    // check if last element is even or odd
    if(arr.length %2 == 0) {
        rightEven[arr.length-1] = arr[arr.length-1]
        rightOdd[arr.length-1] = 0
    } else {
        rightOdd[arr.length-1] = arr[arr.length-1]
        rightEven[arr.length-1] = 0
    }

    // find suffix sum
    for(let i=arr.length-2; i>=0; i--) {
        if((i+1) % 2 == 0) {
            rightEven[i] = rightEven[i+1] + arr[i]
            rightOdd[i] = rightOdd[i+1]
        } else {
            rightOdd[i] = rightOdd[i+1] + arr[i]
            rightEven[i] = rightEven[i+1]
        }
    }

    // Check count
    let count = 0
    for(let i=0; i<arr.length; i++) {
        if(leftOdd[i] + rightEven[i] == leftEven[i] + rightOdd[i]) count++
    }
    return count

}


//console.log(countBalance([2,1,6,4]))
console.log(countBalance([2,1,6,4]))
console.log(countBalance2([2,1,6,4]))