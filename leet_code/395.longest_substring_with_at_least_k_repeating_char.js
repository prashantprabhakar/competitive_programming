/**
 * URL: https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
 * source: ['leetcode']
 * tags: ['2pointer', 'slidingWindow']
 * help: https://www.youtube.com/watch?v=bHZkCAcj3dc&ab_channel=KnowledgeCenter
 */

/**
 * Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.
 */

function longestSubstring(str, k) {
  // base case
  if(str.length < k) return 0;
  if(k<=1) return str.length;

  let charFrequency = {}
  for(let char of str) charFrequency[char] = charFrequency[char] ? charFrequency[char]+1 : 1

  let index = 0;
  while(index < str.length) {
    let char = str[index];
    if(charFrequency[char] < k) break;
    index++;
  }
  // if we reached to last or second last char; means second string;
  if(index >= str.length-1) return index;
  // now we have found the first char which can not be in the result substring.
  let temp1 = longestSubstring(str.substring(0,index), k);

  // increase index till be fouund another chars that can be in reult string
  while(charFrequency[str[index]] < k) index++;
  let  temp2 =  longestSubstring(str.substring(index), k)

  return Math.max(temp1, temp2)

}


const tests = [
  {
    actual: longestSubstring('aaabb', 3),
    expected: 3,
  },
  {
    actual: longestSubstring('ababbc', 2),
    expected: 5
  }
]

tests.forEach(test => console.log(test))