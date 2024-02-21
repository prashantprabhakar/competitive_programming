/**
 * https://leetcode.com/problems/maximum-odd-binary-number/
 * 2864. Maximum Odd Binary Number
 */


function maximumOddBinaryNumber(s) {
    let result = [];
    let len = s.length;
    result[len-1] = 1;
    let onesIndex = 0, zerosIndex = len-2, isFirstOneSkipped = false;
    for(let i=0; i<s.length; i++) {
        if(Number(s[i]) === 1) {
            // since one 1 will be appended at last to made it odd
            if(!isFirstOneSkipped) {
                isFirstOneSkipped = true;
                continue
            }
            result[onesIndex] = 1;
            onesIndex++;
        } else {
            result[zerosIndex] = 0;
            zerosIndex--
        }
    }

   return result.join('')
}

console.log(maximumOddBinaryNumber('0101')) // 1001 
console.log(maximumOddBinaryNumber("010")) // 001