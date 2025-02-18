/**
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 * 74. Search a 2D Matrix
 * Difficulty: medium
 * Tags: Array, Binary Search
 */


/**
     You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.
    Given an integer target, return true if target is in matrix or false otherwise.

    You must write a solution in O(log(m * n)) time complexity.

    Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104
    
 */


/** 
 * Developers thought process:
    I think we need to  find a row where value fits by checking last column. Once we find firtColVal < num < lastColVal -> that is our row -> now we can use binary search for that
    Once we have identified the row, since row is already sorted, finding value there can also be done with binary search
 */

function searchMatrix(matrix, target) {
    const rowLen = matrix.length;
    const colLen = matrix[0].length;

    function bsRow(start, end) {
        if(end < start) return -1;
        const midRow = Math.floor((end + start) / 2);

        if(target >= matrix[midRow][0] && target <= matrix[midRow][colLen-1]) {
            return midRow;
        }

        if(target < matrix[midRow][0]) {
            return bsRow(start, midRow - 1);
        } else {
            return bsRow(midRow + 1, end)
        }
    }

    const row = bsRow(0, rowLen-1);

    if(row === -1) return false;

    function searchItem(start, end) {
        if(end < start) return -1;
        const midCol = Math.floor((end + start) / 2);
        const val = matrix[row][midCol];

        if(val === target) return midCol;
        if(target > val) return searchItem(midCol+1, end);
        else return searchItem(start, midCol-1);

    }

    const col = searchItem(0, colLen-1)

    if(col === -1) return false
    return true;

}



console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 15)) // false
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 7)) // true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 1)) // true
console.log(searchMatrix([[1,3,5,7]], 60)) // false
console.log(searchMatrix([[1,3,5,7]], 5)) // false