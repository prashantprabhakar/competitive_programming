/**
 * https://leetcode.com/problems/find-the-safest-path-in-a-grid/
 */
/**
 * You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:

A cell containing a thief if grid[r][c] = 1
An empty cell if grid[r][c] = 0
You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.

The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.

Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).

An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.

The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.

 
 */
var maximumSafenessFactor1 = function(grid) {
    const SIZE = grid.length;
    const isValidCell = (r,c) => r>=0 && r<SIZE && c>=0 && c<SIZE

    const cellswithOne = [];
    for(let i=0; i<SIZE; i++) {
        for(let j=0; j<SIZE; j++) {
            if(grid[i][j] === 1) cellswithOne.push([i,j]);
        }
    }
    // create 2d array of size SIZE

    // const thiefDistance = new Array(SIZE).fill(null).map(() => new Array(SIZE).fill(Infinity));
    const thiefDistance = Array.from({ length: SIZE }, () => Array(SIZE).fill(Infinity));


    // Now for each cell find minimum eucleadian distance from all cells with 1
    for(let i=0; i<SIZE; i++) {
        for(let j=0; j<SIZE; j++) {
            if(grid[i][j] === 1) thiefDistance[i][j] = 0
            else thiefDistance[i][j] = Math.min(...cellswithOne.map(([r,c]) => Math.abs(r-i) + Math.abs(c-j)));
        }
    }

    console.log(thiefDistance)
    // Now we need to find path from [0,0] to [n-1, n-1] where sum of thiefDistances for all cells is maximum
    // We can use dfs for this

    // doesnn't work
    function findPath1() {
        let maxSafeness = 0;
        function dfs(r,c, sum) {
            if(r === SIZE-1 && c === SIZE-1) {
                maxSafeness = Math.max(maxSafeness, sum);
                return;
            }
            if(isValidCell(r,c) && grid[r][c] !==  -1) {
                const currentSafeness = thiefDistance[r][c];
                if(currentSafeness === Infinity) return;
                const temp = grid[r][c];
                grid[r][c] = -1; // mark as visited
                dfs(r+1,c, Math.min(sum,currentSafeness));
                dfs(r-1,c, Math.min(sum,currentSafeness));
                dfs(r,c+1, Math.min(sum,currentSafeness));
                dfs(r,c-1, Math.min(sum,currentSafeness));
                grid[r][c] = temp;
            }
        }
        if (thiefDistance[0][0] === Infinity || grid[SIZE - 1][SIZE - 1] === 1) {
            return 0;
        }

        dfs(0,0,thiefDistance[0][0]);
        return maxSafeness;
    
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // works but TLE
    function findPath2() {
        let maxSafeness = 0;

        function dfs(r, c, minSafeness) {
            if (r === SIZE - 1 && c === SIZE - 1) {
                maxSafeness = Math.max(maxSafeness, minSafeness);
                return;
            }
            
            const originalValue = grid[r][c];
            grid[r][c] = -1; // mark as visited



            for (const [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;
                if (isValidCell(nr, nc) && grid[nr][nc] !== -1) {
                    dfs(nr, nc, Math.min(minSafeness, thiefDistance[nr][nc]));
                }
            }

            grid[r][c] = originalValue; // unmark as visited
        }

        if (thiefDistance[0][0] === Infinity || grid[SIZE - 1][SIZE - 1] === 1) {
            return 0;
        }

        dfs(0, 0, thiefDistance[0][0]);
        return maxSafeness;
    }


    
    return findPath()


    function xyz(r,c, sf, isVisited) {
        if(!isValidCell(r,c)) return 0;
        if(isVisited[r][c]) return 0;
        if(r === SIZE-1 && c === SIZE-1) return sf;
        isVisited[r][c] = true;
        return Math.min(
            xyz(r+1, c, sf+thiefDistance[r][c], isVisited),
            xyz(r-1, c, sf+thiefDistance[r][c], isVisited),
            xyz(r, c+1, sf+thiefDistance[r][c], isVisited),
            xyz(r, c-1, sf+thiefDistance[r][c], isVisited)
        )
    }
    const isVisitedCell = new Array(SIZE).fill(null).map(() => new Array(SIZE).fill(false));
    // return xyz(0, 0, 0, isVisitedCell)
    
};

// GPT written(on top of my solution): TLE
var maximumSafenessFactor2 = function(grid) {
    const SIZE = grid.length;
    const isValidCell = (r,c) => r>=0 && r<SIZE && c>=0 && c<SIZE

    const cellswithOne = [];
    for(let i=0; i<SIZE; i++) {
        for(let j=0; j<SIZE; j++) {
            if(grid[i][j] === 1) cellswithOne.push([i,j]);
        }
    }
    // create 2d array of size SIZE

    // const thiefDistance = new Array(SIZE).fill(null).map(() => new Array(SIZE).fill(Infinity));
    const thiefDistance = Array.from({ length: SIZE }, () => Array(SIZE).fill(Infinity));

    // Now for each cell find minimum eucleadian distance from all cells with 1
    for(let i=0; i<SIZE; i++) {
        for(let j=0; j<SIZE; j++) {
            if(grid[i][j] === 1) thiefDistance[i][j] = 0
            else thiefDistance[i][j] = Math.min(...cellswithOne.map(([r,c]) => Math.abs(r-i) + Math.abs(c-j)));
        }
    }

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    console.log(thiefDistance)

    const queue = [];
    cellswithOne.forEach(([r, c]) => {
        thiefDistance[r][c] = 0;
        queue.push([r, c]);
    });

    while (queue.length) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (isValidCell(nr, nc) && thiefDistance[nr][nc] === Infinity) {
                thiefDistance[nr][nc] = thiefDistance[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }


    // works but TLE
    function findPath() {
        let maxSafeness = 0;

        function dfs(r, c, minSafeness) {
            if (r === SIZE - 1 && c === SIZE - 1) {
                maxSafeness = Math.max(maxSafeness, minSafeness);
                return;
            }
            
            const originalValue = grid[r][c];
            grid[r][c] = -1; // mark as visited



            for (const [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;
                if (isValidCell(nr, nc) && grid[nr][nc] !== -1) {
                    dfs(nr, nc, Math.min(minSafeness, thiefDistance[nr][nc]));
                }
            }

            grid[r][c] = originalValue; // unmark as visited
        }

        if (thiefDistance[0][0] === Infinity || grid[SIZE - 1][SIZE - 1] === 1) {
            return 0;
        }

        dfs(0, 0, thiefDistance[0][0]);
        return maxSafeness;
    }
    
    return findPath()
    
};

// GPT: TLE
var maximumSafenessFacto3 = function(grid) {
    const SIZE = grid.length;
    const isValidCell = (r, c) => r >= 0 && r < SIZE && c >= 0 && c < SIZE;

    const cellsWithOne = [];
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (grid[i][j] === 1) cellsWithOne.push([i, j]);
        }
    }

    // Create 2D array to store the minimum distance to any thief
    const thiefDistance = Array.from({ length: SIZE }, () => Array(SIZE).fill(Infinity));
    
    // Directions for moving to adjacent cells
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    // Multi-source BFS to calculate minimum distances to any thief
    const queue = [];
    cellsWithOne.forEach(([r, c]) => {
        thiefDistance[r][c] = 0;
        queue.push([r, c]);
    });
    
    while (queue.length) {
        const [r, c] = queue.shift();
        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (isValidCell(nr, nc) && thiefDistance[nr][nc] === Infinity) {
                thiefDistance[nr][nc] = thiefDistance[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    // Binary search for the maximum safeness factor
    let low = 0, high = Math.max(...thiefDistance.flat()), result = 0;

    const canReachEndWithSafeness = (safeness) => {
        if (thiefDistance[0][0] < safeness) return false;
        const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));
        const queue = [[0, 0]];
        visited[0][0] = true;

        while (queue.length) {
            const [r, c] = queue.shift();
            if (r === SIZE - 1 && c === SIZE - 1) return true;
            for (const [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;
                if (isValidCell(nr, nc) && !visited[nr][nc] && thiefDistance[nr][nc] >= safeness) {
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }

        return false;
    }

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (canReachEndWithSafeness(mid)) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
};


// Copied form leetcode sol: works
function maximumSafenessFactor(grid) {
    const n = grid.length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const isInBound = (r, c) => r >= 0 && r < n && c >= 0 && c < n;

    // Initialize distances and queue
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    const queue = [];

    // Add all 1s to the queue and set their distance to 0
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    // BFS to calculate minimum distance from each cell to nearest 1
    for (let i = 0; i < queue.length; i++) {
        const [r, c] = queue[i];
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (isInBound(nr, nc) && dist[nr][nc] === Infinity) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    // Initialize maxDistance and queue for the second BFS
    const maxDistance = Array.from({ length: n }, () => Array(n).fill(0));
    queue.length = 0;
    maxDistance[0][0] = dist[0][0];
    queue.push([0, 0]);

    // BFS to calculate maximum safeness factor for each cell
    for (let i = 0; i < queue.length; i++) {
        const [r, c] = queue[i];
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;
            if (isInBound(nr, nc)) {
                const newDistance = Math.min(maxDistance[r][c], dist[nr][nc]);
                if (newDistance > maxDistance[nr][nc]) {
                    maxDistance[nr][nc] = newDistance;
                    queue.push([nr, nc]);
                }
            }
        }
    }

    return maxDistance[n - 1][n - 1];   
}



console.log(maximumSafenessFactor([[1,0,0],[0,0,0],[0,0,1]])) /// 0
console.log(maximumSafenessFactor([[0,0,1],[0,0,0],[0,0,0]])) // 2

console.log(maximumSafenessFactor([[0,1,1],[0,1,1],[0,0,1]])) // 0
console.log(maximumSafenessFactor([[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]])) // 2

console.log(maximumSafenessFactor([[0,0,1],[0,0,1],[0,0,0]])) // 1