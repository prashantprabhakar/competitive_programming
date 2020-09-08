
function printSpiral(matrix, sprial=[], firstRow=0, firstCol=0, lastRow=matrix.length-1, lastCol=matrix[0].length-1) {

    if(firstRow > lastRow || firstCol > lastCol) return sprial

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
    return printSpiral(matrix, sprial, firstRow, firstCol, lastRow, lastCol)
}


function driver(matrix) {
    if(!matrix.length) return []
    if(!matrix[0].length) return []
    return printSpiral(matrix)
}

driver([[1,2,3, 4, 20, 21, 22 ], [5,6, 7, 8, 23, 24, 25 ], [9, 10, 11, 12, 26, 27, 28 ], [13,14,15,16, 29, 30, 31 ], [17, 18, 19, 20, 32, 33,34 ]])

console.log(driver([]))
console.log(driver([[], [], []]))


/**
 * [1  2  3  4  20 21 22 40]
 * [5  6  7  8  23 24 25 41]
 * [9  10 11 12 26 27 28 42]
 * [13 14 15 16 29 30 31 43]
 * [17 18 19 20 32 33 34 44]
 */