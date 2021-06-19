/**
 * url:https://leetcode.com/problems/3sum/
 * tag: leetcod e
 */

/**
 * statement: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 */

/**
 * Approach:
 * We loop over array and find the sum needed to make: ar[i] + target = 0
 * We then use _findNumberWithGivenSum fuunction to find pairs in array whose sum is target
 * We combine all these pairs with arr[i] to get the triplet.
 * Now, to avoid having duplicate  triplet; we sort the triplet; and store them in a map as key
 * Next time if we encounter same triplet; we ignore it
 */

// O(n^2) - not working
function threeSum(arr, targetSum=0) {
  if(arr.length < 3) return []
  let results = []
  let solutions = {}
  // O(n) here
  for(let i=0; i<arr.length; i++) {
    let target = targetSum - arr[i]
    // O(n) here
    let matchingPairs = _findNumberWithGivenSum(arr, target, i)
    // O(k)  here; where k is possible solution of _findNumberWithGivenSum
    for(let j=0; j< matchingPairs.length; j++) {
      // O(3) here
      let key = [arr[i], matchingPairs[j][0], matchingPairs[j][1]].sort((a,b) => a-b).reduce((i,result) => `${result}_${i}`, '')
      if(solutions.hasOwnProperty(key)) continue;
      results.push([
        arr[i],
        matchingPairs[j][0],
        matchingPairs[j][1]
      ])
      solutions[key] = true
    }
  }
  return  results
}

function _findNumberWithGivenSum(arr, target, ignoreIndex=-1) {
  let numIndex = {}
  let result =  []
  for(let i=0; i<arr.length; i++) {
    if(i==ignoreIndex) continue
    let requiedNum = target - arr[i]
    if(numIndex.hasOwnProperty(requiedNum)) {
      result.push([requiedNum, arr[i]])
    }
    numIndex[arr[i]] = i
  }
  return result;
}


// console.log(threeSum([-1,0,1,2,-1,-4]))
// console.log(threeSum([0,0]))
// console.log(threeSum([-1, -9]))
// console.log(threeSum([-1,1,0])) // [[-1,0,1]]
// console.log(threeSum([1,2,-2,-1])) // []
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
//console.log(_findNumberWithGivenSum([-1,0,1,2,-1,-4,-2,-3,3,0,4], 1))
