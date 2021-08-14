// Print longest common subsequence of a string

function printLcs(str1, str2) {
  let dpMatrix = new Array(str1.length+1).fill('').map(() => new Array(str2.length+1).fill(''));

  for(let i=1; i<str1.length+1; i++) {
    for(let j=1; j<str2.length+1; j++) {

      if(str1[i-1] === str2[j-1]) {
        dpMatrix[i][j] = str1[i-1]+dpMatrix[i-1][j-1];  //1 + dpMatrix[i-1][j-1];
      } else {
        let temp1 = dpMatrix[i-1][j];
        let temp2 = dpMatrix[i][j-1];
        dpMatrix[i][j] = temp1.length > temp2.length ? temp1 : temp2
      }
    }
  }
  let str =  dpMatrix[str1.length][str2.length]
  // we'll need to reverse the string as we had a top-down
  return str.split("").reverse().join("");
}



const tests = [
  {
    output: printLcs("a", "n"),
    expected: 0,
  },
  {
    output: printLcs("ezupkr", "ubmrapg"),
    expected: 2
  },
  {
    output: printLcs("abcde", "ace"),
    expected: 3,
  },
  {
    output: printLcs("abc", "abc"),
    expected: 3,
  },
  {
    output: printLcs("abc", "def"),
    expected: 0,
  }
]

tests.forEach(test => console.log(test))