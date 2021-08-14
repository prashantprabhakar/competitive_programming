/**
 * url: https://leetcode.com/problems/daily-temperatures/
 * source: ['leetcode', 'stack']
 */

/**
 * Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.
 */

function dailyTemperatures(arr) {
  let result=[], stack=[]

  for(let i=arr.length-1; i>=0; i--) {
    if(!stack.length) result[i] = 0;
    else if(stack[stack.length-1].value > arr[i]) {
      result[i] =  stack[stack.length-1].index  - i;
    } else {
      while(stack.length && stack[stack.length-1].value <= arr[i]) stack.pop()
      result[i] = stack.length ? stack[stack.length-1].index  - i : 0
    }
    stack.push({value: arr[i], index: i})
  }
  return result;
}

const tests = [
  // {
  //   input: [[30,60,90]],
  //   expected: [1,1,0]
  // },
   {
    input: [[73,74,75,71,69,72,76,73]],
    expected: [1,1,4,2,1,1,0,0]
  },
]

tests.forEach(test => console.log({
  output: dailyTemperatures.apply(this, test.input),
  expected: test.expected
}))