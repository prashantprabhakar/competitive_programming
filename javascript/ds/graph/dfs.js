// Traverse a graph with dfs


function traversalDfs(n, arr) {

    //let adjMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    const adjMap = {};

    arr.forEach(([u, v]) => {
        adjMap[u] ? adjMap[u].push(v) : adjMap[u] = [v];
        adjMap[v] ? adjMap[v].push(u) : adjMap[v] = [u];
    });

    let isVisied = new Array(n).fill(0);
    const dfsList = [];

    for(let i=1; i<=n;i++) {
        dfs(i)
    }  

    function dfs(i) {
        if(isVisied[i]) return;
        isVisied[i] = true;
        dfsList.push(i);
        let adjencetNodes = adjMap[i] || [];
        adjencetNodes.forEach(node =>  dfs(node));
    }

    console.log(dfsList)
}



//traversalDfs(3, [[0,1], [0, 2], [1, 2], [2, 0], [3,3]]) // Output: DFS from vertex 1 : 1 2 0 3 
traversalDfs(7, [[1,2], [2,4], [2,7], [4,6], [6,7], [3,5]])


