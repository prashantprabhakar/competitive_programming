/**
 * https://leetcode.com/problems/find-common-characters/
 * Difficulty: Easy
 */

function commonChars1(words) {
    const freqMap1 = [...words[0]].reduce((freq, char) => {
        freq[char] = (freq[char] ?? 0) + 1;
        return freq;
    }, {});

    // O(n)
    for(let i=1; i<words.length; i++) {
        let freqMap2 = [...words[i]].reduce((freq, char) => {
            freq[char] = (freq[char] ?? 0) + 1;
            return freq;
        }, {});

        // O(26) - constant time
        Object.keys(freqMap1).forEach(char => {
            freqMap1[char] = Math.min(freqMap1[char], (freqMap2[char] ?? 0))
        })

    }

    let result = [];
    Object.keys(freqMap1).forEach(char => {
        let freq = freqMap1[char];
        for(let i=0; i<freq; i++) result.push(char)
    });
    return result;
}

function commonChars(words) {
    let arr1 = new Array(26).fill(0);

    [...words[0]].forEach(char => {
        let index = char.charCodeAt(0) - 97;
        arr1[index] = arr1[index]+1;
    })

    for(let i=1; i<words.length; i++) {
        let arr2 = new Array(26).fill(0); 
        [...words[i]].forEach(char => {
            let index = char.charCodeAt(0) - 97;
            arr2[index] = arr2[index]+1;
        });

        for(let i=0; i<26; i++) {
            arr1[i] = Math.min(arr1[i], arr2[i]);
        }
    }

    let result = [];
    for(let i=0; i<26; i++) {
        for(let j=0; j<arr1[i]; j++) {
            result.push(String.fromCharCode(97+i))
        }
    }
    return result;
}



console.log(commonChars(    ["bella","label","roller"]))