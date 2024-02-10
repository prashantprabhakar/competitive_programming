/**
 * https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/
 * 2849. Determine if a Cell Is Reachable at a Given Time
 */

function isRechableAtTime_doesNotWork(sx, sy, fx, fy, t) {
    let steps = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [1, -1],
        [1, 0],
        [1, 1],
        [0, -1],
        [0, 1]
    ];

    const map = {};
    function dfs(sx, sy, fx, fy, t) {
        if(t===0) {
            return sx === fx && sy === fy
        }

        const key = `${sx}_${sy}_${t}`
        if(map[key] !== undefined) return map[key]

        for(let i=0; i<steps.length; i++) {
            let next_sx = sx+steps[i][0];
            const next_sy = sy+steps[i][1];
            const result = dfs(next_sx, next_sy, fx, fy, t-1);
            map[`${next_sx}_${next_sy}_${t}`] =  result
            if(result) {
                return true
            }
        }
        return false
    }

    return dfs(sx, sy, fx, fy, t)
}

function isRechableAtTime(sx, sy, fx, fy, t) {
    if(sx == fx && sy === fy) {
        return t !== 1
    }

    // Chebyshev distance represents distance measured as if the shortest path between two points can take steps in any of the 8 grid directions at equal cost. 
    const distance = Math.max(Math.abs(fy-sy), Math.abs(fx-sx));
    return t>=distance
}

isRechableAtTime(870744264, 360311537, 820090827, 890107308, 274809225)