/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/description/?envType=study-plan-v2&envId=leetcode-75
 * 1071. Greatest Common Divisor of Strings
 * Difficulty: Easy
 * Topics: String
 * Solved: Yes
 */

function gcdOfStrings(str1, str2) {
    if(str2.length > str1.length)
        [str2, str1] = [str1, str2];

    let l1 = str1.length; l2 = str2.length;
    
    for(let i=l2; i>0; i--) {
        if(l1 % i || l2 % i) continue;
        let f1 = l1/i, f2 = l2/i;
        let x = str2.slice(0, i);
        if(
            mulStr(x, f2) === str2 &&
            mulStr(x, f1) === str1
        ) return x;
    }
    return ''
}

function mulStr(str, times) {
    result = ''
    for(let i=0; i<times; i++) result += str;
    return result;
}

console.log(gcdOfStrings("ABCABC", "ABC"))