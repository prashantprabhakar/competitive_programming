/**
 * source: leetcode
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * Anagram: a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
 */

function checkAnagram(str1, str2) {
  if(str1.length !== str2.length) return false
  let m1 = {}, m2 = {}


  for(let i=0; i<str1.length; i++) {
    let char1 = str1[i], char2 = str2[i]
    m1[char1]  = m1.hasOwnProperty(char1) ? m1[char1]+1 : 1
    m2[char2]  = m2.hasOwnProperty(char2) ? m2[char2]+1 : 1
  }

  console.log(m1, m2)
  if(Object.keys(m1).length != Object.keys(m2).length) return false

  let key1 = Object.keys(m1)
  for(let i=0; i<key1.length; i++) {
    let char = key1[i]
    if(m1[char] != m2[char])  return false
  }
  return true
  
}


let inputs = [ ['a', 'ab'], ['anagram', 'nagaram'], ['rat', 'car']]
let outputs = inputs.map(([i,j]) => checkAnagram(i,j))
console.log({inputs, outputs})