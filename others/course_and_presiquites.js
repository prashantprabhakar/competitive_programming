/**
 * Source: Algoacadmy
 */

/**
 * Find the correct sequence of course to be take [a, b] means b should be taken before a
 * i/p: [[1, 0], [2, 0], [2, 3]]
 * op: [0, 1, 3, 2]
 */

/**
 * This problem could be solved using directed graph.
 * If the graph has any cyc;les return false; else return topological sort
 */

const isVisited = [] // to avoid recomputation
const isCurrentlyVisited = [] // to check for cycle in graph.
const edges = [] // array at index "i" denotes presequites for course "i"
const sorted_course = []

function findOrder(prerequisites, numCourses) {
    for(edge of prerequisites) {
        if(!edges[edge[0]]) edges[edge[0]] = [edge[1]]
        else {
            edges[edge[0]].push(edge[1])
        }
    }
    for(i=0; i<numCourses; i++) {
        if(isVisited[i]) continue
        if(!dfs(i)) return false
    }
    return sorted_course
}

// returns false when a cycle is found
function dfs(node) {
    isVisited[node] = true
    isCurrentlyVisited[node] = true

    let current_node_edges = edges[node] || []
    for(next_node of current_node_edges) {
        if(isCurrentlyVisited[next_node]) return false
        if(!isVisited[next_node] && !dfs(next_node)) return false
    }
    sorted_course.push(node)
    isCurrentlyVisited[node] = false

    return true
}


console.log(findOrder([[1, 0], [2, 0], [3,1], [3,2]], 4)) // [0,1,2,3] or [0,2,1,3]
console.log(findOrder([[1, 0], [2,1], [1,2]], 3)) // false