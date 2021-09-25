/**
 * URL: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/
 * source: ['leetcode']
 * 
 */


/**
 * Algo:
 * Start iteratinng from first char.. 
 * if it's + or -; update isNegative variable accordingly
 * if it's empty space; ignore it
 * if it's number; add it to result
 * if it's anything else; terminate and return result
 * check if result is in bounds; format result accordingly
 */

function myAtoi(str) {
  let minCap = -1 * 2**31, maxCap = 2**31-1;
  if(str.length === 0) return 0;

  let result = 0, decimal = 10, isNegative, isAnyCharFound=false;

  for(let i=0; i<str.length; i++) {
    let char = str[i];
    let charCode = char.charCodeAt(0);

    // number
    if(charCode >= 48 && charCode <= 57) {
      isAnyCharFound = true;
      result = result*decimal;
      result += parseInt(char);
    }
    else if(charCode === 43 || charCode === 45) {
      if(isAnyCharFound) break;
      isAnyCharFound = true
      if(isNegative === undefined) isNegative = charCode === 45 ; // 45 is charCode for Negative
    }
    else if(charCode == 32) {
      if(isAnyCharFound) break;
      // ignore space
    }
    else{
      break;
    }


  }
  result = isNegative ? -1 * result : result;
  if(result < minCap) result = minCap;
  if(result > maxCap) result = maxCap;
  return result;

}

const tests = [
  { input: "42", expected: 42 },
  { input: "   -42", expected: -42},
  { input: "4193 with words", expected: 4193},
  { input: "words and 987", expected: 0},
  { input: "-91283472332", expected: -2147483648},
  { input: "42+1", expected: 42},
  { input: "42.1", expected: 42},
  { input: "0.421", expected: 0},
]


tests.forEach(test => console.log({
  output: myAtoi(test.input),
  expected: test.expected
}))