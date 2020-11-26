/**
 * Source: https://www.linkedin.com/posts/coding-club_asked-codingmafia-india-activity-6731420954070724608-epHR
 * Leetcode: https://leetcode.com/problems/minimum-path-sum/submissions/
 * Statement: Given a m*n grid filled with non negative numbers. find a path from top to bottom right which minimises sum of all numbers along its path.
 * Note: You can only move either down or right at any point in time.
 * 
 * Input: [[1,3,1], [1,5,1], [4,2,1]]
 * Output: 7
 * Explanation: 1 -> 3 --> 1 -->  1 --> 1
      
 */

// @dev Works but needs to be optimized
function findSortestSumPath(matrix,start_row=0, start_col=0, sumTotal=0) {

    sumTotal = sumTotal + matrix[start_row][start_col]
    if(start_row == matrix.length-1 && start_col == matrix[0].length-1) {
        return sumTotal
    }

    // only  Right movement possible
    if(start_row === matrix.length-1) {
        return findSortestSumPath(matrix, start_row, start_col+1, sumTotal)
    }

    // only Down movement possible
    if(start_col == matrix[0].length-1) {
        return findSortestSumPath(matrix, start_row+1, start_col, sumTotal)
    }

    // both movements are possible

    let s1 = findSortestSumPath(matrix, start_row+1, start_col, sumTotal)
    let s2 = findSortestSumPath(matrix, start_row, start_col+1, sumTotal)

    let min_path = Math.min(s1, s2)
    return min_path

}


function minSumPath(matrix) {
    const ROW = matrix.length
    const COL = matrix[0].length

    for(let i=1; i<ROW; i++) {
        matrix[i][0] =  matrix[i-1][0] + matrix[i][0]
    }

    for(let i=1; i<COL; i++) {
        matrix[0][i] = matrix[0][i-1] + matrix[0][i]
    }


    for(let i=1; i<ROW; i++) {
        for(let j=1; j<COL; j++) {
            matrix[i][j] += Math.min(matrix[i-1][j], matrix[i][j-1])
        }
    }
    return matrix[ROW-1][COL-1]
}




function _printMatrix(matrix) {
    let row = matrix.length
    let col = matrix[0].length
    for(let i=0; i<row; i++) {
        let str = ''
        for(j=0; j<col; j++) {
            str += `${matrix[i][j]}  `
        }
        console.log(str)
    }
}


console.log(findSortestSumPath([[1,3,1], [1,5,1], [4,2,1]]))
console.log(findSortestSumPath([[1,2,3],[4,5,6]]))
console.log(findSortestSumPath([[1,4,8,6,2,2,1,7],[4,7,3,1,4,5,5,1],[8,8,2,1,1,8,0,1],[8,9,2,9,8,0,8,9],[5,7,5,7,1,8,5,5],[7,0,9,4,5,6,5,6],[4,9,9,7,9,1,9,0]]))

console.log("\n")
console.log(minSumPath([[1,3,1], [1,5,1], [4,2,1]]))
console.log(minSumPath([[1,2,3],[4,5,6]]))
console.log(minSumPath([[1,4,8,6,2,2,1,7],[4,7,3,1,4,5,5,1],[8,8,2,1,1,8,0,1],[8,9,2,9,8,0,8,9],[5,7,5,7,1,8,5,5],[7,0,9,4,5,6,5,6],[4,9,9,7,9,1,9,0]]))