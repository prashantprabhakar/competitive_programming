/**
 * 
 * https://leetcode.com/problems/maximum-total-importance-of-roads/
 * 2285. Maximum total Importance of Roads
 * Difficulty: Medium
 * Solved: Yes
 * Topic: Graph
 */


// O(n log n) beats 34%
function maximumImportance1(n, roads) {
    // no of roads connected to a city
    const connectedRoads = new Array(n).fill(0)
    for(let i=0; i<roads.length; i++) {
        let [u,v] = roads[i];
        connectedRoads[u] = (connectedRoads[u] ?? 0) + 1;
        connectedRoads[v] = (connectedRoads[v] ?? 0) + 1;
    };

    // let all cities
    let cities = [];  
    for(let i=0;  i<n; i++) {
        cities.push(i);
    }
    // cities sorted by city that has maximum roads
    cities.sort((a, b) => {
        if(connectedRoads[a] > connectedRoads[b]) return 1;
        if(connectedRoads[a] < connectedRoads[b]) return -1
        else return 0;
    });

    // importace of a city is determined by city that has maximum roads. Max roads = higher priority
    let importace = [];
    for(let i=0; i<cities.length; i++) {
        importace[cities[i]] = i+1;
    }

    // now we need to calculate max total immportace
    let totalImportance = 0;
    for(let i=0; i<roads.length; i++) {
        let [u, v]  = roads[i];
        totalImportance += importace[u] + importace[v]
    }
    console.log(totalImportance)
    return totalImportance;
}


maximumImportance(5, [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]) // 43
// maximumImportance(5, [[0,3],[2,4],[1,3]]) // 20
// maximumImportance(5, [[0,1]]) // 9