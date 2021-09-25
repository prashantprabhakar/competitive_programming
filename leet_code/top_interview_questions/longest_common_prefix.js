/**
 * URL: "https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/"
 * source: ['leetcode']
 * difficulty: easy
 */

/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/**
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"

 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 */

function longestCommonPrefix(strs) {
  if(strs.length == 0) return '';
  if(strs.length == 1) return strs[0];
  let res = lcp(strs[0], strs[1]);
  for(let i=2; i<strs.length; i++) {
    res = lcp(res, strs[i])
    if(res == '') break;
  }
  return res;
}

function lcp(str1, str2) {
  let result = '', i=0, j=0;
  while(i<str1.length && j<str2.length) {
    if(str1[i] == str2[j]) {
      result += str1[i];
      i++;
      j++;
    }
    else break;
  }
  return result;
}

const tests = [
  {
    input: ["flower", "flow", "flight"],
    expected: "fl"
  },
  {
    input: ["dog","racecar","car"],
    expected: ""
  }
]

tests.forEach(({input, expected}) => console.log({
  //input,
  expected,
  output: longestCommonPrefix(input)
}))