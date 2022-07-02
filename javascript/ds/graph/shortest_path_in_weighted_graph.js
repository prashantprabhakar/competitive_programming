
function findMinDistance(n, source, edges) {
    let adjMap = {};
    edges.forEach(([u, v, weight]) => {
        adjMap[u] ? adjMap[u].push({node: v, weight}) : adjMap[u] = [{node: v, weight}];
        adjMap[v] ? adjMap[v].push({node: u, weight}) : adjMap[v] = [{node: u, weight}];
    })

    let distance = new Array(n).fill(Math.min());
    distance[source] = 0;
    let list = [source];

    while(list.length) {
        let node = list[0];
        list = list.slice(1);
        let adjNodes = adjMap[node];
        adjNodes.forEach(adjNode =>  {
            if(distance[node] + adjNode.weight < distance[adjNode.node]) {
                distance[adjNode.node] = distance[node] + adjNode.weight;
                list.push(adjNode.node);
            }

        })
    }
    console.log(distance)

}

findMinDistance(6, 1, [ [1,2,2], [1,4,1], [2,3,4], [2,5,5], [3,4,3], [3,5,1] ])