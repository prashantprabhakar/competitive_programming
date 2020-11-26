/**
 * Source: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
 * Return the number of negative numbers in grid.
 */

function countNegatives(matrix) {

    let ROW = matrix.length - 1
    let COL = matrix[0].length -1 

    let count = 0

    // key point is negative nos will at bottom-right of array
    for(let i=ROW; i>=0; i--) {
        if(matrix[i][COL] > 0) break
        for(let j=COL; j>=0; j--) {
            if(matrix[i][j] < 0) count++
            else break
        }
    }

    return count

}

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))