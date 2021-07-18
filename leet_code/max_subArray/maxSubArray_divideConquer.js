
/**
 * solution: https://www.geeksforgeeks.org/maximum-subarray-sum-using-divide-and-conquer-algorithm/
 */


function findMaxSubArray(arr, start=0, end=arr.length-1) {
  // base case
  if(start == end) return arr[start]
  let mid = parseInt((start+end) / 2)

  return Math.max(
    findMaxSubArray(arr, start, mid),
    findMaxSubArray(arr, mid+1, end),
    _findCombinedSum(arr, start, end, mid)
  )

}

function _findCombinedSum(arr, start, end, mid) {

  let lSum = arr[start], rSum = arr[mid]
  for(let i=start+1; i<mid; i++) lSum = Math.max(lSum, lSum+arr[i])
  for(let i=mid+1; i<=end; i++) rSum = Math.max(rSum, rSum+arr[i])
  return  Math.max(lSum, rSum, lSum+rSum)
}

console.log(findMaxSubArray([ 2, 3, 4, 5, 7 ])) // 21
