/**
 * Interview : Shipsy
 * Given a boolean 2D matrix, find the number of islands. A group of connected 1s forms an island.
 * solution: https://www.geeksforgeeks.org/find-number-of-islands/
 */


function countIsland(matrix) {
    let row = matrix.length
    let col = matrix[0].length

    let visited = new Array(row).fill(new Array(col).fill(0))

    let isLandCount = 0

    for(let i=0; i<row; i++) {
        for(j=0; j<col; j++) {
            // If cell has value 1 and is not visited we found a new Island
            if(matrix[i][j] && !visited[i][j]) {
                dfs(matrix, i, j, visited)
                isLandCount++
            }
        }
    }

    console.log(isLandCount)
}


function dfs(matrix, row, col, visited) {
    // possible positions to move
    let rowMovs = [-1, -1, -1,  0, 0,  1, 1, 1]
    let colMovs = [-1,  0,  1, -1, 1, -1, 0, 1]

    // mark current row as visited
    visited[row][col] = true

    for(let i=0; i<8; i++) {
        let saveMvmnt = isSafe(matrix, row+rowMovs[i], col+colMovs[i], visited)
        if(saveMvmnt) dfs(matrix, row+rowMovs[i], col+colMovs[i], visited)
    }
}

// check if we can move given i, j position
function isSafe(matrix, row, col, visited) {
    return (row >0 && row < matrix.length && 
        col > 0 && col < matrix[0].length && 
        matrix[row][col] &&
        !visited[row][col]
    )
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


let matrix = [
[1, 1, 0, 0, 0], 
[0, 1, 0, 0, 1], 
[1, 0, 0, 1, 1], 
[0, 0, 0, 0, 0], 
[1, 0, 1, 0, 1]]

countIsland(matrix)