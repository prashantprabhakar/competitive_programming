/**
 * url: https://leetcode.com/problems/coin-change/
 * source: 'leetcode',
 * difficulty: 'medium
 */


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount,) {
    let result = onChangeInternal(coins, amount)
    if(result === Infinity) return -1;
    return result

};

function onChangeInternal(coins, amount) {
    let minCoins = Infinity
    if(amount === 0) {
        return 0
    }

    if(amount < 0) {
        return Infinity
    }

    for(let i=0; i<coins.length; i++) {
        
        let result = 1 + onChangeInternal(coins, amount-coins[i])
        if(minCoins > result) {
            minCoins = result;
        }
    }
    
 
   return minCoins
}


const tests = [
    { 
        input: { coins: [1,2,5], amount: 11},
        expected: 3
    },
    {
        input: { coins: [2], amount: 3},
        expected: -1
    }
]

tests.forEach(test => {
    const { expected, input } = test;
    let res = coinChange(input.coins, input.amount);
    console.log({expected, res})
})