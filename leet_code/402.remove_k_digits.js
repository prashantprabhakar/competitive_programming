/**
 * URL: https://leetcode.com/problems/remove-k-digits/
 * Source: ['leetcode]
 * solution: https://www.youtube.com/watch?v=3QJzHqNAEXs&ab_channel=TECHDOSE
 */

/**
 * Given string num representing a non-negative integer num, and an integer k, 
 * return the smallest possible integer after removing k digits from num.
 */

/***
 * Input: num = "1432219", k = 3
    Output: "1219"
    Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.

  * Input: num = "10200", k = 1
    Output: "200"
    Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
 */

function removeKdigits(num, k) {
  let stack  = []
  let digits = String(num).split('').map(n => Number(n))
  

  for(let i=0; i<digits.length; i++) {
    let currentNum = digits[i];
    if(stack.length == 0) {
      if(currentNum) stack.push(digits[i]);
    }
    else {
      if(currentNum > stack[stack.length-1]) stack.push(currentNum)
      else {
        // we'll pop unless stack element is greater than currentNum
        while(k>0 && stack[stack.length-1] > currentNum) {
          stack.pop()
          k--;
        }

        if(stack.length != 0 || currentNum !== 0) {
          stack.push(currentNum);
        }
      }
    }
  }

  while(k>0) {
    k--;
    stack.pop()
  }
  console.log({stack})
  return stack.length == 0 ? "0" : stack.join('')
}

console.log(removeKdigits(1432219, 3))