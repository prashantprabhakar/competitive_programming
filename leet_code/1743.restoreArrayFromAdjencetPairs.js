/**
 * https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/
 * 1743. Restore the Array From Adjacent Pairs

 */


function restoreArray(adjacentPairs) {
    const adjMap = {};
    const n =  adjacentPairs.length + 1;
    adjacentPairs.forEach(([u, v]) => {
        adjMap[u] ? adjMap[u].push(v) : adjMap[u] = [v];
        adjMap[v] ? adjMap[v].push(u) : adjMap[v] = [u];
    });
    let elem = Number(Object.keys(adjMap).find(key => adjMap[key].length === 1));
    const result = [elem]

    while(result.length <n) {
        const [e1, e2] = adjMap[elem];
        if(e2 === undefined) elem = e1
        else elem = result[result.length-2] === e1 ? e2 : e1;
        result.push(elem);
    }

    return result;
}

console.log(restoreArray([[2,1],[3,4],[3,2]]))
console.log(restoreArray([[4,-2],[1,4],[-3,1]]))
console.log(restoreArray([[100000,-100000]]))