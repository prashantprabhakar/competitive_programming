/*
    @GFG https://www.geeksforgeeks.org/print-longest-substring-without-repeating-characters/
    Print Longest substring without repeating characters
*/

/**
    Given a string, print the longest substring without repeating characters. 
    For example, the longest substrings without repeating characters for “ABDEFGABEF” are “BDEFGA” and “DEFGAB”, with length 6.
    For “BBBB” the longest substring is “B”, with length 1. The desired time complexity is O(n) where n is the length of the string.
  
    Input : GEEKSFORGEEKS
    Output : EKSFORG

    Input : ABDEFGABEF
    Output : BDEFGA

 */

function countLongestWithUniqueChars(str) {
    let maxCount = 0, tempCount = 0;
    let mapValidityIndex =  -1;

    let map = new Map();

    for(let i=0; i<str.length; i++) {
        let char = str.charAt(i);
        if(map.has(char) && map.get(char) > mapValidityIndex) {
            // we found a duplicate.. 
            maxCount = Math.max(tempCount, maxCount);
            //  find at what index duplicate exists
            let duplicateCharsIndex = map.get(char);
            tempCount = i - duplicateCharsIndex - 1; // -1 since we are doing empCount++ anyways at end
            mapValidityIndex = duplicateCharsIndex;

        }
        map.set(char, i);
        tempCount++;
    }
    console.log(maxCount)
}


function printLongestWithUniqueChars(str) {
    let res = '', tempStr = '';
    let map = new Map();
    let mapValidityIndex = -1;
    

    for(let i=0; i<str.length; i++) {
        const char = str.charAt(i);
        if(map.has(char) &&  map.get(char) > mapValidityIndex) {
            res = res.length > tempStr.length ? res : tempStr;
            let duplicateCharsIndex = map.get(char);
            mapValidityIndex = duplicateCharsIndex;
            // now we need to remove all occ til this char is reached
            while(tempStr.length && tempStr.charAt(0) !== char) {
                tempStr = tempStr.slice(1);
            }
            // remove this char as well
            if(tempStr.length) tempStr = tempStr.slice(1)
        } 
        tempStr += char;
        map.set(char, i);
    }
    console.log(res)
}



countLongestWithUniqueChars('geeksforgeeks')
printLongestWithUniqueChars('geeksforgeeks')
printLongestWithUniqueChars('ABDEFGABEF')

