/**
 * find minimuns spanning tree (MST) using Kruskal's algorith which uses disjoint data set
 * Video: https://www.youtube.com/watch?v=1KRmCzBl_mQ&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=24
 */
// @ts-check
function findMST(n,  edges) {
    // let's make disjoint data set
    let parent = [], rank = [];
    for(let i=0; i<n; i++) {
        parent[i] = i;
        rank[i] = 0
    }

    function findParent(node) {
        if(parent[node] === node) return node;
        return parent[node] = findParent(parent[node])
    }

    function joinEdges(node1, node2) {
        let parent1 = findParent(node1);
        let parent2 = findParent(node2);

        if(rank[parent1] > rank[parent2]) {
            parent[node2] = node1;
        } else if(rank[parent2] > rank[parent1]) {
            parent[node1] = node2;
        } else {
            parent[node1] = node2;
            rank[parent2]++;
        }
    }

    // sort the edges in asc order of weight
    edges = edges.sort((a,b) => a[2] - b[2]);

    let mst = [], mstCost = [];
    // loop over edges and join them if parent are not same
    edges.forEach(edge => {
        let [node1, node2, weight] = edge;
        if(findParent(node1) !== findParent(node2))  {
            mstCost += weight;
            mst.push(edge)
            joinEdges(node1, node2);
        }
    });

    console.log(mst)
} 

findMST(5, [ [0,1,2], [0,3,6], [1,2,3], [1,4,5], [1,3,8], [2,4,7] ])