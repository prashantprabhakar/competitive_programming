// find nearest greater to lext

function nearestGreateToLeft(arr) {
  let result = [], stack = [];

  stack.push(arr[0]);
  result[0] = -1;

  for(let i=1; i<arr.length; i++) {
    if(stack.length === 0) result[i] = -1;
    else if(arr[i] <= stack[stack.length-1]) result[i] = stack[stack.length-1];
    else {
      while(stack.length && arr[i] > stack[stack.length-1]){
        stack.pop()
      }
      result[i] = stack.length === 0 ? -1 : stack[stack.length-1]
    }
    stack.push(arr[i]);
  }

 
  console.log(result)

}

nearestGreateToLeft([100, 80, 60, 70, 60, 75, 85]) // [-1,100,  80, 80, 70, 80, 100 ]