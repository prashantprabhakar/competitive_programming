/**
 * https://leetcode.com/problems/largest-local-values-in-a-matrix/description/
 */


/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n = grid.length;
    const m = n-2;
    let result = new Array(m).fill(null).map(() => new Array(m))
    for(let i=0; i<n-2; i++) {
        for(let j=0; j<n-2; j++) {
            result[i][j]  = findMax(i,j)
        }
    }
    return result

    function findMax(m1,n1) {
        let max = grid[m1][n1]
        for(let i=m1; i<m1+3; i++) {
            for(let j=n1; j<n1+3; j++) {
                max = Math.max(grid[i][j], max);
            }
        }
        return max;
    }

};

// result[i][j] =  
// max(result[i-1][j], Max(grid[i+2][j], grid[i+2][j+1], grid[i+2][j+2])    // grid[i=i+2, j= j-> j+2]) , 
// max(result[i][j-1],Max(grid[i][j+2], grid[i+1][j], grid[i+2][j])  grid[i=i-> i+2, j=j+2])
// max(result[i-1][j-1], Max())


console.log(largestLocal([[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]))