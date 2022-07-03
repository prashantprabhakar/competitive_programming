const newLocal = 1;
/**
 * URL:https://leetcode.com/problems/longest-common-subsequence/
 * source: ['leetcode']
 * tags: ['lcs', 'dp']
 */

/**
 * Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
 * A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. 
 */

function longestCommonSubsequence_recursion(str1, str2, i=str1.length, j=str2.length) {
  // base conditition
  if(i==0 || j==0) return 0; // empty substring will be a valid subsequence
  
  if(str1[i-1] === str2[j-1]) {
    return 1 + longestCommonSubsequence(str1, str2, i-1, j-1);
  } else {
    return Math.max(
      longestCommonSubsequence(str1, str2, i-1, j),
      longestCommonSubsequence(str1, str2, i, j-1)
    )
  }
}

function longestCommonSubsequence_momoized(str1, str2, i=str1.length, j=str2.length, memo={}) {
  // base conditition
  if(i==0 || j==0) return 0; // empty substring will be a valid subsequence
  let memoKey = `${i}_${j}`
  if(memo[memoKey] !== undefined) return memo[memoKey]
  if(str1[i-1] === str2[j-1]) {
    memo[memoKey] = 1 + longestCommonSubsequence_momoized(str1, str2, i-1, j-1, memo);
  } else {
    memo[memoKey] = Math.max(
      longestCommonSubsequence_momoized(str1, str2, i-1, j, memo),
      longestCommonSubsequence_momoized(str1, str2, i, j-1, memo)
    )
  }
  return memo[memoKey];
}

function longestCommonSubsequence_dp(str1, str2) {

  // initialize dpMatrix with cond if(i ==0 || j === 0) dpMatrix[i][j] = 0
  const dpMatrix = new Array(str1.length+1).fill(-1).map(() => new Array(str2.length+1).fill(-1));

  for(let i=0; i<str1.length+1; i++) {
    dpMatrix[i][0] = 0;
  }
  for(let j=0; j<str2.length+1; j++) {
    dpMatrix[0][j] = 0;
  }


  for(let i=1; i<=str1.length; i++) {
    for(let j=1; j<=str2.length; j++) {
      // why matching i-1 & j-1 and not i and j?
      // ans: coz matrix index is greater than str index by 1.
      if(str1[i-1] === str2[j-1]) {
        dpMatrix[i][j] = 1 + dpMatrix[i-1][j-1];
      } else {
        dpMatrix[i][j] = Math.max(
          dpMatrix[i-1][j],
          dpMatrix[i][j-1]
        )
      }
    }
  }
  return dpMatrix[str1.length][str2.length];
}


const tests = [
  {
    input: ["a", "n"],
    expected: 0,
  },
  {
    input: ["ezupkr", "ubmrapg"],
    expected: 2
  },
  {
    input: ["abcde", "ace"],
    expected: 3,
  },
  {
    input: ["abc", "abc"],
    expected: 3,
  },
  {
    input: ["abc", "def"],
    expected: 0,
  },
  {
    input: ['sea', 'eat'],
    expected: 2
  }
]

function main() {
  console.log("\n********* LCS using recursion *********")
  tests.forEach(test => console.log({
    output: longestCommonSubsequence_recursion.apply(this, test.input),
    expected: test.expected
  }))

  console.log("\n********* LCS using memoization (top-down up) *********")
  tests.forEach(test => console.log({
    output: longestCommonSubsequence_momoized.apply(this, test.input),
    expected: test.expected
  }))


  console.log("\n********* LCS using bottom up DP *********")
  tests.forEach(test => console.log({
    output: longestCommonSubsequence_dp.apply(this, test.input),
    expected: test.expected
  }))
  

}

main()