/**
 * url: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * source: ['leetcode']
 * tags: ['2pointer', 'slidingWindow']
 */

/**
 * Problem: Given a string s, find the length of the longest substring without repeating characters.
 */

/**
 * @param {string} s
 * @return {number}
 */
function longestSubstring(str) {
  // base case
  if(str.length === 0) return 0;

  let start=0, end=0;
  let foundChars = {}, result = 1;

  for(end=0; end<str.length; end++) {
    let char = str[end];
    // ignore the chars whose last index is less than start coz they are not in current window and are allowed to repeat  
    if(foundChars[char] == undefined || foundChars[char] < start) foundChars[char] = end;
    else {
      result = Math.max(result, end-start);
      // start from last seen of given repeatedChar + 1
      start = foundChars[char]+1
      foundChars[char] = end;
      
    }
  }

  return Math.max(result, end-start);

}

const tests = [
  {
    actual: longestSubstring('abcabcbb'),
    expcted: 3
  },
  {
    actual: longestSubstring("bbbbb"),
    expcted: 1,
  },
  {
    actual: longestSubstring("pwwkew"),
    expcted: 3,
  },
  {
    actual: longestSubstring(" "),
    expcted:1,
  },
  {
    actual: longestSubstring("a"),
    expcted:1,
  },
  {
    actual: longestSubstring("au"),
    expcted: 2,
  },
  {
    actual: longestSubstring("dvdf"),
    expcted: 3
  },
  {
    actual: longestSubstring("abcdeaf"),
    expcted: 6
  },
  {
    actual: longestSubstring('abcwxywtpoa'),
    expcted: 7
  },
]

tests.forEach(test => console.log(test))