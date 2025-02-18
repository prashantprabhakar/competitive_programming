/**
 * 483. Smallest Good Base
 * https://leetcode.com/problems/smallest-good-base/description/
 * Difficulty: hard
 * Tags: Math, Binary Search
 * Status: Not solved
 */

/**
 * Given an integer n represented as a string, return the smallest good base of n.

    We call k >= 2 a good base of n, if all digits of n base k are 1's.
 */


function smallestGoodBase(n) {
    n = BigInt(n);
    let mMax = Math.floor(Math.log(Number(n)) / Math.log(2));
    for (let m = mMax; m > 1; m--) {
        let k = BigInt(Math.floor(Math.pow(Number(n), 1.0 / m)));
        let mul = BigInt(1), sum = BigInt(1);
        for (let i = 1; i <= m; i++) {
            mul *= k;
            sum += mul;
        }
        if (sum === n) return k + '';
    }
    return (n - BigInt(1)) + '';
}