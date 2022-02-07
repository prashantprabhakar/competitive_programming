

function nearestSmallerToLeft(arr) {
  let result = [], stack=[];
  stack.push(arr[0]);
  result[0] = -1;

  for(let i=1; i<arr.length; i++) {
    if(stack.length === 0) result[i] = -1
    // if current is smaller than smallest in stack (llast elemt); use last element and stack remains intack
    else if(stack[stack.length-1] < arr[i] ) result[i] = stack[stack.length-1];
    else {
      while(stack.length && stack[stack.length-1] >= arr[i] ) {
        stack.pop()
      }
      result[i] = stack.length ? stack[stack.length-1] : -1;
    }
    stack.push(arr[i])
  }
  console.log(result)
}

nearestSmallerToLeft([100, 80, 60, 70, 60, 75, 85]) // [-1, -1, -1, 60, -1, 60, 75]