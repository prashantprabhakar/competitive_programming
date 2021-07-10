/**
 * source: leetcode
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
 */

/**
 * Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 */

function isValidPalindrome(str) {
  str = str.toLowerCase()
  let formattedStr = ''
  for(let i=0; i<str.length; i++) {
    let charCode =  str.charCodeAt(i)
    if((97 <= charCode &&  charCode <= 122) || (charCode>= 48 && charCode <=57)) formattedStr+= str[i]
  }
  let len = formattedStr.length
  let midIndex = len%2 !=0 ? Math.floor(len/2) : len/2
  console.log(len, midIndex)
  for(let i=0,j=len-1; i<=midIndex, j>=midIndex; i++, j--) {
    if(formattedStr[i] != formattedStr[j]) return false
  }
  return true;
}

// console.log(isValidPalindrome('A man, a plan, a canal: Panama'))
// console.log(isValidPalindrome("race a car"))
console.log(isValidPalindrome("0P"))