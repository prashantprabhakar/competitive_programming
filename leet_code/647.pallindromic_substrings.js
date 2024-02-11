/**
 * https://leetcode.com/problems/palindromic-substrings/description/?envType=daily-question&envId=2024-02-10
 * Given a string s, return the number of palindromic substrings in it.
 */


function countPallindromicSubstrings(str) {
    const n = str.length;
    const dp = new Array(n).fill(-1).map(() => new Array(n).fill(-1))

    let count = 0

    // let's fill the dp's diagonals with 1. We don't need to fill for start < end, so we can skip some iteration
    for(let start=0; start<n; start++) {
        for(let end=start; end<n; end++) {
            // one char is always pallindrom
            if(start === end) {
                dp[start][end] = 1;
                count++;
            }
            // for 2 chars, to be pallindrom both needs to be equal
            else if(end-start === 1) {
                if(str[start] === str[end]) {
                    dp[start][end] = 1;
                    count++
                } else {
                    dp[start][end] = 'x'
                }
            }
        }
    }

    // we need to fill the remaining dp table diagonally
    let j = 2;
    let start = 0; end = 2

    while(j<n) {
        if(str[start] === str[end] && dp[start+1][end-1] === 1) {
            dp[start][end] = 1;
            count++
        } else {
            dp[start][end] = 0
        }
        start++;
        end++;
        if(start >= n || end >=n) {
            start = 0;
            end = j+1
            j++;
        }
            
    }
    return count

}


console.log(countPallindromicSubstrings('abc'))
console.log(countPallindromicSubstrings('aaa'))
console.log(countPallindromicSubstrings('geeks'))
console.log(countPallindromicSubstrings("aaaaa")) // 15