/**
 * https://leetcode.com/problems/cherry-pickup-ii/description/
 */


// This is not actual problem, this just assumes 1 robot
function cherryPick1(grid) {
    // for each robot, we need to try all the paths from given position and then return max when robot reaches bottom
    // we need to find which path will pick highest cherries. We can start with 1 robot and then think of 2 robots.

    const ROW_LEN = grid.length;
    const COL_LEN = grid[0].length;

    const cache = {}

    function isValidCell(i, j) {
       return i >=0 && i < ROW_LEN && j >=0 && j < COL_LEN
    }


    function rec(grid, i1, j1, cherriesPicked1) {
        if(!isValidCell(i1, j1)) {
            return 0
        }

        if(cache[`${i1}_${j1}`] !== undefined) return cache[`${i1}_${j1}`];
        const currentCherries = grid[i1][j1]

        grid[i1][j1] = 0;
        if(i1 === ROW_LEN-1) {
            grid[i1][j1] = currentCherries;
            return cherriesPicked1 +  currentCherries;
        }

        // move diagoal left
        let r1 = rec(grid, i1+1, j1-1, cherriesPicked1 + currentCherries);

        // move diagonal right
        let r2 = rec(grid, i1+1, j1+1, cherriesPicked1 + currentCherries);

        // move downwards
        let r3 = rec(grid, i1+1, j1, cherriesPicked1 + currentCherries);
        
        const res = Math.max(r1, r2, r3);

        cache[`${i1}_${j1}`] = res;
        grid[i1][j1] = currentCherries;
        return res;
    }

    return rec(grid, 0, 0, 0)
}


// @HELP @Todo
// This solutions works, but memozation doesn't
// For test case 3: [[1,0,0,3],[0,0,0,3],[0,0,3,3],[9,0,3,3]]; it returns 19 (with memoization) but expected is 22
function cherryPick2(grid) {

    const ROW_LEN = grid.length;
    const COL_LEN = grid[0].length;

    const cache = {}

    function isValidCell(i, j) {
       return i >=0 && i < ROW_LEN && j >=0 && j < COL_LEN
    }


    // We don't need i1 and i2 since both robots will always move downward only so i1 and i2 will be same
    function rec(i, j1, j2, cherriesPicked) {
        if(!isValidCell(i, j1)) {
            return 0;
        }

        if(!isValidCell(i, j2)) {
            return 0;
        }
        // when j1, j2 are same, only one robot can pick cherries.
        const currentCherries = j1 === j2 ? grid[i][j1] : grid[i][j1] + grid[i][j2]

        if(cache[`${i}_${j1}_${j2}`] !== undefined) {
            console.log({cached:  cache[`${i}_${j1}_${j2}`], possible: cherriesPicked + currentCherries})
            return cache[`${i}_${j1}_${j2}`];
        }

        

        // when robots reaches bottom most cell, return cherries picked till now plus cherries in current cell
        if(i === ROW_LEN-1) {
            return cherriesPicked + currentCherries;
        }

        // for 1 movement of robot 1, robo 2 can take 3 directions

        //  robo1 moves left diagonal
        let r1 = rec(i+1, j1-1, j2-1, cherriesPicked + currentCherries);
        let r2 = rec(i+1, j1-1, j2, cherriesPicked + currentCherries);
        let r3 = rec(i+1, j1-1, j2+1, cherriesPicked + currentCherries);

        // robot1 moves downwards
        let r4 = rec(i+1, j1, j2-1, cherriesPicked + currentCherries);
        let r5 = rec(i+1, j1, j2, cherriesPicked + currentCherries);
        let r6 = rec(i+1, j1, j2+1, cherriesPicked + currentCherries);

        // robot1 move right diagonal
        let r7 = rec(i+1, j1+1, j2-1, cherriesPicked + currentCherries);
        let r8 = rec(i+1, j1+1, j2, cherriesPicked + currentCherries);
        let r9 = rec(i+1, j1+1, j2+1, cherriesPicked + currentCherries);

        // robot1 makes first move
        const res = Math.max(r1, r2, r3, r4, r5, r6, r7, r8, r9);

        cache[`${i}_${j1}_${j2}`] = res;

        return res;
    }

    return rec(0, 0, COL_LEN-1, 0);
}

// This solution works with memoization, we just have moved `cherriesPicked` from passing as arg to recursion to calculating inline.
function cherryPick3(grid) {
    const ROW_LEN = grid.length;
    const COL_LEN = grid[0].length;

    const cache = {}

    function isValidCell(i, j) {
       return i >=0 && i < ROW_LEN && j >=0 && j < COL_LEN
    }


    // We don't need i1 and i2 since both robots will always move downward only so i1 and i2 will be same
    function rec(i, j1, j2) {
        if(!isValidCell(i, j1)) {
            return 0;
        }

        if(!isValidCell(i, j2)) {
            return 0;
        }

        if(cache[`${i}_${j1}_${j2}`] !== undefined) return cache[`${i}_${j1}_${j2}`];

        // when j1, j2 are same, only one robot can pick cherries.
        const currentCherries = j1 === j2 ? grid[i][j1] : grid[i][j1] + grid[i][j2]

        // when robots reaches bottom most cell, return cherries picked till now plus cherries in current cell
        if(i === ROW_LEN-1) {
            return currentCherries;
        }

        // for 1 movement of robot 1, robo 2 can take 3 directions

        //  robo1 moves left diagonal
        let r1 = currentCherries +  rec(i+1, j1-1, j2-1);
        let r2 = currentCherries +  rec(i+1, j1-1, j2);
        let r3 = currentCherries +  rec(i+1, j1-1, j2+1);

        // robot1 moves downwards
        let r4 = currentCherries +  rec(i+1, j1, j2-1);
        let r5 = currentCherries +  rec(i+1, j1, j2);
        let r6 = currentCherries +  rec(i+1, j1, j2+1);

        // robot1 move right diagonal
        let r7 = currentCherries +  rec(i+1, j1+1, j2-1);
        let r8 = currentCherries +  rec(i+1, j1+1, j2);
        let r9 = currentCherries +  rec(i+1, j1+1, j2+1);

        // robot1 makes first move
        const res = Math.max(r1, r2, r3, r4, r5, r6, r7, r8, r9);

        cache[`${i}_${j1}_${j2}`] = res;

        return res
    }
    return rec(0, 0, COL_LEN-1, 0);
}


// console.log(cherryPick([[3,1,1],[2,5,1],[1,5,5],[2,1,1]])); // 24
// console.log(cherryPick([[1,0,0,0,0,0,1],[2,0,0,0,0,3,0],[2,0,9,0,0,0,0],[0,3,0,5,4,0,0],[1,0,2,3,0,0,6]])) // 28

// Test case 3
console.log(cherryPick3([[1,0,0,3],[0,0,0,3],[0,0,3,3],[9,0,3,3]])) // 22

// Test case 4
console.log(cherryPick3([[16,1,9,16,5,16,3,16,6,3,1,7],[10,0,0,12,9,12,19,3,9,3,18,9],[18,6,6,13,2,1,9,8,12,2,10,6],[16,7,6,10,5,17,16,0,12,7,5,15],[20,11,17,15,2,8,12,2,17,13,12,0],[11,1,10,11,13,9,16,7,1,12,13,8],[12,19,19,3,13,0,7,1,1,3,1,16],[4,9,1,4,16,19,11,11,3,9,2,7],[10,13,1,4,3,7,14,3,20,7,6,11],[8,17,14,13,2,5,9,11,11,18,19,15],[16,4,3,13,18,17,14,16,15,12,20,13],[20,0,19,16,0,3,16,16,1,15,2,20],[20,18,8,11,0,13,8,7,13,6,18,19],[9,2,9,18,10,16,0,5,9,11,4,14],[11,4,18,8,18,18,10,12,11,0,10,13],[0,7,9,2,1,17,4,1,6,9,7,9]]))