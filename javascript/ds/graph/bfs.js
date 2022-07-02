
function traversalBfs(n, edges) {
    let adjMap = {};
    edges.forEach(([u, v]) => {
        adjMap[u] ? adjMap[u].push(v) : adjMap[u] = [v];
        adjMap[v] ? adjMap[v].push(u) : adjMap[v] = [u];
    });

    let isVisited = new Array(n+1);
    let bfsList = [];
    let tempList = [];

    for(let node=1; node<=n; node++) {
        if(isVisited[node]) continue;
        tempList.push(node);
        
        while(tempList.length) {
            let node = tempList[0];
            tempList = tempList.slice(1);
            if(isVisited[node]) continue
            isVisited[node] = true;
            bfsList.push(node);
            let adjencetNodes = adjMap[node] || [];
            tempList.push(...adjencetNodes)
        }

    }

  
   console.log(bfsList)
}


traversalBfs(7, [[1,2], [2,4], [2,7], [4,6], [6,7], [3,5]]) // [1,2,4,7,6,3,5]
