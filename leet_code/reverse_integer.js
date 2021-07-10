/**
 * source: leetcode
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/
 */

/**
 * Given a signed 32-bit integer x, return x with its digits reversed.
 * If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
 */

// 123 => 3*100+2*10+1*1 == 300+20+1 = 321
function reverseInt(num) {
  const minValue = -2147483648;
  const maxValue = 2147483647;

  let isNegative = num < 0;
  num = num < 0 ? -1*num: num; // convert to positive number
  
  let reverseNum = 0;
  while(num > 0) {
    reverseNum = reverseNum*10 + num%10;
    num = parseInt(num/10);
  }

  if(reverseNum > maxValue || reverseNum < minValue) return 0;
  return isNegative? -1*reverseNum : reverseNum;

}


let inputs = [123, 1234, -4345, 193988383880294, -193988383880294, -2100]
let outputs = inputs.map(i => reverseInt(i))
console.log({inputs, outputs})