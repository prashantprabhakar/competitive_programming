/**
 * problem: https://www.hackerrank.com/challenges/non-divisible-subset/problem
 * sol: https://www.geeksforgeeks.org/subset-no-pair-sum-divisible-k/
 */


function nonDivisibleSubset(k, s) {
    // Write your code here
    test1(k,s)

}

function test1(k,s){
    let remainders = new Array(k).fill(0)

    for(let i=0; i<s.length; i++){
        let rem = s[i] % k;
        remainders[rem] = remainders[rem]+1
    }
    console.log(remainders)
    let globalMax = 0
    for(let i=0; i<parseInt(remainders/2); i++){
        let localMax = Math.max(remainders[i], remainders[k-1])
        globalMax = Math.max(localMax, globalMax)
    }
    console.log(globalMax)
}

nonDivisibleSubset(3,[3, 7, 2, 9, 1])