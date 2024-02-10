/**
 * https://leetcode.com/problems/perfect-squares/
 */


function numSquares(n) {
    
    const cache = {};
    
    function rec(n) {
        if(cache[n] !== undefined) return cache[n];
        if(n <=1) return n;
        const n1 = Math.floor(Math.sqrt(n));
        let result = n;
        for(let i = 1; i<=n1; i++) {
            tempResult = 1 + rec(n - i*i);
            result = Math.min(result, tempResult)
        }

        cache[n] = result;

        return result
    }

    return rec(n)

};

console.log(numSquares(25))