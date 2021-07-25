/**
 * URL: https://leetcode.com/problems/minimum-path-sum/
 * Soruce: ['leetcode']
 */

 /**
  * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.
    Note: You can only move either down or right at any point in time
  */


function minPathSum(grid) {
  const row = grid.length;
  const col = grid[0].length;

  const minCostMatrix = Array(row).fill(0).map(x => Array(col).fill(0));

  minCostMatrix[0][0] = grid[0][0]

  // fill rows
  for(let i=1; i<row; i++) {
    minCostMatrix[i][0] = minCostMatrix[i-1][0] + grid[i][0]
  }

  for(let j=1; j<col; j++) {
    minCostMatrix[0][j] = minCostMatrix[0][j-1] + grid[0][j]
  }

  console.log(minCostMatrix)



  for(let i=1; i<row; i++) {
    for(let j=1; j<col; j++) {
      minCostMatrix[i][j] = grid[i][j] + Math.min(minCostMatrix[i-1][j], minCostMatrix[i][j-1])
    }
  }

  return minCostMatrix[row-1][col-1]

}

console.log(minPathSum([[1,2,3],[4,5,6]]))