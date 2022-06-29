
function shoppingPattern(arr) {
    let n = 400;
    
    // create a 2d matrix if n*n
    const adjMatrix = new Array(n).fill(false).map(() => new Array(n).fill(false))
    const depth = {}


    arr.forEach(([a,b]) => {
        adjMatrix[a][b] = true;
        adjMatrix[b][a] = true;
        depth[a] = depth[a] ? depth[a]+1 : 1;
        depth[b] = depth[b] ? depth[b]+1 : 1;
    });

    let result = Math.min()

    for(let i=0; i<n; i++) {
        for(let j=i+1; j<n; j++) {
            for(let k=j+1; k<n; k++) {
                if(adjMatrix[i][j] &&  adjMatrix[j][k] && adjMatrix[k][i]) {
                    let degreeOfCurrntTrio = depth[i] + depth[j] + depth[k] - 6;
                    
                    //console.log({degreeOfCurrntTrio, i, j, k})
                    result = Math.min(result, degreeOfCurrntTrio)
                }
            }
        }
    }    
    console.log(result)
   
}

shoppingPattern([[1,3], [4,1], [4,3], [2,5], [5,6], [6,7], [7,5], [2,6]])
shoppingPattern([[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]])