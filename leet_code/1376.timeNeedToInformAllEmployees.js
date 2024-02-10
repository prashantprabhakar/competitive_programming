/**
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/?envType=daily-question&envId=2023-10-30
 */


/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let childrenOf = {}, parentOf = {}, informed= {};

    for(let i=0; i<n-1; i++) {
        let child = i, parent = manager[i];
        if(childrenOf[parent]) {
            childrenOf[parent].push(child)
        } else {
            childrenOf[parent] = [child]
        }
        parentOf[child] = parent;
    }

    let queue = [];
    let totalTime = 0;
    let totalPeopleInformed = 1;

    queue.push(headID);
    let i=0;
    while(i < queue.length) {
        let parent = queue[i];
        i++;
        // if(informed[parent]) continue
        let children = childrenOf[parent];
        if(!children) continue;
        let timeTakenToInformChildren = informTime[parent];
        totalTime += timeTakenToInformChildren;
        totalPeopleInformed += children.length;
        if(totalPeopleInformed === n) {
            return totalTime;
        }

        children.forEach(child => {
            informed[child] = true;
        })
        queue = [...queue, ...children];
        

    }
    return totalTime;
  
    
};


function findDepth(n, headId, manager, informTime) {
    let childrenOf = {}, parentOf = {}, informed= {};

    for(let i=0; i<n; i++) {
        let child = i, parent = manager[i];
        if(childrenOf[parent]) {
            childrenOf[parent].push(child)
        } else {
            childrenOf[parent] = [child]
        }
        parentOf[child] = parent;
    }


    console.log(childrenOf);
    console.log(parentOf)

    let depth = {};
    function dfs(node) {
        let children = childrenOf[node];
        if(!children) {
            depth[node] = 0;
            return 0
        }
        let maxTime = 0;
        for(let i=0; i<children.length; i++) {
            let child = children[i];
            let childTime = informTime[node] + dfs(child);
            maxTime = Math.max(maxTime, childTime);
        }
        depth[node] = maxTime;
        return maxTime
    }

    dfs(headId);
    console.log(depth)
    console.log(depth[headId])

}

// console.log(numOfMinutes(6,2,[2,2,-1,2,2,2], [0,0,1,0,0,0])) // 1
// console.log(numOfMinutes(1, 0, [-1], [0])) // 0
// console.log(numOfMinutes(11,2, [2,2,-1, 2,2,2,3,3,7,4,9], [0,0,1,2,2,0,0,3,0,3,0])) // 6

// findDepth(11, 2, [2,2,-1, 2,2,2,3,3,7,4,9], [0,0,1,2,2,0,0,3,0,3,0])
// findDepth(6,2,[2,2,-1,2,2,2], [0,0,1,0,0,0])
// findDepth(1, 0, [-1], [0])

findDepth(4, 2, [3,3,-1,2], [0,0,162,914])