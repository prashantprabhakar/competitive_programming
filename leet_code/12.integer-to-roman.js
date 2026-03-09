/**
 * https://leetcode.com/problems/integer-to-roman/
 * 
 * PENDING - not yet done
 */

const map = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",

}

var intToRoman = function(num) {
    
    let result = [];
    while(num > 10) {
        let lastDigit = num % 10;
        let num = parseInt(num / 10);

    }

    
};

function toRoman(num) {
    if(map[num]) return map[num];
    if(num === 2) return 'II';
    if(num === 3) return "III"
    if(num === 4) return "IV"
    if(num === 9) return "IX"

    if(num > 5 && num < 10) {
        return `V${toRoman(num - 5)}`
    } else if(num > 10 && num < 50) {
        return 50 - num < num - 10 ? `${toRoman(50 - num)}L`: `X${toRoman(num - 10)}`
    } else if(num > 50 && num < 100) {
        return 100 - num < num - 50 ? `${toRoman(100 - num)}C`: `L${toRoman(num - 50)}`
    } else if( num > 100 && num < 500) {
        return 500 - num < num - 50 ? `${toRoman(500 - num)}D`: `C${toRoman(num - 100)}`
    } else if(num> 500 && num < 1000) {
        return 1000 - num < num - 50 ? `${toRoman(1000 - num)}M`: `D${toRoman(num - 500)}`
    } else {
        return `M${toRoman(num - 1000)}`
    }
}

console.log(toRoman(94)) // MCMXCIV

// 18 => 15 + 3