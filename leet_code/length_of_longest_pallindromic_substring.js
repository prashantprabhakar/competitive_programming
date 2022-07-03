// @TODO : 
/**
 * url: https://www.geeksforgeeks.org/length-of-longest-palindrome-substring/
 * source: GeeksForGeeks
 */

/*
    Given a string s, return the length of longest palindromic substring in s.

    Example 1:
        Input: s = "babad"
        Output: 3
        Explanation: "aba" is a valid answer.
    
    Example 2:
        Input: s = "cbbd"
        Output: 2
        Explanation: "bb" is a valid answer.

    Constraints:
        1 <= s.length <= 1000
        s consist of only digits and English letters.
*/


function countLps_recursion(s) { 
    let i = 0, j= s.length -1;

    return _lps(s, i, j)
    function _lps(s, i, j) {
        if(j< i) return 0;
        if(i === j) return 1
        if(s[i] === s[j]) {
            // if substring s[i+1] and s[j-1] are pallindrom; result will be 2 + lps(substr).
            // basically if _lps(s) === s.length means s is palindrom completly.
            let lpsRemaining = _lps(s, i+1, j-1);
            let lenOfRemainingStr = j-i-1;
            if(lpsRemaining === lenOfRemainingStr) return 2 + lpsRemaining;
        }
        // Q: Why following code is not placed in else clause
        // ans: let's say last chars matched but remaining substr was not present, we will not do anything and return undefined. So we have to execute following code in 2 cases
        // 1. ith and jth chars don't match
        // 2. ith and jth chars match but string b/w i-j is not pallindromey
        let lps1 = _lps(s, i+1, j);
        let lps2 = _lps(s, i, j-1);
        return Math.max(lps1, lps2);

        
    }
}

function countLps_recursion_optimized(s) {
    // I have tried to do an do an optimization in recursive code which can use used in memeoized version as well.
    // So basically when we need to check if str(i+1... j-1) is pallindrom or not. We just need to see if whole string is pallindrom, are don't care of it's LPS.
    // So we can check if isPallindrom in O(n) times instead of O(n*3) we can save some time
    let i = 0, j= s.length -1;

    return _lps(s, i, j)
    function _lps(s, i, j) {
        if(j< i) return 0;
        if(i === j) return 1
        if(s[i] === s[j] && isPallindrom(s, i+1, j-1)) {
            return 2 + (j-i-1);
        } else {
            let lps1 = _lps(s, i+1, j);
            let lps2 = _lps(s, i, j-1);
            return Math.max(lps1, lps2);
        }
    }
}



function countLps_topDownDp(s) {
    let i = 0, j= s.length -1;

    const memo = {};
    const getMemoKey = (i, j) => `${i}_${j}`;

    return _lps(s, i, j)
    function _lps(s, i, j) {
        if(j< i) return 0;
        if(i === j) return 1;
        const memoKey = getMemoKey(i, j)

        if(memo[memoKey] !== undefined) return memo[memoKey]

        if(s[i] === s[j]) {
            // if substring s[i+1] and s[j-1] are pallindrom; result will be 2 + lps(substr).
            // basically if _lps(s) === s.length means s is palindrom completly.
            let lpsRemaining = _lps(s, i+1, j-1);
            let lenOfRemainingStr = j-i-1;
            if(lpsRemaining === lenOfRemainingStr) {
                memo[memoKey] = 2 + lpsRemaining;
                return memo[memoKey]
            } 
        } 

        let lps1 = _lps(s, i+1, j);
        let lps2 = _lps(s, i, j-1);
        memo[memoKey] = Math.max(lps1, lps2);
        return memo[memoKey]
    }
}

function countLps_bottomUpDp(s) {
    // This simply converts recusion tp dpmatrix
    const n = s.length;
    let dpMatrix = new Array(n).fill(-100).map(() => new Array(n).fill(-100));
    for(let i =0; i<n; i++) {
        for(let j=0; j<n; j++) {
        if(j<i) dpMatrix[i][j] = 0;
        if(i===j) dpMatrix[i][j] = 1;
        }
    }

    for(let j=1; j<n; j++) {
        for(let i=j-1; i>=0; i--) {
            if(s[i] === s[j] && dpMatrix[i+1][j-1] === j-1+1) {
                dpMatrix[i][j] = 2 + dpMatrix[i+1][j-1];
            } else {
                dpMatrix[i][j] = Math.max(dpMatrix[i+1][j], dpMatrix[i][j-1])
            }
        }
    }
    return dpMatrix[0][n-1]

}


function isPallindrom(s, i=0, j=s.length-1) {
    while(i<j) {
        if(s[i] !== s[j]) return false;
        i++; j--;
    }
    return true
}

const testCases = [
    { input: "babad", expectedOutput: "aba"},
    { input: "abb", expectedOutput: "bb"},
    { input: "ac", expectedOutput: "a or c"}, // or c
    { input: "aacabdkacaa", expectedOutput: "aca"},
    { input: "abccccdd", expectedOutput: "dccaccd" },
    { input: "a", expectedOutput: "a" },
    { input: "abcbab", expectedOutput: "abcba" },
    { input: "abcdaa", expectedOutput: "aa" },

]


function main() {
    console.log("********** Using recursion *******")
    testCases.forEach(({input, expectedOutput}) => {
        let output = countLps_recursion(input);
        console.log({input, expectedOutput: expectedOutput.length, output })
    })

    console.log("\n********** Using optimized recursion *******")
    testCases.forEach(({input, expectedOutput}) => {
        let output = countLps_recursion_optimized(input);
        console.log({input, expectedOutput: expectedOutput.length, output })
    })

    console.log("\n********** Using top down DP *******")
    testCases.forEach(({input, expectedOutput}) => {
        let output = countLps_topDownDp(input);
        console.log({input, expectedOutput: expectedOutput.length, output })
    })

}


main()
