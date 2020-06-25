
let maze = [
    [1, 0, 0, 0], 
    [1, 1, 0, 1], 
    [0, 1, 0, 0], 
    [1, 1, 1, 1]
]

// M is row in matrix and N is column in matrix
const M = maze.length, N = maze[0].length

let visited = new Array(M).fill('0').map(() => new Array(N).fill('0'))


function is_valid_move(x,y) {
    if(x < 0 || x >= M || y < 0 || y >= N) return false
    if(visited[x][y] == 1 || maze[x][y] == 0) return false
    return true
}

function solution(x,y) {
    // base case
    if( x == M-1 && y == N-1) return true

    if(is_valid_move(x,y)) {
        visited[x][y] = 1

        // visit top
        if(solution(x-1, y)) return true

        // visit right
        if(solution(x, y+1)) return true

        // visit down
        if(solution(x+1, y)) return true

        // visit left
        if(solution(x,y-1)) return true

        visited[x][y] = 0

        return false

    }
    return false;
}

console.log(solution(0,0))

