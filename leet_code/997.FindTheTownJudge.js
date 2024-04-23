/**
 * https://leetcode.com/problems/find-the-town-judge/description/
 * 997. Find the Town Judge
 */


function findJudge(n, trust) {
    const trustedByCount = new Array(n).fill(0);
    const trustsCount = new Array(n).fill(0);

    for(let i=0; i<trust.length; i++) {
        const [a,b] = trust[i];

        trustsCount[a-1] += 1;
        trustedByCount[b-1] += 1;
    }

    for(let i=0; i<n ;i++) {
        if(trustedByCount[i] === n-1 && trustsCount[i] === 0) return i+1
    }
    return -1
}


console.log(findJudge(2, [[1,2]])) // 2
console.log(findJudge(3, [[1,3],[2,3]])) //3
console.log(findJudge(3, [[1,3],[2,3],[3,1]])) // -1