/**
 * source: https://leetcode.com/problems/valid-sudoku/
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rule
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition
 */

let EXP_SUM = 45

function isValid(matrix) {

    let BOARD_SIZE = matrix[0].length

    // validate each row
    for(let row=0; row<BOARD_SIZE; row++) {
        let sum = 0
        for(let col=0; col<BOARD_SIZE; col++) {
            sum += matrix[row][col]
        }
        if(sum != EXP_SUM) return false
    }

    // validate col
    for(let col=0; col<BOARD_SIZE; col++) {
        let sum = 0
        for(let row=0; row<BOARD_SIZE; row++) {
            sum += matrix[col][row]
        }
        if(sum != EXP_SUM) return false
    }

    // check 3 * 3 board
    let row = 0
    while(row < BOARD_SIZE) {
        let col = 0
        while (col < BOARD_SIZE) {
            let sum = 0
            for(let i=row; i<row+3; i++) {
                for(let j=col; j<col+3; j++) {
                    sum += matrix[i][j]
                }
            }
            if(sum != EXP_SUM) return false
            col += 3
        }
        row+=3
       
    }
    return true

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

let solvedMat = [
    [5,  3,  4,  6,  7,  8,  9,  1,  2],  
    [6,  7,  2,  1,  9,  5,  3,  4,  8],  
    [1,  9,  8,  3,  4,  2,  5,  6,  7], 
    [8,  5,  9,  7,  6,  1,  4,  2,  3], 
    [4,  2,  6,  8,  5,  3,  7,  9,  1], 
    [7,  1,  3,  9,  2,  4,  8,  5,  6], 
    [9,  6,  1,  5,  3,  7,  2,  8,  4], 
    [2,  8,  7,  4,  1,  9,  6,  3,  5], 
    [3,  4,  5,  2,  8,  6,  1,  7,  9]    

]

console.log(isValid(matrix))
console.log(isValid(solvedMat))