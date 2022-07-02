

function findShortestPath(n, source, edges) {
    let adjMap = {};
    edges.forEach(([u, v]) => {
        adjMap[u] ? adjMap[u].push(v) : adjMap[u] = [v];
        adjMap[v] ? adjMap[v].push(u) : adjMap[v] = [u];
    })

    let distance = new Array(n).fill(Math.min());
    distance[source] = 0;

    // we can use dfs to cover all nodes
    let list = [source]

    while(list.length) {
        let node = list[0];
        list = list.slice(1);

        let adjNodes = adjMap[node] || [];
        adjNodes.forEach(adjNode => {
            if(distance[node] + 1 < distance[adjNode]) {
                distance[adjNode] = distance[node] + 1;
                list.push(adjNode)
            }
        })
    }
    console.log(distance)
    return;

    //  second approach by pps

    let traversedNodes = {}
    for(let i=0; i<n; i++) {
       findMinFromGivenNode(i)
    }


    // some nodes might have not be traversed in first iteration.
    for(let i=0; i<n; i++) {
        findMinFromGivenNode(i)
    }

    function findMinFromGivenNode(i) {
        if(traversedNodes[i]) return;
        const distanceOfCurrentNodeFromSource = minDistanceArr[i]
        if(distanceOfCurrentNodeFromSource !== Math.min()) {
            traversedNodes[i] = true
            let adjNodes = adjMap[i];
            adjNodes.forEach(node => {
                let distanceFromCurrentNode = distanceOfCurrentNodeFromSource + 1;
                minDistanceArr[node] = Math.min(distanceFromCurrentNode, minDistanceArr[node]);
            })

        }
    }

    console.log(minDistanceArr)
}

findShortestPath(9, 2, [[0,1], [0,3], [1,2], [1,3], [2,6], [3,4], [4,5], [5,6], [6,7], [6,8], [7,8] ])