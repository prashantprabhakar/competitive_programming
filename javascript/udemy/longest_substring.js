// https://saxobank.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#questions

/**
 * write a function to return the length of the longest substring with all distinct characters
 */

/***
 * Assumptions: 
    1. all chars are lowercased 
    2. we don't ignore spaces and special chars
    3. return 0 if no match is found
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

  // while(end < str.length) {
  //   let char = str[end];

  //   if(!foundChars[char]) {
  //     end++;
  //     foundChars[char] = true;
  //   } else {
  //     result = Math.max(result, end-start);
  //     foundChars = {
  //       [char]: true
  //     }
  //     start = end;
  //     end++;
      
  //   }
  // }
  // return Math.max(result, Object.keys(foundChars).length);

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