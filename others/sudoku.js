/**
 * Type: backtracking
 * Solve a soduku
 * 
 * Given a partially filled 9×9 2D array ‘grid[9][9]’, the goal is to assign digits (from 1 to 9) to the empty cells 
 * so that every row, column, and subgrid of size 3×3 contains exactly one instance of the digits from 1 to 9.
 * 
 * UR: https://www.geeksforgeeks.org/sudoku-backtracking-7/?ref=leftbar-rightbar
 */

// variable used to denote empty cell in matrix
const EMPTY_CELL = 0

// check if matrix is valid
function isSafe(matrix, currentRow, currentCol, currentVal) {
    let BOARD_SIZE = matrix.length

    for(let i=0; i<BOARD_SIZE; i++) {
        // check if row is valid
        if(matrix[currentRow][i] == currentVal) return false
        // check if col is valid
        if(matrix[i][currentCol] == currentVal) return false
    }

    

    // check square board
    let small_board_size = Math.sqrt(BOARD_SIZE)
    let board_row_start = currentRow - currentRow % small_board_size
    let board_col_start = currentCol - currentCol % small_board_size

    // check 3*3 board
    for(let i=board_row_start; i<board_row_start+small_board_size; i++) {
        for(let j=board_col_start; j<board_col_start+small_board_size; j++) {
            if(matrix[i][j] == currentVal) return false
        }
    }

    return true
    
}

// We'll first try all columns in a row and when done; move to next column
function solveSudoku(matrix, row=0, col=0, emptyCount=-1) {

    let BOARD_SIZE = matrix.length

    // this function will run only once
    if(emptyCount == -1) emptyCount = countEmptyCells(matrix)

    // base case; when no cells woth 0 exists
    if(emptyCount == 0) {
        _printMatrix(matrix)
        return true
    }

    // end of row; move to next row
    if(col == BOARD_SIZE) {
        row++
        col = 0
    }

    // if element is not zero; keep as it is
    if(matrix[row][col] != EMPTY_CELL) {
        return solveSudoku(matrix, row, col+1, emptyCount);
    }
    

    // try all digits from 1 to 9
    for(let i=1; i<=9; i++) {
        if(isSafe(matrix, row, col, i)) {
            matrix[row][col] = i
            emptyCount--
            if(solveSudoku(matrix, row, col+1, emptyCount)) {
                return true
            } else {
                // backtrack
                matrix[row][col] = EMPTY_CELL
                emptyCount++
            }
        } 
    }
    return false
}

function countEmptyCells(matrix) {
    let BOARD_SIZE = matrix.length
    let emptyCount = 0
    for(let i=0; i<BOARD_SIZE; i++) {
        for(let j=0; j<BOARD_SIZE; j++) {
            if(matrix[i][j] == EMPTY_CELL) emptyCount++
        }
    }

    return emptyCount
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
[ 3, 1, 6, 5, 7, 8, 4, 9, 2 ], 
[ 5, 2, 9, 1, 3, 4, 7, 6, 8 ], 
[ 4, 8, 7, 6, 2, 9, 5, 3, 1 ], 
[ 2, 6, 3, 0, 1, 5, 9, 8, 7 ], 
[ 9, 7, 4, 8, 6, 0, 1, 2, 5 ], 
[ 8, 5, 1, 7, 9, 2, 6, 4, 3 ], 
[ 1, 3, 8, 0, 4, 7, 2, 0, 6 ], 
[ 6, 9, 2, 3, 5, 1, 8, 7, 4 ], 
[ 7, 4, 5, 0, 8, 6, 3, 0, 9 ] ]

let matrix2 = [
    [ 5 , 3 , 0 , 0 , 7 , 0 , 0 , 0 , 0 ],
    [ 6 , 0 , 0 , 1 , 9 , 5 , 0 , 0 , 0 ],
    [ 0 , 9 , 8 , 0 , 0 , 0 , 0 , 6 , 0 ],
    [ 8 , 0 , 0 , 0 , 6 , 0 , 0 , 0 , 3 ],
    [ 4 , 0 , 0 , 8 , 0 , 3 , 0 , 0 , 1 ],
    [ 7 , 0 , 0 , 0 , 2 , 0 , 0 , 0 , 6 ],
    [ 0 , 6 , 0 , 0 , 0 , 0 , 2 , 8 , 0 ],
    [ 0 , 0 , 0 , 4 , 1 , 9 , 0 , 0 , 5 ],
    [ 0 , 0 , 0 , 0 , 8 , 0 , 0 , 7 , 9 ]
    ]



solveSudoku(matrix2)
