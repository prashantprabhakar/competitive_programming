
/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @TODO: Can try optimizing complexity
 */

/**
 * Cases:
 * both array can be empty; return empty -1 then
 * both array can have different size
 */

/**
 * This is brute force approach
 * Time Complexity: O(n+m)
 * Space Complexity: O(n+m)
 */
function findMedianSortedArrays_old(arr1, arr2) {

    let i=0, j=0
    let result = []
    let loopCount = 0 // track no of times loop ran
  
    while(i !== arr1.length || j !== arr2.length) {
      loopCount++
      if(i === arr1.length || arr1[i] > arr2[j]) {
        result.push(arr2[j])
        j++
      } else if(j === arr2.length || arr1[i] <= arr2[j]) {
        result.push(arr1[i])
        i++
      }
    }
      
    // let result = [...arr1, ...arr2].sort((a,b) => a-b)
    console.log(`findMedianSortedArrays_old loop ran ${loopCount} times and result array has ${result.length} size`)
    return _findMedian(result) 
      
};
  
// helper fn
function _findMedian(arr){
  let len = arr.length
  let res;
  if(len%2 === 1) res = arr[parseInt(len/2)]
  else  res= (arr[parseInt(len/2)] + arr[parseInt(len/2-1)]) /2
  return res
}

/**
 * keep merging the array only till half
 * Time Complexity O((n+m)/2)
 * Space Complexity: O(1)
 */
function median_2_sorted_arr(arr1, arr2) {
  let totalLen = arr1.length + arr2.length
  let medianIndex = totalLen % 2 !== 0 ? Math.floor(totalLen/2) : Math.ceil(totalLen/2)

  let currentIndex = -1 // track if reached midIndex
  // we might need to track last 2 elems for median of even sized array
  let mid = -1, beforeMid = -1

  let i=0; j=0
  let loopCount = 0
  while(i !== arr1.length || j !== arr2.length) {
    if(currentIndex === medianIndex) break
    loopCount++
    if( i === arr1.length || arr2[j] < arr1[i]) {
      beforeMid = mid
      mid = arr2[j]
      j++
    } else {
      beforeMid = mid
      mid = arr1[i]
      i++
    }
    currentIndex++
  }

  console.log(`median_2_sorted_arr loop ran ${loopCount} times and result array has 0 size`)

  if(totalLen%2 !== 0) return mid
  else return (mid+beforeMid)/2


  
}


console.log(findMedianSortedArrays_old([1,2,3,4, 5,6,7,8,9], [10,11]))
console.log(findMedianSortedArrays_old([1,2,3,4,5,6,7,8,9], [10,11,12]))


console.log(median_2_sorted_arr([1,2,3,4,5,6,7,8,9], [10,11]))
console.log(median_2_sorted_arr([1,2,3,4,5,6,7,8,9], [10,11,12]))
