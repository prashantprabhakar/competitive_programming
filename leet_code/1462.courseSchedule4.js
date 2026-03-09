/**
 * https://leetcode.com/problems/course-schedule-iv/description/
 * 1462. Course Schedule IV
 * difficulty: medium
 * status: not solved
 * tags: graph, dfs
 */
/**
    There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course ai first if you want to take course bi.

    For example, the pair [0, 1] indicates that you have to take course 0 before you can take course 1.
    Prerequisites can also be indirect. If course a is a prerequisite of course b, and course b is a prerequisite of course c, then course a is a prerequisite of course c.

    You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should answer whether course uj is a prerequisite of course vj or not.

    Return a boolean array answer, where answer[j] is the answer to the jth query.

    Constraints:

        2 <= numCourses <= 100
        0 <= prerequisites.length <= (numCourses * (numCourses - 1) / 2)
        prerequisites[i].length == 2
        0 <= ai, bi <= numCourses - 1
        ai != bi
        All the pairs [ai, bi] are unique.
        The prerequisites graph has no cycles.
        1 <= queries.length <= 104
        0 <= ui, vi <= numCourses - 1
        ui != vi

 */

// Wrong ans: 47 / 69 testcases passed
function checkIfPrerequisite_notWrking(numCourses, prerequisites, queries) {

    const prerequisiteMap = {} // course -> set of presiquites

    for(let i=0; i<prerequisites.length; i++) {
        const [a , b] = prerequisites[i]; // you need to take a before taking b
        if(prerequisiteMap[b]) {
            prerequisiteMap[b].add(a);
        } else {
            prerequisiteMap[b] = new Set([a]);
        }
    }


    // Now fix combined pre-requisites
    for(const [course, prerequisite] of Object.entries(prerequisiteMap)) {
        let setA = prerequisite;
        for(const p of prerequisite) {
            const setB = prerequisiteMap[p];
            if(!setB) continue;
            setA = new Set(Array.from(setA).concat(Array.from(setB)))
        };
        prerequisiteMap[course] = setA;
    };

    // sort pre-requisites of each course
    for(const [course, prerequisite] of Object.entries(prerequisiteMap)) {
        prerequisiteMap[course] = Array.from(prerequisite).sort((a,b) => a -b)
    }
    
    console.log(prerequisiteMap[4])
    const result = [];

    for(let i=0; i<queries.length; i++) {
        const [u, v] = queries[i];
        if(!prerequisiteMap[v]) result.push(false)
        else result.push(prerequisiteMap[v].includes(u)) 
    }
    return result;

}

// Works: taken from solution
function checkIfPrerequisite_gpt(numCourses, prerequisites, queries) {
    // Initialize the adjacency matrix
    const graph = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));

    // Build the graph
    for (const [a, b] of prerequisites) {
        graph[a][b] = true;
    }

    // Floyd-Warshall algorithm to find the transitive closure
    for (let k = 0; k < numCourses; k++) {
        for (let i = 0; i < numCourses; i++) {
            for (let j = 0; j < numCourses; j++) {
                if (graph[i][k] && graph[k][j]) {
                    graph[i][j] = true;
                }
            }
        }
    }

    // Process the queries
    return queries.map(([u, v]) => graph[u][v]);
}

// TLE: 28 / 69 testcases passed
function checkIfPrerequisite2(numCourses, prerequisites, queries) {

    const prerequisiteMap = {} // course -> set of prerequisites

    for(let i=0; i<prerequisites.length; i++) {
        const [a , b] = prerequisites[i]; // you need to take a before taking b
        prerequisiteMap[b] ? prerequisiteMap[b].push(a) : prerequisiteMap[b] = [ a ]
    }


    function dfs(course, dep) {
        const pre = prerequisiteMap[course];
        if(!pre) return false;
        if(pre.includes(dep)) return true;
        for(let i=0; i<pre.length; i++) {
            const ret = dfs(pre[i], dep);
            if(ret) return true;
        }
        return false
    }

    return queries.map(q => dfs(q[1], q[0]))

}


function checkIfPrerequisite(numCourses, prerequisites, queries) {
    const prerequisiteMap = {} // course -> set of prerequisites

    for(let i=0; i<prerequisites.length; i++) {
        const [a , b] = prerequisites[i]; // you need to take a before taking b
        prerequisiteMap[b] ? prerequisiteMap[b].push(a) : prerequisiteMap[b] = [ a ]
    }


    function dfs(course) {
        const pre = prerequisiteMap[course];
        if(!pre) return;
        for(let i=0; i<pre.length; i++) {
            const newPre = prerequisiteMap[pre[i]];
            if(!newPre) continue;
            prerequisiteMap[course] = new Array(new Set(pre.concat(newPre)));
        }
    }


    for(let i=1; i<=numCourses; i++) {
        dfs(i)
    }

    console.log(prerequisiteMap)

    return queries.map(([u,v]) => Boolean(prerequisiteMap[v]?.includes(u)))

}

// genetrate test case
// console.log(checkIfPrerequisite(2, [[1,0]], [[0,1]])) // [false]
// console.log(checkIfPrerequisite(2, [], [[1,0]])) // [false]
// console.log(checkIfPrerequisite(3, [[1,0],[2,0]], [[0,1],[2,0]])) // [true, true]
// console.log(checkIfPrerequisite(10,[ [1,2]], [[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9]])) // [false, false, false, false, false, false, false, false, false]
console.log(checkIfPrerequisite(5, [[1,2], [5, 2], [4, 5], [3, 1]],[[3, 2]] )) // [true]


// attempt 1 failed test
// console.log(checkIfPrerequisite(
//     13,
//     [[2,1],[2,7],[2,0],[2,10],[2,11],[1,7],[1,0],[1,9],[1,4],[1,11],[7,3],[7,9],[7,4],[7,11],[7,8],[3,6],[3,12],[3,5],[6,10],[6,8],[0,4],[12,9],[12,8],[9,4],[9,11],[9,8],[9,5],[10,8],[4,8]],
//     [[12,11],[11,1],[10,12],[9,10],[10,11],[11,12],[2,7],[6,8],[3,2],[9,5],[8,7],[1,4],[3,12],[9,6],[4,3],[11,4],[5,7],[3,9],[3,1],[8,12],[5,12],[0,8],[10,5],[10,11],[12,11],[12,9],[5,4],[11,5],[12,10],[11,0],[6,10],[11,7],[8,10],[2,1],[3,4],[8,7],[11,6],[9,11],[1,4],[10,8],[7,1],[8,7],[9,7],[5,1],[8,10],[11,8],[8,12],[9,12],[12,11],[6,12],[12,11],[6,10],[9,12],[8,10],[8,11],[8,5],[7,9],[12,11],[11,12],[8,0],[12,11],[7,0],[8,7],[5,11],[11,8],[1,9],[4,10],[11,6],[10,12]]
// ))

// console.log(checkIfPrerequisite(
//     13,
//     [[2,1],[2,7],[2,0],[2,10],[2,11],[1,7],[1,0],[1,9],[1,4],[1,11],[7,3],[7,9],[7,4],[7,11],[7,8],[3,6],[3,12],[3,5],[6,10],[6,8],[0,4],[12,9],[12,8],[9,4],[9,11],[9,8],[9,5],[10,8],[4,8]],
//     [[3,4]]
// )) // expected: true
