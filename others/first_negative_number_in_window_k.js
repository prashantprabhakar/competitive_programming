/**
 * find the first negative number in window size of k
 */




function firstNegative(arr, k) {
  let result = [];
  let i=0; j=0, stack = [];

  while(j<arr.length) {
    if(arr[j] < 0) {
      stack.push(arr[j]);
    }
    if(j-i+1 === k) {
      !stack.length ? result.push(0) : result.push(stack[0]);
      if(arr[i] < 0) {
        stack.shift();
      }
      i++;
    }
    
    j++;
  }
  return result
}


const tests = [
  {
    input: [ [12, -1, -7, 8, -15, 30, 16, 28], 3],
    expected: [-1, -1, -7, -15, -15, 0 ]
  }
]

tests.forEach(test => console.log({
  output: firstNegative.apply(this, test.input),
  expected: test.expected
}))