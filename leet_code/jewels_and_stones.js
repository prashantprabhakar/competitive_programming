/**
 * https://leetcode.com/problems/jewels-and-stones/
 */


 /**
  * You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels. The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".
  */

var numJewelsInStones = function(J, S) {
    let s = new Set(J)
    let count = 0;


    for(let i=0; i<S.length; i++){
        if(s.has(S[i])) {
            console.log(S[i])
            count++
        }
    }
    return count
};

// https://dev.to/healeycodes/solving-puzzles-with-high-performance-javascript-3o4k?utm_source=additional_box&utm_medium=internal&utm_campaign=regular&booster_org=c
const numJewelsInStones2 = function(J,S){
    const jewels = new Int8Array(59)
    for(let i=0; i< J.length; i++){
        jewels[J.charCodeAt(i)-65] = 1
    }

    let count = 0

    for(let i=0; i<S.length; i++){
        if(jewels[S.charCodeAt(i)-65] == 1) count++
    }

    return count
}

numJewelsInStones("aA", "aAAbbbb")