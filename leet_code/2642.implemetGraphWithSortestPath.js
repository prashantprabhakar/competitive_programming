/**
 * https://leetcode.com/problems/design-graph-with-shortest-path-calculator/
 * 
 * 2642. Design Graph With Shortest Path Calculator

 */

/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    const adjMap = {};
    for(let i=0; i<edges.length; i++) {
        const [from, to, cost] = edges[i];
        if(adjMap[from]) {
            adjMap[from].push({ node: to, cost });
        } else {
            adjMap[from] = [{node: to, cost}]
        }
    };

    this.adjMap = adjMap
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    const [from, to, cost] = edge;
    if(this.adjMap[from]) {
        this.adjMap[from].push({ node: to, cost });
    } else {
        this.adjMap[from] = [{node: to, cost}]
    }
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
    // The graph can be cyclic so if a cycle is detected before ans, return -1;
    const shortest = (node1, node2, currCost, visited=[]) =>{
        if(node1 === node2) return currCost;
        if(visited.includes(node1)) return Infinity
        const neighbours = this.adjMap[node1];
        if(!neighbours) return Infinity;
        // const d = Math.min(...neighbours.map(({node, cost}) => shortest(node, node2, cost+currCost) ))
        const x  = neighbours.map(({node, cost}) => shortest(node, node2, cost+currCost, [...visited, node1]) );
        d =  Math.min(...x)
        return d;
    }

    const result = shortest(node1, node2, 0, []);
    return result == Infinity  ? -1 : result
};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */

// const obj = new  Graph(4, [[0,2,5],[0,1,2],[1,2,1],[3,0,3]])
// console.log(obj.shortestPath(3,2)) // 6
// console.log(obj.shortestPath(0,3)); // -1
// obj.addEdge([1, 3, 4])
// console.log(obj.shortestPath(0,3)); // 6


const obj2 = new Graph(18, [[7,2,131570],[9,4,622890],[9,1,812365],[1,3,399349],[10,2,407736],[6,7,880509],[1,4,289656],[8,0,802664],[6,4,826732],[10,3,567982],[5,6,434340],[4,7,833968],[12,1,578047],[8,5,739814],[10,9,648073],[1,6,679167],[3,6,933017],[0,10,399226],[1,11,915959],[0,12,393037],[11,5,811057],[6,2,100832],[5,1,731872],[3,8,741455],[2,9,835397],[7,0,516610],[11,8,680504],[3,11,455056],[1,0,252721]]);

console.log(obj2.shortestPath(9,2)) // 1211714
obj2.addEdge([11,1,873094]);
console.log(obj2.shortestPath(3,10)) // 1943345
obj2.addEdge([0,9,601498])
obj2.addEdge([12,0,824080])
obj2.addEdge([12,4,459292])
obj2.addEdge([6,9,7876])
obj2.addEdge([11,7,5479])
obj2.addEdge([11,12,802])
console.log(obj2.shortestPath(2,9)) // 835397,
console.log(obj2.shortestPath(2,6)) // 2326929
obj2.addEdge([0,11,441770])
console.log(obj2.shortestPath(3,7)) // 460535
obj2.addEdge([11,0,393443])
console.log(obj2.shortestPath(4,2)) //965538
obj2.addEdge([10,5,338])
obj2.addEdge([6,1,305])
obj2.addEdge([5,0,154])


