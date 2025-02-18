/**
 * https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/
 */

// will not work as s.length can be as large as 500 that in decimal will be 2**500-1
function numSteps1(s) {
    let num = parseInt(s,2);
    let steps = 0;
    while(num !== 1) {
        steps++;
        if(num % 2 === 0) num = num / 2;
        else num = num + 1;
    }
    return steps
}

function numSteps(s) {
    s = [...s];
    let steps = 0
    while(s.length !== 1 && s[0] === '1') {
        steps++
        const n = s.length;
        if(s[n-1] === '0') {
            // number is even
            s.pop();
        } else {
            // add one
            let i = n-1;
            while(s[i] === '1' && i>=0) {
                s[i] = '0';
                i--;
            }
            if(i<0) s = ['1', ...s]
            else s[i] = '1'
        }
    }
    return steps
}

console.log(numSteps("1111011110000011100000110001011011110010111001010111110001")) // 85
console.log(numSteps("1101")) // 6
console.log(numSteps("10")) // 1
console.log(numSteps("1")) // 0