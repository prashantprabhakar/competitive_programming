
/**
 * https://leetcode.com/problems/find-the-original-array-of-prefix-xor/
 */

var findArray = function(pref) {
    let result = [pref[0]];
    for(let i=1; i<pref.length; i++) {
        let temp = pref[i]
        for(let j=0; j<result.length; j++) {
            temp = temp ^ result[j]
        }
        result[i] = temp;
    }
    return result
}

var findArray = function(pref) {
    let result = [pref[0]];
    for(let i=1; i<pref.length; i++) {
        result[i] =  pref[i] ^ pref[i-1]
    }
    return result
}

console.log(findArray([5,2,0,3,1]))