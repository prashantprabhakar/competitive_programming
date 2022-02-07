/**
 * URL: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge-2021/638/week-3-september-15th-september-21st/3976/
 * Source: ['leetcode']
 * 
 */

/**
  Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
  A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in 
  the subarray.

  More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

  For i <= k < j:
    arr[k] > arr[k + 1] when k is odd, and
    arr[k] < arr[k + 1] when k is even.
  Or, for i <= k < j:
    arr[k] > arr[k + 1] when k is even, and
    arr[k] < arr[k + 1] when k is odd.

 */

/**
  Input: arr = [9,4,2,10,7,8,8,1,9]
  Output: 5
  Explanation: arr[1] > arr[2] < arr[3] > arr[4] < arr[5]
  Example 2:

  Input: arr = [4,8,12,16]
  Output: 2
  Example 3:

  Input: arr = [100]
  Output: 1
 */




function maxTurbulenceSize(arr) {
  if(arr.length < 3) return arr.length;
  return Math.max(
    _countTurbulance(arr, -1),
    _countTurbulance(arr, 1)
  )
}

function _countTurbulance(arr) {
  let maxCount = 1, count = 1
  let expected = arr[1] > arr[0] ? -1 : 1
  let i= 0;
  while(i<arr.length) {
      if(expected === 1) {
        if(arr[i] > arr[i-1]) {
          count++;
          expected = expected * -1;
        }
        else {
          maxCount = Math.max(count, maxCount);
          count = 1;
          i--;
        }
      } else {
        if(arr[i] < arr[i-1]) {
          count++;
          expected = expected * -1;
        }
        else {
          maxCount = Math.max(count, maxCount);
          count = 1;
          i--;
        }
      }

      i++;

  }

  return maxCount;
}

const tests = [
  { input: [9,4,2,10,7,8,8,1,9], expected : 5},
  { input: [4,8,12, 16 ], expected: 2},
  { input: [ 100 ], expected: 1},
  { input: [5, 1, 3, 7, 4, 10 ], expected: 3}
]

tests.forEach(test => console.log({
  ...test,
  Output: maxTurbulenceSize(test.input)
}));