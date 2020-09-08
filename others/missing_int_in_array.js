/**
 * Interview ques: https://www.glassdoor.co.in/Interview/ThoughtWorks-Software-Developer-Interview-Questions-EI_IE38334.0,12_KO13,31_IP4.htm
 * 2. Find the missing smallest postive integer in an array
 *  Input: 1 2 4 5
          output : 3
 */


 /**
  * Assumption array is un-sorted but sequential [1,3,2,5,7] and only one no is missing
  * Also ssumes  max no is missing
  */

function findMissingNo(arr) {
    // let sum = arr.reduce((sum, current) => {return sum+current}, 0)

    let minNo = arr[0], maxNo= arr[0], sum = 0

    for(let i=0; i<arr.length; i++) {
        sum += arr[i]
        minNo = Math.min(minNo, arr[i])
        maxNo = Math.max(maxNo, arr[i])
    }
    
    let expectedSum = (maxNo * (maxNo+1) )/ 2
    console.log({maxNo, minNo, expectedSum, sum})
    return expectedSum - sum
}

console.log(findMissingNo([2,3,4,5,6]))