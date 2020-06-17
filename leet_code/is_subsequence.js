
// check if s is subsequence of t

/***
 * A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without 
 * disturbing the relative positions of the remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).
 */


function is_subsequence_using_iteration(s, t) {
    if(s.length > t.length) return false
    
    let i=0  // index of s
    let j=0 // index of t

    while(i<s.length && j<t.length) {
        if(s[i] == t[j]) {
            i++
            j++
        } else {
            j++
        }
    }

    return i==s.length
}

function is_subsequence_using_recursion(s,t) {
    
    if(s.length == 0) return true
    if(t.length == 0) return false

    // compare last chars
    if(s[s.length-1] == t[t.length-1]) {
        s = s.slice(0, s.length-1)
        t = t.slice(0, t.length-1)
        return is_subsequence_using_recursion(s, t)
    } else {
        t = t.slice(0, t.length-1)
        return is_subsequence_using_recursion(s,t)
    }
}

console.log(is_subsequence_using_iteration("abc", "ahbgdc"))
console.log(is_subsequence_using_iteration("axc", "ahbgdc"))

console.log(is_subsequence_using_recursion("abc", "ahbgdc"))
console.log(is_subsequence_using_recursion("axc", "ahbgdc"))
