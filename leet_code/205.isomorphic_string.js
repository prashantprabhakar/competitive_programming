/*
 */

/*
    url: https://leetcode.com/problems/isomorphic-strings/
    source: ["leetcode"]
 */


function isomorphicString(s, t) {
    if(s.length != t.length) return false;
    
    let map1 = {}, map2 = {};

    for(let i=0; i<s.length; i++) {
       let ch1 = s[i], ch2 = t[i];
        if(map1[ch1]) {
            if(map1[ch1] === ch2) continue 
            return false;
        }
        if(map2[ch2]) return false;
        
        map1[ch1] = ch2;
        map2[ch2] = true;


    }
    return true;
}

console.log(isomorphicString("foo", "bar")); // false
console.log(isomorphicString("egg", "foo")); // true
console.log(isomorphicString("badc", "baba")) // false
console.log(isomorphicString("bbbaaaba", "aaabbbba")) // false