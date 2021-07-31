//


/***
 * Approach:
 * start counting from zero to k where windowSum > sum; then remove first index and check sum..track max length
 */
function minSubArrayLen(arr, sum) {
  let start=0, end=0, minLen = Infinity, windowSum = 0;

  while(start < arr.length) {

    if(windowSum < sum && end <  arr.length) {
      windowSum += arr[end];
      end++
    }
    else if(windowSum >= sum) {
      minLen = Math.min(minLen, end-start);
      windowSum -= arr[start];
      start++;
    }
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;

}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
console.log(minSubArrayLen([1,1,1,1,1,1], 11))