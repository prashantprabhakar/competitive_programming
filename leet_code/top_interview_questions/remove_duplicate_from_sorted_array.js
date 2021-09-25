/**
 * URL: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 * source: ['leetcode']
 * 
 */

/**
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

 */


function removeDuplicates(arr) {
  let index = 1, prevElem = arr[0];
  for(let i=1; i<arr.length; i++) {
    if(arr[i] != prevElem) {
      arr[index] = arr[i];
      index++;
      prevElem = arr[i];
    }
  }
  return arr;
}


const tests = [
  [1,1,2],
  [0,0,1,1,1,2,2,3,3,4],
  [],
  [1],
  [2,2]
]

tests.forEach(input => console.log({
  //input,
  expected: [...new Set(input)],
  output: removeDuplicates(input)
}))
