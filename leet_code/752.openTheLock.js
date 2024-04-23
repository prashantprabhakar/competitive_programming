/**
 * https://leetcode.com/problems/open-the-lock/description/
 * 752. Open the Lock
 */


function openLock(deadends, target) {

    if(deadends.includes(target) || deadends.includes("0000")) return -1;

    let result = -1;

    // use queue for bfs
    let queue = [];
    // let's keep a map to check visited combinations.
    const isVisited = {};

    queue.push({value: "0000", count: 0, path : '0000'});
    isVisited["0000"] = true;

    // using index prevents slicing array (the trade off is we don't need to re-assign queue but queue grows in size)
    let index = 0;
    while(index < queue.length) {
        const current = queue[index];
        
        index++; // if we don't use index, we'd use queue = queue.slice(1)
        
        if(current.value === target) {
            // console.log(current.path); //log path for debugging or in case we need to print path
            result = current.count;
            break;
        }
        if(deadends.includes(current.value)) {
            continue;
        }
        let count = current.count + 1;

        // loop to change combination at 0, 1, 2 and 3rd index.
        for(let i=0; i<=3; i++) {
            // move the number at index "i" in forward(+1) directions
            let value = updateBy(current.value, i, +1);
            if(!isVisited[value]) queue.push({ value, count, path: `${current.path} -> ${value}`});
            isVisited[value] =  true

            // move the number at index "i" in backward(-1) directions
            value = updateBy(current.value, i, -1);
            if(!isVisited[value]) queue.push({ value, count, path: `${current.path} -> ${value}`});
            isVisited[value] =  true
        }
    }

    return result;
}

// A utility function for incrementing/decrementing combination.
function updateBy(str, index, incBy) {
    return str.split('').map((x, i) => {
        let newValue = i === index ? Number(x) + incBy : x
        if(newValue === -1) return 9;
        if(newValue === 10) return 0;
        else return newValue
    }).join('')
}


console.log("******", openLock([], "1111")) // 4
console.log("*****", openLock(["0201","0101","0102","1212","2002"], "0202")) // 6
console.log("*******", openLock(["8888"], "0009")) // 1
console.log("******", openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888"))