

function cloudFrontCaching(arr, nodeCount) {

  let relationMatrix = {}, result = 0;

  // O(m) -> m is length of arr
  for(let i=0; i<arr.length; i++) {
    let key = arr[i][0], related = arr[i][1];

    if(relationMatrix[key]) {
      relationMatrix[key].push(related);
    } else {
      relationMatrix[key]= [related];
    }
  }
  // space: O(n+1) -> n is no of nodes
  let isVisited = new Array(nodeCount + 1);

  // O(n*n)
  for(let i=1; i<= nodeCount; i++) {
    let stack = [], localCounter = 0;
    if(isVisited[i]) continue;
    localCounter++
    if(relationMatrix[i]) stack.push(...relationMatrix[i]);

    while(stack.length !== 0) {
      let processingNode = stack.pop()
      if(isVisited[processingNode]) continue;
      else {
        isVisited[processingNode] = true;
        localCounter++;
        if(relationMatrix[processingNode]) stack.push(...relationMatrix[processingNode]);
      }
      
    }
    result += (localCounter == 1) ? localCounter : Math.ceil(Math.sqrt(localCounter))
   
  }
  return result;

}




console.log(cloudFrontCachingOp1([
  [1,2], [1,3], [2,4], [3,5], [7,8]
], 10))

// console.log(cloudFrontCachingOp1([
//   []
// ], 10))

// console.log(cloudFrontCachingOp1([
//   []
// ], 0))