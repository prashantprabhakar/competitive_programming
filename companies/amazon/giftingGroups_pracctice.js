

function giftingGroups(inputArr) {
  let matrix = toArray(inputArr);
  let n = matrix.length;
  let isProcessed = new Array(n);
  let count = 0;
  for(let i=0; i<n; i++) {
    if(isProcessed[i]) continue;
    count++;
    let stack = []
    stack.push(i);
    while(stack.length) {
      let elem = stack.pop();
      if(isProcessed[elem]) continue;
      isProcessed[elem] = true;
      for(let j=0; j<n; j++) {
        if(j== elem) continue;
        if(matrix[elem][j] === 1) stack.push(j);
      }
    }
  }
  return count;


}


function toArray(arr) {
  let result = [];
  for(let i=0; i<arr.length; i++) {
    let str = String(arr[i])
    result[i] = str.split("").map(item => parseInt(item))
  }
  return result
}


console.log(giftingGroups(["110", "110", "001"])) // 2
console.log(giftingGroups(["1100", "1101", "0010", "0001"])) // 2