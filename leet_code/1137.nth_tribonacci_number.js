/**
 * url: https://leetcode.com/problems/n-th-tribonacci-number/
 * title: 1137. N-th Tribonacci Number
 * source: leetcode
 * tags: [recursion]
 */


/*
    The Tribonacci sequence Tn is defined as follows: 
    T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
    Given n, return the value of Tn.
*/

/*
    Input: n = 4
    Output: 4
    Explanation:
    T_3 = 0 + 1 + 1 = 2
    T_4 = 1 + 1 + 2 = 4

    Input: n = 25
    Output: 1389537

*/

function tribonacci(n) {
    if(n==0) return 0;
    if(n == 1 || n ==2 ) return 1;
    let first = 1, second = 1, third = 0;
    for(let i=3; i<=n ; i++) {
        let secondTmp = second;
        let firstTmp = first;
        first = first + second + third;
        second = firstTmp;
        third = secondTmp;
    }
    console.log(first)
}

// tribonacci(3)
tribonacci(4)
tribonacci(25)