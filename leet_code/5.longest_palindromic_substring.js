/**
 * URL: https://leetcode.com/problems/longest-palindromic-substring/
 * sourcce: [leetcode]
 * difficulty: medium
 * PENDINg
 */

/**
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Input: s = "babad" | Output: "bab" |   Note: "aba" is also a valid answer.
 * Input: s = "cbbd" | Output: "bb"
 * Input: s = "a" | Output: "a"
 * Input: s = "ac" | Output: "a"
 * Input: s = "bacdab" | Output: "b"
 * Input: s = "bacab" | Output: "bacab"
 */

function longestPalindrome(str) {
  let midIndex = 
}
 

const tests = [
  // { input: "babad", expected: "bab" },
  // { input: "cbbd", expected: "bb" },
  // { input: "a", expected: "a" },
  // { input: "ac", expected: "a" },
  { input: "bacdab", expected: "b"},  // or a/c/d
  //{ input: "bacab", expected: "bacab"}

]


tests.forEach(test => console.log({
  ...test,
  output: longestPalindrome(test.input),
  isMatched: test.expected == longestPalindrome(test.input),
}))


console.log(countLongestCommonSubString("bacdab")) // llo