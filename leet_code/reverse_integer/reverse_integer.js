/**
 * @param {number} x
 * @return {number}
 */


const revUsingInbuildMethods = x => {
    if (x < -2147483648 || x > 2147483647) {
        return 0
    }
    return parseInt(x.toString().split("").reverse().join("")) * Math.sign(x)
}

const reverse = x => {
    let isNegative = x < 0
    x = x < 0 ? x * -1 : x
    x = removeTrailingZeros(x)
    let len = findLengthOfInteger(x)
    console.log({x, len, isNegative})
    return isNegative ? -1 * reverseInt(x, len-1): reverseInt(x, len-1)


}

function reverseInt(x, len) {
    let res = 0
    while(x > 0) {
        let rem = x % 10
        res += rem * (10**len)
        len--
        x = parseInt(x/10)
    }
    return res
}

function removeTrailingZeros(x) {
    while(x%10 === 0){
        x = x/10
    }
    return x
}

function findLengthOfInteger(x) {
    let count = 0
    while(x/10 > 0) {
        x = parseInt(x/10)
        count++
    }
    return count
}

console.log(revUsingInbuildMethods(-2100))