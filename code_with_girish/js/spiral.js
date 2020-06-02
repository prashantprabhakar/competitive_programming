
let sprial = []
function printSpiral(matrix, firstRow=0, firstCol=0, lastRow=matrix.length-1, lastCol=matrix[0].length-1) {

    if(firstRow > lastRow || firstCol > lastCol) return

    // print first row
    if(firstRow <= lastRow) {
        for(let i=firstRow; i<=lastCol; i++) {
            sprial.push(matrix[firstRow][i])
        }
    }   

    // last column
    if(firstCol <= lastCol) {
        for(let i=firstCol+1; i<=lastRow; i++) {
            sprial.push(matrix[i][lastCol])
        }
    }

    // last row in reverse
    if(firstRow < lastRow) {
        for(let i=lastCol-1; i>=firstCol; i--) {
            sprial.push(matrix[lastRow][i])
        }
    }


    // first col in reverse
    if(firstCol < lastCol) {
        for(let i=lastRow-1; i>= firstCol+1; i--) {
            sprial.push(matrix[i][firstCol])
        }
    }

    firstRow++
    lastRow--
    firstCol++
    lastCol--
    printSpiral(matrix, firstRow, firstCol, lastRow, lastCol)
}


printSpiral([[1,2,3, 4, 20, 21, 22 ], [5,6, 7, 8, 23, 24, 25 ], [9, 10, 11, 12, 26, 27, 28 ], [13,14,15,16, 29, 30, 31 ], [17, 18, 19, 20, 32, 33,34 ]])
console.log(sprial.length)
console.log(sprial)

/**
 * [1  2  3  4  20 21 22 40]
 * [5  6  7  8  23 24 25 41]
 * [9  10 11 12 26 27 28 42]
 * [13 14 15 16 29 30 31 43]
 * [17 18 19 20 32 33 34 44]
 */