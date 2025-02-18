/**
 * https://leetcode.com/problems/remove-all-occurrences-of-a-substring/
 * 1910. Remove All Occurrences of a Substring
 */

/**
 * Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

Find the leftmost occurrence of the substring part and remove it from s.
Return s after removing all occurrences of part.

A substring is a contiguous sequence of characters in a string.
 */

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {


    let i=0, j= 0;
    let x = 0; y=0// index of result
    let n = s.length;
    let pLen = part.length;
    let result = ''

    let temp = ''
    while(i<s.length) {
        if(j === part.length) {
            j = 0; // start from begining
            temp = temp.slice(0, -pLen)
        }
        if(s.charAt(i) === part.charAt(j)) {
            temp += s.charAt(i);
            i++;
            j++;
        } else {
            j = 0;
            // check if temp matches
            temp += s.charAt(i);
            if(s.charAt(i) === part.charAt(y)) {
                y++;
                // i++;
                // j = 0;
            } else {
                y = 0
                result += temp;
                temp = ''
                i++
            }

        }
    }
    return result
};

console.log(removeOccurrences("daabcbaabcbc", "abc"))