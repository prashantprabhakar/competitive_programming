/**
 * https://leetcode.com/problems/word-break-ii/description/
 * Difficulty: hard
 * Tags: Backtracking
 */

// works but looks like can be optimized
function wordBreak1(s, wordArr) {
    const result = [];
    const wordDict = wordArr.reduce((map, word) => {
        map[word] = true;
        return map;
    }, {})

    function backtrack(i, possibleWord, sentance, sentaceLen) {
        if(i === s.length) {
            if(sentaceLen === s.length) {
                result.push(sentance);
            }
            return;
        }

        for(let j=i; j<s.length; j++) {
            const char = s[j];
           
            let newPossibleWord = possibleWord + char;
            if(wordDict[newPossibleWord]) {
                // if we have valid newPossibleWord, we have 2 paths:
                // 1. include it in sentance
                // 2. don't include it in sentance and iterate to check next char
                const newSentance = sentance ? `${sentance} ${newPossibleWord}` : newPossibleWord;
                backtrack(j+1, '', newSentance, sentaceLen+newPossibleWord.length);
            }

            // we must include char
            backtrack(j+1, newPossibleWord, sentance, sentaceLen)
        }
    }

    backtrack(0, '', '', 0);
    console.log(result)
    return result;
}

function wordBreak(s, wordArr) {
    const result = [];
    const wordDict = new Set(wordArr);
    
    function backtrack(i, sentance) {
        if(i === s.length) {
            result.push(sentance);
            return;
        }

        for(let j=i; j<s.length; j++) {
            let word = s.substring(i, j+1);
            if(!wordDict.has(word)) continue;
            // include the word
            let newSentance = sentance ? `${sentance} ${word}` : word;
            backtrack(j+1, newSentance);
        }
    }

    backtrack(0, '', '', 0);
    console.log(result)
    return result;
}


wordBreak("catsanddog", ["cat","cats","and","sand","dog"])
wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"])
wordBreak("catsandog", ["cats","dog","sand","and","cat"])