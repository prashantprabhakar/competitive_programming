/**
 * URL: https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/
 * source: ['leetcode']
 * difficulty: 'easy'
 */


 var numTimesAllBlue = function(flips) {
    let highestFlipIndex = 0;
    let count = 0;
    
    for(let i=0; i<flips.length; i++) {
        let fIndex = flips[i]; // index being flipped
        highestFlipIndex = Math.max(highestFlipIndex, fIndex);
        
        if(highestFlipIndex === i+1) {
            count++
        }
    }
    return count;
};

