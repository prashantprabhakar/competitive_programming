// print longest common substring


function longestCommonSubstring(str1, str2) {

  let dpMatrix = new Array(str1.length+1).fill('').map(() => new Array(str2.length).fill(''));
  let result = ''

  for(let i=1; i<str1.length+1; i++) {
    for(let j=1; j<str2.length+1; j++) {

      if(str1[i-1] === str2[j-1]) {
        dpMatrix[i][j] = str1[i-1] + dpMatrix[i-1][j-1]
        if(result.length < dpMatrix[i][j].length) result = dpMatrix[i][j]

      } else {
        dpMatrix[i][j] = ''
      }
    }
  }
  return result.split("").reverse().join("");
}


const tests = [
  {
    input: ["a", "n"],
    expected: "",
  },
  {
    input: ["ezupkr", "ubmrapg"],
    expected: "u"
  },
  {
    input: ["abcde", "ace"],
    expected: "a",
  },
  {
    input: ["abc", "abc"],
    expected: "abc",
  },
  {
    input: ["abc", "def"],
    expected: "",
  }
]

tests.forEach(test => console.log({
  output: longestCommonSubstring.apply(this, test.input),
  expected: test.expected
}))