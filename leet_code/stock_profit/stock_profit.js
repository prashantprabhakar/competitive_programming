/**
 * source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/572/
 * 
 */

/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

function findMaxProfit(prices=[]){
    if(prices.length == 0) return 0
    let buyRate = prices[0], maxProfit=0
    for(let i=0; i<prices.length; i++) {
        // if today's rate is less than prev rate then we should buy
        if(prices[i] < buyRate) buyRate = prices[i]
        // if selling today maximises profit
        if(prices[i] - buyRate > maxProfit) maxProfit = prices[i] - buyRate
    }
    return maxProfit
}


console.log(findMaxProfit([7,1,5,3,6,4])) //5
console.log(findMaxProfit([7,6,4,3,1])) //0 
console.log(findMaxProfit([2,10,1, 3])) // 8

