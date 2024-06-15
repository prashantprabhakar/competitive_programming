/**
 * https://leetcode.com/problems/minimum-increment-to-make-array-unique/description/
 * Difficulty: Medium
 */


function minIncrementForUnique1(nums) {
    let freqMap = nums.reduce((map, num) => {
        const val = (map.get(num) ?? 0) + 1
        map.set(num, val)
        return map;
    }, new Map());

    let result = 0;
    let numsArr = [... freqMap.keys()].sort((a,b) => b-a);
    while(numsArr.length) {
        let num = numsArr.pop();
        let freq = freqMap.get(num);
        if(freq === 1) continue
        const nextNum = num + 1;
        result += freq - 1;
        if(!freqMap.has(nextNum)) {
            numsArr.push(nextNum)
        }
        let val = (freqMap.get(nextNum) ?? 0) + (freq - 1);
        freqMap.set(nextNum, val)
    }
    console.log(result)
    return result;
}

function minIncrementForUnique(nums) {
    let freqCount = [];
    for(let i=0; i<nums.length; i++) {
        let num = nums[i]
        freqCount[num] = (freqCount[num] ?? 0) + 1;
    }
    let result = 0;
    for(let i=0; i<freqCount.length; i++) {
        if(!freqCount[i] || freqCount[i] === 1) {
            continue;
        }
        let dupCount = freqCount[i] - 1;
        result += dupCount;
        freqCount[i+1] = (freqCount[i+1] ?? 0) + dupCount;
    }

    console.log(result)
    return result;
}


minIncrementForUnique([1,2,2])
minIncrementForUnique([3,2,1,2,1,7])

minIncrementForUnique([3,2,1,2,1,4])