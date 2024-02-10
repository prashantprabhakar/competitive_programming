/**
 * source: https://leetcode.com/problems/island-perimeter/
 * tags: ['leetcode', 'matrix', 'dfs']
 * difficulty: 'easy'
 */

function findPerimeter(matrix) {
    const ROW = matrix.length;
    const COL = matrix[0].length;
    const isVisited = {}; // i_j
    
    let perimeter = 0;
    
    for(let i=0; i<ROW; i++) {
      for(let j=0;j<COL; j++) {
        if(matrix[i][j] == 1) {
          dfs(i, j);
          break; // since there is just one island
        }
      }
    }
    
    function dfs(row, col) {
        if(row > ROW || col > COL || row < 0 ||  col <  0) {
          perimeter++;
          return;
        };
        if(matrix[row][col] === 0) return;
        let cell = `${row}_${col}`;
        if(isVisited[cell]) {
         // perimeter--
          return;
        };
          perimeter += 4;
        isVisited[cell] = true;
        // left
          if(col > 0 && matrix[row][col-1] === 1) {
          perimeter--;
          dfs(row, col-1);
        }
        // right
        if(col < COL-1 && matrix[row][col+1] === 1) {
          perimeter--;
          dfs(row, col+1);
        }
          // up
          if(row > 0 && matrix[row-1][col] === 1) {
          perimeter--;
          dfs(row-1, col)
        }
        // dowm
          if(row< ROW-1 && matrix[row+1][col] === 1) {
          perimeter--;
          dfs(row+1, col);
        }
    }
    
    console.log(perimeter)
    
  }
  