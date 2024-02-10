/**
 * https://leetcode.com/problems/reorganize-string/
 */


function reorganizeString(s) {
    let freqMap = {};
    for(let i=0; i<s.length; i++){
        let char = s [i];
        if(freqMap[char]) {
            freqMap[char] = freqMap[char] + 1
        } else {
            freqMap[char] = 1
        }
    };

    let chars = Object.keys(freqMap);
    let sortedChars = chars.sort((a,b) => freqMap[b] - freqMap[a]);
    let result = ''
    const DEFAULT_RESULT = ''
    console.log(freqMap)
    function formatResult(i, j) {
        if(result.length === s.length) return result;
        if(i>=sortedChars.length && j >= sortedChars.length) return DEFAULT_RESULT
        if(i >= sortedChars.length || j >= sortedChars.length) {
            let ch = ''
            if(i>= sortedChars.length) {
                ch = sortedChars[j];
                j = j+1
            } else if( j>= sortedChars.length) {
                ch = sortedChars[i];
                i = j+1
            } 
            if(result[result.length-1] === ch) return DEFAULT_RESULT;
            result +=ch;
            freqMap[ch] = freqMap[ch] - 1;
            return formatResult(i, j)

        }
        let ch1 = sortedChars[i], ch2 = sortedChars[j];
        if(freqMap[ch1] === 0 && freqMap[ch2] === 0) {
            return formatResult(j+1, j+2);
        } else if(freqMap[ch1] === 0) {
            return formatResult(j+1, j);
        } else if(freqMap[ch2] === 0) {
            return formatResult(i, j+1)
        } else {
            result += ch1 
            result += ch2;
            freqMap[ch1] = freqMap[ch1] - 1;
            freqMap[ch2] = freqMap[ch2] - 1;
            return formatResult(i, j)
        }
    }

    return formatResult(0, 1)

}

console.log(reorganizeString('ogccckcwmbmxtsbmozli')) // cocgcickmlmsmtbwbxoz