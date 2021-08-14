// find longes common substring


function longestCommonSubstring(str1, str2) {

  let dpMatrix = new Array(str1.length+1).fill(0).map(() => new Array(str2.length).fill(0));
  let result = 0

  for(let i=1; i<str1.length+1; i++) {
    for(let j=1; j<str2.length+1; j++) {

      if(str1[i-1] === str2[j-1]) {
        dpMatrix[i][j] = 1 + dpMatrix[i-1][j-1]
        result = Math.max(dpMatrix[i][j], result)
      } else {
        dpMatrix[i][j] = 0; 
      }
    }
  }
  return result
}


const tests = [
  {
    input: ["a", "n"],
    expected: 0,
  },
  {
    input: ["ezupkr", "ubmrapg"],
    expected: 1
  },
  {
    input: ["abcde", "ace"],
    expected: 1,
  },
  {
    input: ["abc", "abc"],
    expected: 3,
  },
  {
    input: ["abc", "def"],
    expected: 0,
  }
]

tests.forEach(test => console.log({
  output: longestCommonSubstring.apply(this, test.input),
  expected: test.expected
}))