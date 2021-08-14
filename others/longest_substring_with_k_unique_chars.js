/**
 * find the longest substring with k unique chars
 * tags: ['sliding window']
 */

function longestSubstringWithGivenUniqueChars(str, k) {
  let uniqueCharMap = new Map()
  let i=0; j=0;
  let max = 0;

  while(j<str.length) {
    let char = str[j]
    increaseCount(char);

    if(uniqueCharMap.size === k) {
      max = Math.max(max, j-i+1)
    }
    else if(uniqueCharMap.size < k) {
      // do nothing
    }
    else if(uniqueCharMap.size > k) {
      while(uniqueCharMap.size > k) {
        decreaseCount(str[i])
        i++;
      }
    }
    j++

  }

  function increaseCount(char) {
    if(uniqueCharMap.has(char)) uniqueCharMap.set(char, uniqueCharMap.get(char)+1);
    else uniqueCharMap.set(char, 1)
  }

  function decreaseCount(char) {
    if(uniqueCharMap.get(char) === 1) uniqueCharMap.delete(char)
    else uniqueCharMap.set(char, uniqueCharMap.get(char)-1);
  }

  return max

}


const tests = [
  {
    input: ["aabbcc", 2],
    expected: 4
  }
]

tests.forEach(test => console.log({
  output: longestSubstringWithGivenUniqueChars.apply(this, test.input),
  expected: test.expected
}))