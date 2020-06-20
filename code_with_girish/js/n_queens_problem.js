
function isSafe(matrix, row, col) {

    // check  row
    for(let i=0; i<matrix[row].length; i++) {
        if(matrix[row][i] == 1) return false
    }

    // check column
    for(let i=0; i<matrix.length; i++) {
        if(matrix[i][col] == 1) return false
    }

    // check upper diagonal left ( row -; col-)
    for(let i=row-1, j=col-1; i >=0 && j >=0; j--, j--) {
        if(matrix[i][j] == 1) return false
    }

    // check upper diagonal right  (row-; col+ )
    for(let i=row-1, j=col+1; i>=0 && j<=matrix[0].length; i--, j++) {
        if(matrix[i][j] == 1) return false
    }

    // check lower diagonal right (row+; col+)
    for(let i=row+1, j=col+1; i < matrix[0].length && j < matrix.length; i++, j++) {
        if(matrix[i][j] == 1) return false
    }

    // check lower diagonal left (row+; col-)
    for(let i=row+1, j=col-1; i<matrix[0].length && j >=0 ; i++, j--) {
        if(matrix[i][j] == 1) return false
    }

    return true

}

const findQueens = (matrix, col=0)  => {
    // Consider this column and try placing this queen in all rows one by one

    // base condition
    if(col >= matrix[0].length) return true

    // traverse on each row
    for(let i=0; i<matrix.length; i++) {

        if(isSafe(matrix, i, col)) {
            matrix[i][col] = 1
            if(findQueens(matrix, col+1) == true) return true
            matrix[i][col] = '.'
        }
    }
    return false
}


function driver(n) {
    const matrix = new Array(n).fill('.').map(() => new Array(n).fill('.'))
    let res = findQueens(matrix)
    if(!res) {
        console.log("No solution exists")
    } else {
        console.log(matrix)
    }
    
}

driver(4)