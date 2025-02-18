/**
 * https://leetcode.com/problems/find-center-of-star-graph/
 * 1791. Find Center of Star Graph
 * Difficulty: Easy
 * Solved: Yes
 * Topics: [Graph]
 */

function findCenter1(edges) {
    let edgeCount = new Map();
    for(let i=0; i<edges.length; i++) {
        let [u, v] = edges[i];
        edgeCount.set(u, (edgeCount.get(u) ?? 0) + 1);
        edgeCount.set(v, (edgeCount.get(v) ?? 0) + 1);
        if(edgeCount.get(u) === edges.length) return u;
        if(edgeCount.get(v) === edges.length) return v;
    }
}

// centre edge will be the only common in all edges. So we only need to find the elem common b/w first and second edge
function findCenter1(edges) {
   let [edge1, edge2] = edges;
   let [u, v] = edge1;
   if(edge2[0] === u || edge2[1] === u) return u;
   else return v;
}