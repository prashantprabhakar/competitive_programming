/**
 * URL: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
 * source: leetcode
 * tags: ['string']
 */


 /**
  * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
  * What should we return when needle is an empty string? This is a great question to ask during an interview.
  * For the purpose of this problem, we will return 0 when needle is an empty string.
  * This is consistent to C's strstr() and Java's indexOf().
  */

function strstr(haystack, needle) {
  // base cases
  
  if(needle.length === 0) return 0;
  if(haystack.length < needle.length) return -1;
  if(haystack.length === needle.length) haystack === needle ? 0: -1;
  
  let str1Pointer = 0; str2Pointer = 0; resultIndex =  -1 ;
  while(str1Pointer !== haystack.length && str2Pointer !== needle.length) {
    if(haystack[str1Pointer] === needle[str2Pointer]) {
      if(resultIndex === -1) resultIndex = str1Pointer;
      str1Pointer++;
      str2Pointer++;
    } else {
      str1Pointer = resultIndex === -1 ? str1Pointer+1 : resultIndex + 1;
      resultIndex = -1;
      str2Pointer = 0;
    }
  }
  return str2Pointer === needle.length ? resultIndex : -1 ;

}


const tests = [
  ["police", "oli"],
  ["police", "xy"],
  ["polipolice", "pol"],
  ["xpolipolice", "police"],
  ["aaab", "aab"],
  // base cases
  ["abc", ""],
  ["", "a"],
  ["", ""],
  leetcode cases
  ["hello", "ll"],
  ["aaaaa", "bba"],
  // failes test
  ["aaa", "aaaa"],
  ["mississippi", "isipi"]

]

tests.forEach(input => {
  console.log({
    expected: input[0].indexOf(input[1]),
    actual: strstr(...input)
  })
});