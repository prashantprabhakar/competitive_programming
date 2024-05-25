/**
 * https://leetcode.com/problems/maximum-score-words-formed-by-letters/description/
 */

function maxScoreWords(words, letters, score) {

    // score of each word
    const wordScore = words.reduce((map,word) => {
        map[word] = [...word].reduce((acc, char) =>  acc+ score[char.charCodeAt(0) - 97], 0)
        return map;
    }, {});

    // freq of each letter in provided letters
    const letterFreq = getLetterFreq(letters);

    // letter freq of each word
    const letterFreqForWords = words.reduce((map, word) => {
        map[word] = getLetterFreq([...word]);
        return map;
    }, {});

    let maxScore = 0;

    function backtrack(start, score, freqMap) {

        if(start >= words.length) {
            maxScore = Math.max(score, maxScore);
            return
        }

        for(let end=start; end<words.length; end++) {
            const word = words[end];
            // take the word
            const updatedMap = canFormWord(letterFreqForWords[word], freqMap);
            if(updatedMap) {
                backtrack(end+1, score+wordScore[words[end]],  x );
            } else {
                backtrack(end+1, score, freqMap)
            }
        }
    }

    function canFormWord(charFreqOfWord, remainingLetters) {
        let letterFreqNew = Object.assign({}, remainingLetters);
        for(const [char, freq] of Object.entries(charFreqOfWord)) {
            if(!letterFreqNew[char] || letterFreqNew[char] < freq) {
                return false;
            }
            letterFreqNew[char] = letterFreqNew[char] - freq;
        }
        return letterFreqNew
    }

    function getLetterFreq(_letters) {
        return _letters.reduce((freqMap, char) => {
            freqMap[char] = freqMap[char] ? freqMap[char]+1 : 1;
            return freqMap
        }, {})
    }
    

    backtrack(0, 0, letterFreq);
    return maxScore

}

maxScoreWords(
    ["dog","cat","dad","good"], 
    ["a","a","c","d","d","d","g","o","o"],
    [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
) /// 23

maxScoreWords(
    ["xxxz","ax","bx","cx"],
    ["z","a","b","c","x","x","x"],
    [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
) // 27

maxScoreWords(
    ["leetcode"],
    ["l","e","t","c","o","d"],
    [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
) // 0