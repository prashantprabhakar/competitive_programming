/**
 * @GFG https://www.geeksforgeeks.org/find-the-smallest-window-in-a-string-containing-all-characters-of-another-string/
 * Find the smallest window in a string containing all characters of another string
 */
/**
    Given two strings, string1 and string2, the task is to find the smallest substring in string1 
    containing all characters of string2 efficiently. 

    Input: string = “this is a test string”, pattern = “tist” 
    Output: Minimum window is “t stri” 
    Explanation: “t stri” contains all the characters of pattern.

    Input: string = “geeksforgeeks”, pattern = “ork” 
    Output: Minimum window is “ksfor”
 */

// we need to find anagram of ptr in str but with smallest window but there can be extra chars present
function findSmallestWindowSubstring(str, ptr) {
    // base case
    if(str.length < ptr.length) return "";
    let ptrMap = {}
    ptr.split('').forEach(char => ptrMap[char] === undefined ? ptrMap[char] = 1 : ptrMap[char] += 1);
    let count = Object.keys(ptrMap).length;
    let tempStr = '', resStr = ''

    let j=0;
    for(let i=0; i<str.length; i++) {
        let char = str[i];
        if(ptrMap[char] !== undefined) {
            ptrMap[char] -= 1;
            if(ptrMap[char] === 0) count--;
        }
        tempStr += char;
        if(count === 0) {
            resStr = resStr.length && tempStr.length > resStr.length ? resStr :  tempStr;
            // now increment j and slie the window. remove charAt j now
            while(tempStr.length && count <= 0) {
                let charToRemove = tempStr[0];
                if(ptrMap[charToRemove] !== undefined) {
                    ptrMap[charToRemove] === 0 ? count++ : undefined
                    ptrMap[charToRemove] += 1;
                }
                tempStr = tempStr.slice(1);
                if(count === 0) {
                    resStr = resStr.length && tempStr.length > resStr.length ? resStr :  tempStr;
                }
            }

        }
    }
    console.log(resStr)
}


findSmallestWindowSubstring("this is a test string", "tist");
findSmallestWindowSubstring("geeksforgeeks", "ork")
