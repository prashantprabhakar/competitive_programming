

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

