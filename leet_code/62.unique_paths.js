/** 
 *  URL: https://leetcode.com/problems/unique-paths/
 * source: ['leetcode']
 * 
*/

/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
 * The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
 * How many possible unique paths are there?
 */

// Complexity 
function uniquePath_recursion(row, col) {
  if(row == 1 || col == 1) return 1;
  return uniquePath_recursion(row-1, col) + uniquePath_recursion(row, col-1)
}

function uniquePath_recursion_1(R, C,r=0, c=0, ) {
  if(r>R || c>C) return 0
  if(r==R-1 && c==C-1) return 1
  return uniquePath_recursion_1(R, C, r+1, c) + uniquePath_recursion_1(R, C, r,c+1)
}

function uniquePath_memoize(R, C) {
  
  let matrix = Array(R).fill(-1).map(x => Array(C).fill(-1));

  function recursiveMemo(R, C, r, c, matrix) {
    if(r==R-1 || c==C-1) return 1
    if(r>R-1 || c>C-1) return 0

    if(matrix[r][c] != -1) return matrix[r][c]

    matrix[r][c] = recursiveMemo(R,C, r+1, c, matrix) + recursiveMemo(R,C, r, c+1, matrix);
    return matrix[r][c]
  }

  let res =  recursiveMemo(R,C, 0,0, matrix)
  return res
}

function uniquePath_memoize_using_map(R, C) {
  let map = new Map()

  function recursiveMemo(R, C, r, c, map) {
    if(r==R-1 || c==C-1) return 1
    if(r>R-1 || c>C-1) return 0

    let key = `${r}_${c}`
    if(map.has(key)) return  map.get(key)

    map.set(key, recursiveMemo(R,C, r+1, c, map)+recursiveMemo(R,C, r, c+1, map));
    return map.get(key)

  }

  let res =  recursiveMemo(R,C, 0,0, map)
  console.log(map)
  return res
}

function uniquePathUsing_iteration(row, col) {

  let matrix = Array(row).fill(0).map(x => Array(col).fill(0));

  for(let i=0; i<row; i++) {
    matrix[i][0] = 1
  }

  for(let i=0; i<col; i++) {
    matrix[0][i] = 1
  }


  for(let i=1; i<row; i++) {
    for(let j=1; j<col; j++) {
      matrix[i][j] = matrix[i-1][j] + matrix[i][j-1]
    }
  }
  console.log(matrix)
  return matrix[row-1][col-1]
}


// console.log(uniquePath_memoize_using_map(3,3))
//console.log(uniquePath_memoize(7,3))
// console.log(uniquePath_recursion_1(3,3))
console.log(uniquePathUsing_iteration(7,3))