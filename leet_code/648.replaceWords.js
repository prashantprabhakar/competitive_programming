/**
 * https://leetcode.com/problems/replace-words/description/
 * Topics: [Trid node, ]
 * Difficulty: Medium
 */


// Time complexity: O(n*m)
function repaceWords(words, dictionary){
    let result = '';
    let words = sentence.split(' ');
    for(let i=0; i<words.length; i++) {
        let word = words[i];
        for(let j=0; j<dictionary.length; j++) {
            let root = dictionary[j]
            if(word.startsWith(root)) {
                word = word.length < root.length ? word : root;
            }
        }
        result += `${word} `
    }
    return result.slice(0, result.length-1)
}