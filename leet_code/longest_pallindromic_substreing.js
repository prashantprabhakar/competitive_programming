// @TODO : 
/**
 * url: https://leetcode.com/problems/longest-palindromic-substring/
 * source: leetcode
 */

/*
    Given a string s, return the longest palindromic substring in s.

    Example 1:
        Input: s = "babad"
        Output: "bab"
        Explanation: "aba" is also a valid answer.
    
    Example 2:
        Input: s = "cbbd"
        Output: "bb"

    Constraints:
        1 <= s.length <= 1000
        s consist of only digits and English letters.
*/

// wip

function findtLps_bottomUpDp(s) {
    // This simply converts recusion tp dpmatrix
    const n = s.length;
    let dpMatrix = new Array(n).fill('').map(() => new Array(n).fill(''));
    for(let i =0; i<n; i++) {
        for(let j=0; j<n; j++) {
            if(j<i) dpMatrix[i][j] = '';
            if(i===j) dpMatrix[i][j] = s[i];
        }
    }

    for(let j=1; j<n; j++) {
        for(let i=j-1; i>=0; i--) {
            if(s[i] === s[j] ) {
                dpMatrix[i][j] = s[i] + dpMatrix[i+1][j-1] + s[i];
            } else {
                // dpMatrix[i][j] = Math.max(dpMatrix[i+1][j], dpMatrix[i][j-1])
                dpMatrix[i][j] = dpMatrix[i+1][j].length > dpMatrix[i][j-1].length ? dpMatrix[i+1][j] : dpMatrix[i][j-1]
            }
        }
    }
    return dpMatrix[0][n-1]

}