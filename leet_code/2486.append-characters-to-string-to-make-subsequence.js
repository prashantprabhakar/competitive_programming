/**
 * https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/
 * Difficulty: medium
 */


// brute force: 80 / 85 testcases passed. TLE
function appendCharacters1(s, t) {
    let minCharsNeeded = t.length;
    for(let index=0; index<s.length; index++){
        let i=index, j = 0;
        if(s[i] !== t[0]) continue;
        while(i<s.length && j<t.length) {
            if(s[i] === t[j]) {
                i++; j++
            } else {
                i++;
            }
        }
        let minCharsFromIndex = t.length - j;
        minCharsNeeded = Math.min(minCharsNeeded, minCharsFromIndex)
    }
    console.log(minCharsNeeded)
    return minCharsNeeded
}

// Passed
function appendCharacters2(s, t) {
    let minCharsNeeded = t.length;
    for(let index=0; index<s.length; index++){
        let i=index, j = 0;
        if(s[i] !== t[0]) continue;
        while(i<s.length && j<t.length) {
            if(s[i] === t[j]) {
                i++; j++
            } else {
                i++;
            }
        }
        let minCharsFromIndex = t.length - j;
        minCharsNeeded = Math.min(minCharsNeeded, minCharsFromIndex)
        // this is minimum result we can expect
        if(minCharsNeeded === 0) break;
    }
    console.log(minCharsNeeded)
    return minCharsNeeded
}

// Optmized O(n+m)
function appendCharacters(s, t) {
    let i=0, j = 0;
    while(i<s.length && j<t.length) {
        if(s[i] === t[j]) {
            j++
        }
        i++;
    }
    return t.length - j;
}

appendCharacters("coaching", "coading") // 4
appendCharacters("abcd", "a") // 0
appendCharacters("z", "abcde") // 5