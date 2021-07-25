/**
 * URL: https://leetcode.com/problems/unique-paths-ii/
 * source: leetcode
 */

/**
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

  The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

  Now consider if some obstacles are added to the grids. How many unique paths would there be?

  An obstacle and space is marked as 1 and 0 respectively in the grid.
 */


function uniquePathsWithObstacles(obstacleGrid) {
  let row = obstacleGrid.length;
  let col = obstacleGrid[0].length;

  let matrix = Array(row).fill(0).map(x => Array(col).fill(0))

  let isObstacelFound = false
  for(let i=0; i<row; i++) {
    if(obstacleGrid[i][0] == 1) isObstacelFound = true;
    matrix[i][0] = isObstacelFound ? 0 : 1
  }

  isObstacelFound = false
  for(let j=0; j<col; j++) {
    if(obstacleGrid[0][j] == 1) isObstacelFound = true;
    matrix[0][j] = isObstacelFound ? 0 : 1

  }

  for(let i=1; i<row; i++) {
    for(let j=1; j<col; j++) {
      matrix[i][j] = obstacleGrid[i][j] ? 0 : matrix[i-1][j] + matrix[i][j-1]
    }
  }

  console.log(matrix)

  return matrix[row-1][col-1]
}

//console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
//console.log(uniquePathsWithObstacles([[1,0]]))
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
