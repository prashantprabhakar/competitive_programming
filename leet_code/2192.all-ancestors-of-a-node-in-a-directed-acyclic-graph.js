/**
 * https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/description/
 * 2192. All Ancestors of a Node in a Directed Acyclic Graph
 * Difficulty: Medium
 * Solved: Yes
 * Topics: [Graph, DAG]
 */

// Beats 41.5%
function getAncestors1(n, edges) {
    const parents = new Array(n).fill(null).map(i => []) // use array instead of map
    edges.forEach(([p, c]) => parents[c].push(p) )
    let ancestors = new Array(n)
    function ancestorOfNode(node) {
        if(ancestors[node]?.length) return ancestors[node];
        let ancestor = [...parents[node]];
        for(let i=0; i<parents[node].length; i++) {
            let parent = parents[node][i]
            ancestors[parent] = ancestorOfNode(parent);
            ancestor.push(...ancestors[parent]);
        }
        ancestors[node] =  Array.from(new Set(ancestor)).sort((a,b) => a-b);;
        return ancestors[node] ?? [];
    }

    for(let i=0; i<n; i++) ancestorOfNode(i);


    console.log(ancestors)
    return ancestors;
}
function getAncestors(n, edges) {
    const parents = new Array(n).fill(null).map(i => []) // use array instead of map
    edges.forEach(([p, c]) => parents[c].push(p) )
    let ancestors = new Array(n);

    function ancestorOfNode(node) {
        if(ancestors[node]?.length) {
            console.log(`Found in cache for ${node}`)
            return ancestors[node];
        }
        let tempAncestors = [...parents[node]];
        parents[node].forEach(parent => {
            ancestors[parent] = ancestorOfNode(parent);
            tempAncestors = tempAncestors.concat(ancestors[parent])
        })
        ancestors[node] =  Array.from(new Set(tempAncestors)).sort((a,b) => a-b);
        return ancestors[node] ?? [];
    }

    for(let i=0; i<n; i++) ancestorOfNode(i);


    console.log(ancestors)
    return ancestors;
}



getAncestors(8, [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[3,7],[4,6]])