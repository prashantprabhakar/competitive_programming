/**
 * source: https://leetcode.com/problems/next-greater-element-i/
 * tags: ['leetcode', 'stack']
 */


function nextGreaterElement(arr1, arr2) {
  let result = [], stack = [], nextGreater2 = [];

  let map = {};
  for(let i=0; i<arr1.length; i++) {
    map[arr1[i]] = i;
  }

  // find nextGreater of arr2
  for(let i=arr2.length-1; i>=0; i--) {
    if(!stack.length) nextGreater2[i] = -1;
    else if(stack[stack.length-1] > arr2[i]) {
      nextGreater2[i] = stack[stack.length-1];
    } else {
      while(stack.length && stack[stack.length-1] <= arr2[i]) stack.pop()
      nextGreater2[i] = stack.length ? stack[stack.length-1] : -1;
    }

    if(map[arr2[i]] !== undefined) result[map[arr2[i]]] = nextGreater2[i]

    stack.push(arr2[i]);
  }

  return result;

}

const tests = [
  {
    input: [[4,1, 2], [1,4,5,2]],
    expected: [5,4,-1]
  },
  {
    input: [[], []],
    expected: []
  },
  {
    input: [[4,1,2], [1,3,4,2]],
    expected: [-1, 3, -1]
  }
]

tests.forEach(test => console.log({
  output: nextGreaterElement.apply(this, test.input),
  expected: test.expected
}))