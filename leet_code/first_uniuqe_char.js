/**
 * Source: leetcode
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/
 */

/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * s consists of only lowercase English letters.
 */

function firstNonRepeatingCharIndex(str) {
  let charToIndex = {}
  for(let  idx=0; idx<str.length; idx++) {
    let char = str[idx]
    if(charToIndex[char]) {
      charToIndex[char].count += 1;
    } else {
      charToIndex[char] = { count: 1, index: idx}
    }
  }

  let keys = Object.keys(charToIndex)
  for(let i=0; i<keys.length; i++) {
    let char = keys[i]
    if(charToIndex[char].count === 1) return charToIndex[char].index
  }
  return -1

}

let inputs = ['leetcode', 'loveleetcode', 'aabb']
let outputs = inputs.map(i => firstNonRepeatingCharIndex(i))
console.log({inputs, outputs})