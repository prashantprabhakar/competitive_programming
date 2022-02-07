/**
 * Helper fn to find optimal destination index from a given index by jumpig as per scenerio. 
 */

// [1,3,9,2,3,1,1,1,1,]
function optimalJump(arr, start) {

  if(arr[start] === 0) return -1; // no jump
  let maxReach = start+arr[start], maxReachFrom = start;
  if(maxReach >= arr.length-1) return arr.length-1;


  for(let i=start; i<=start+arr[start]; i++) {
    let maxReachibilityFromCurr = i + arr[i];
    if(maxReachibilityFromCurr > maxReach) {
      maxReachFrom = i;
      maxReach = maxReachibilityFromCurr;
    }
  }
  return maxReachFrom
}


function jump(nums) {
  //  base case
  let lastIndex = nums.length-1;
  if(nums[0]  === 0 || nums[lastIndex] === 0) return -1;
  let jumpCount = 0, start = 0
  while(start < lastIndex) {
    end = optimalJump(nums, start);
    console.log(`jump from: ${start} to: ${end}`)
    start = end
    if(start == -1) throw("oops")
    jumpCount++
  }
  return jumpCount;
}

// console.log(
//   jump([1,3,2,9,3,1,1,1,1,])
// )

console.log(jump([2,3,1,]))