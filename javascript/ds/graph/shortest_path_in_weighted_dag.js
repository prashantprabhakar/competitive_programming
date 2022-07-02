

function findShortestPath(n, source, edges) {
    let adjMap = {};

    edges.map(([node1, node2, weight]) => {
        adjMap[node1] ? adjMap[node1].push({val: node2, weight}) : adjMap[node1] = [{val: node2, weight}];
    });

    const isVisited = [];
    const toplogicallyOrderedNodes = [];
    for(let node=0; node<n; node++)  {
        dfs(node);
    }

    function dfs(val) {
       if(isVisited[val]) return;
       isVisited[val] = true;
        let adjNodes = (adjMap[val] || []).map(v => v.val);
        let i  = 0;
        while(i<adjNodes.length) {
            dfs(adjNodes[i])
            i++
        }
        toplogicallyOrderedNodes.push(val)
    }

    let minDistanceArr = new Array(n).fill(Math.min());
    minDistanceArr[source] = 0;

    while(toplogicallyOrderedNodes.length) {
        let node = toplogicallyOrderedNodes.pop();
        if(minDistanceArr[node] !== Math.min()) {
            let adjNodes = adjMap[node] || [];
            adjNodes.forEach(adjNode => {
                let newDIstance = minDistanceArr[node] +  adjNode.weight
                minDistanceArr[adjNode.val] = Math.min(minDistanceArr[adjNode.val], newDIstance)
            })
        }
    }
    console.log(minDistanceArr)




}


// findShortestPath(7, [[0,1,5], [0, 2, 3],  [1, 3, 6],  [1, 2, 2],  [2, 4, 4],  [2, 5, 2],  [2, 3, 7],  [3, 4, -1],  [4, 5, -2]])

findShortestPath(6, 1, [[0,1,2], [0,4,1], [1,2,3], [2,3,6], [4,2,2], [4,5,4], [5,3,1]])