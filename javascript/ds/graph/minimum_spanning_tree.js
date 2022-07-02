/**
 * Prims algorith to find minimum MST
 * Checkout video:https://www.youtube.com/watch?v=HnD676J56ak&list=PLgUwDviBIf0rGEWe64KWas0Nryn7SCRWw&index=20
 */

// @ts-check

function findMST(n, edges) {
    let adjMap = {};

    edges.forEach(([u, v, weight]) => {
        adjMap[u] ? adjMap[u].push({node: v, weight}) : adjMap[u] = [{node: v, weight}];
        adjMap[v] ? adjMap[v].push({node: u, weight}) : adjMap[v] = [{node: u, weight}];
    })

    // we need 3 data structires
    const INT_MAX = Math.min();
    const weight = []; //  holss edge weight of node "i" from it's parent parent[i]. So ith node is connect to parent[i] with weight of weight[i]
    const parent= []; // to hold parent of a node in MST
    const mstArr = []; // bool to check if a node is considered part of MST

    for(let i=0; i<n; i++) {
        weight[i] = INT_MAX;
        mstArr[i] = false;
        parent[i] = -1;
    }

    weight[0] = 0; // start from here, so min weight is zero.
    
    for(let i=0; i<n-1; i++) {
        // find minimum no in mstArr and then for add adjecent nodes choose one with minimun edge.
        let min_val = INT_MAX, min_val_index = -1;

        for(let i=0; i<n; i++) {
            if(!mstArr[i] && weight[i] < min_val) {
                min_val = weight[i];
                min_val_index = i;
            }
        }

        mstArr[min_val_index] = true;
        // loop over all adjecent nodes of minimun value node and take the edge that has minimum weight
        let adjNodes = adjMap[min_val_index] || [];
        adjNodes.forEach(adjNode => {
            if(!mstArr[adjNode.node] && adjNode.weight < weight[adjNode.node]) {
                weight[adjNode.node] = adjNode.weight;
                parent[adjNode.node] = min_val_index;
            }
        })
    }

    let result = [];
    for(let i=0; i<n; i++) {
        result.push([i, parent[i], weight[i]])
    }
    console.log(result)
}

findMST(5, [ [0,1,2], [0,3,6], [1,2,3], [1,4,5], [1,2,3], [2,4,7] ])