/**
 * URL: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * Souce: leetcode
 * tags: ['recursion']
 */

 /**
  * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
 */

/**
    Input: digits = "23"
    Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

    Input: digits = ""
    Output: []

    Input: digits = "2"
    Output: ["a","b","c"]
 */

const numMapping = {
  '1': [],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
}

/**
 * Time: O(3) * O(4) * O(4) * O(64)
 * 
 */
function findCombination(mobileNo) {
  if(mobileNo.length === 0) return [];
  let chars = mobileNo.split("");
  let past  = numMapping[chars[0]];

  for(let i=1; i<mobileNo.length; i++) {
    let curr = numMapping[chars[i]];
    let res = []
    curr.forEach(c => {
      past.forEach(p => {
        res.push(p+c);
      })
    })
    past = res
  }
  return past
}

const tests = [
  {
    input: "777",
  }
]

tests.forEach(test => console.log({
  output: findCombination(test.input),
  len:  findCombination(test.input).length
}))