/**
 * source: https://www.geeksforgeeks.org/the-stock-span-problem/
 */

function stockSpan(arr){
  let result = [], stack = [];
  result[0] = 1;
  stack.push({val: arr[0], index: 0})

  for(let i=1; i<arr.length; i++) {
    if(stack.length === 0) result[i] = 1
    else if(stack[stack.length-1].val > arr[i]) {
      result[i] = i-stack[stack.length-1].index;
    } else {
      while(stack.length && stack[stack.length-1].val < arr[i] ) {
        stack.pop()
      }
      result[i] = !stack.length ? 1 : i-stack[stack.length-1].index;
    }
    stack.push({val: arr[i], index: i})
  }
  console.log(result)
}


console.log(stockSpan([100, 80, 60, 70, 60, 75, 85])) // [1, 1, 1, 2, 1, 4, 6]