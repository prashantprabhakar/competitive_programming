/**
 * @GFG https://www.geeksforgeeks.org/find-the-longest-substring-with-k-unique-characters-in-a-given-string/
 * Find the longest substring with k unique characters in a given string
 */

/**
    Given a string you need to print longest possible substring that has exactly M unique characters.
    If there are more than one substring of longest possible length, then print any one of them.

    "aabbcc", k = 1
    Max substring can be any one from {"aa" , "bb" , "cc"}.

    "aabbcc", k = 2
    Max substring can be any one from {"aabb" , "bbcc"}.

    "aabbcc", k = 3
    There are substrings with exactly 3 unique characters
    {"aabbcc" , "abbcc" , "aabbc" , "abbc" }
    Max is "aabbcc" with length 6.

    "aaabbb", k = 3
    There are only two unique characters, thus show error message. 
 */

function longestSubstrWithKUniqueChars(str, k) {
    let map = new Map();
    let resStr = '', tempStr = '';


    for(let i=0; i<str.length; i++) {
        let char = str.charAt(i);
        tempStr += char
        if(map.has(char)) {
            map.set(char, map.get(char)+1);
        } else {
            map.set(char, 1)
        }
        if(map.size === k) {
            resStr = resStr.length < tempStr.length ? tempStr : resStr;
        }
        if(map.size > k) {
            // slice the window
            // we should now remove chars from tempStr until we get all unique ones
            while(tempStr.length && map.size > k) {
                let charToRemove = tempStr.charAt(0);
                tempStr = tempStr.slice(1) // O(1)
                map.get(charToRemove) === 1 ? map.delete(charToRemove) : map.set(charToRemove,  map.get(charToRemove)-1);
            }
        }
    }
    console.log(resStr)
}

longestSubstrWithKUniqueChars('aabbcc', 2)
longestSubstrWithKUniqueChars('aabbcc', 3)
longestSubstrWithKUniqueChars('aaabbb', 3)