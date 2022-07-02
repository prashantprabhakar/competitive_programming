/**
 * url: https://leetcode.com/problems/is-subsequence/
 * source: leetcode,
 */

/*
    Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

    A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. 
    (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */

function isSubsequence(s, t) {
    if(s.length > t.length) return false;

    let i =0, j= 0;
    while(i<s.length && j<t.length) {
        if(s[i] === t[j]) {
            i++; j++;
        } else {
            j++;
        }
    }
    return i === s.length;
}

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("acx", "ahbgdc")); // false
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("", "aaa")); // true
console.log(isSubsequence("", "")); // true
console.log(isSubsequence("a", ""))