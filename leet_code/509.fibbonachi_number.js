/**
 * UR: https://leetcode.com/problems/fibonacci-number/
 * sourcE: leetcode
 */
/**
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
    F(0) = 0, F(1) = 1
    F(n) = F(n - 1) + F(n - 2), for n > 1.

*/


function fibonacci(n) {
    if(n == 0 || n == 1) return n;
    let lastFib = 1, secondLastFibb = 0;
    for(let i=2; i<=n ;i++) {
        let temp = lastFib
        lastFib =  lastFib + secondLastFibb;
        secondLastFibb = temp;

    }
    return lastFib
}

for(let i=0; i<6; i++) {
    console.log(`n: ${i} | fibb: ${fibonacci(i)}`)
}