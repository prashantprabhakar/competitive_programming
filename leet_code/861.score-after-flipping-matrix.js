/**
 * https://leetcode.com/problems/score-after-flipping-matrix/description/
 * https://leetcode.com/problems/score-after-flipping-matrix/description/
 */


function matrixScore(grid) {
    const R = grid.length, C = grid[0].length;

    const flipRow = (r) => {
        grid[r] = grid[r].map(val => val ? 0 : 1)
    }
    const flipCol = (c) => {
        for(let i=0; i<R; i++) {
            grid[i][c] = grid[i][c] ? 0 : 1;
        }
    }

    const countOnesInCol = (c) => {
        let count = 0;
        for(let i=0; i<R; i++) {
            if(grid[i][c] === 1) count++
        }
        return count
    }

    const findSum = () => {
        return grid.reduce((acc, curr) => {
            const binary = curr.join('');
            const decimal = parseInt(binary, 2);
            return acc + decimal
        }, 0)
    }

    // flip row first to get 1 on most significant bit
    for(let i=0; i<R; i++) {
        if(grid[i][0] === 0) {
            flipRow(i)
        }
    }

    // now for every column if no of 1s is less than no of zeros, flip it
    for(let j=0; j<C; j++) {
        const ones = countOnesInCol(j);
        const zeros = R - ones;
        if(ones < zeros) {
            flipCol(j)
        }
    }

    

    const sum = findSum(grid);
    console.log(grid)
    console.log(sum)
}


matrixScore([[0,0,1,1],[1,0,1,0],[1,1,0,0]]) // 39
// matrixScore([[0]]) // 1
matrixScore([[0,1],[0,1],[0,1],[0,0]]) // expected: 11

// 0 1
// 0 1
// 0 1
// 0 0

// 1 0
// 1 0
// 1 0
// 1 1

// 1 1
// 1 1
// 1 1
// 0 1