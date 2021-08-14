

function rotateMatrix(matrix) {
  const n = matrix.length;

  let result = new Array(n).fill(-1).map(() => new Array(n).fill(-1));

  // arr[i][0] = arr[n-1][0]
  // iterate over each row and fill
  for(let i=0; i<n; i++) {
    for(let j=0; j<n; j++) {
      result[n-1-i][j] = matrix[j][i]
    }
  }
  console.log(result)
}

function rotateMatrixOp1(matrix) {
  const n = matrix.length;

  let result = new Array(n).fill(-1).map(() => new Array(n).fill(-1));

 
  console.log(result)
}

rotateMatrix([[1,2,3], [4,5,6], [7,8,9]])
rotateMatrix([[1,2,3,4], [5,6,7,8], [9, 10, 11, 12], [13,14,15,16]])
