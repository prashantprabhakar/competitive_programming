/**
 * https://leetcode.com/problems/equal-row-and-column-pairs/?envType=daily-question&envId=2023-11-09
 * 2352. Equal Row and Column Pairs
 */


function equalPairs(grid) {
    let n = grid.length;
    let rowMap = {}, colMap = {};
    for(let i=0; i<n; i++) {
      let rowStr = '', colStr = '';
      for(let j=0; j<n; j++)  {
        rowStr += `${grid[i][j]}_`
        colStr += `${grid[j][i]}_`
      }
      
      rowMap[rowStr] = rowMap[rowStr] ? rowMap[rowStr]+1: 1
      colMap[colStr] = colMap[colStr] ? colMap[colStr]+1: 1
    }

    console.log(rowMap)
    console.log(colMap)

    const rowHashes = Object.keys(rowMap);
    let result = 0;
    for(let i=0; i<rowHashes.length; i++) {
      const key = rowHashes[i];
      if(colMap[key]) {
        result += (rowMap[key] * colMap[key]);
      }
    }
    return result;
}

const tests =  [
        // {grid: [[3,2,1],[1,7,6],[2,7,7]] , expected: 1},
        {grid: [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]], expected: 3},
//         {grid: [[3,3,2,2],[3,3,2,2],[2,2,2,2],[2,2,2,2]], expected: 8},
//         {grid: [[3,3,2,2],[3,3,2,2],[2,2,2,2],[2,2,1, 1]], expected: 4},
]

tests.forEach(test => {
    let result = equalPairs(test.grid);
    console.log({ expected: test.expected, result})
})