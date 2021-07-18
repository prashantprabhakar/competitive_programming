


/**
 * This is similar to finding stock profit. Just that here we need to return indexes of day trader should buy and sell
 */


function stockProfitIndex(prices) {
  if(prices.length < 2) return [0,0]

  // actual buyIndex is updtaed only when a buy is followed by a sell
  let buyIndex = 0, sellIndex=0, maxProfit = 0, actualBuyIndex = 0

  for(let i=1; i<prices.length; i++) {
    if(prices[i] < prices[buyIndex]) {
      buyIndex = i;
    }

    if(prices[i] - prices[buyIndex] > maxProfit) {
      sellIndex = i;
      maxProfit = prices[i] - prices[buyIndex];
      actualBuyIndex = buyIndex
    }

  }
  return [actualBuyIndex, sellIndex]
}



console.log(stockProfitIndex([7,1,5,3,6,4])) // [1,4]
console.log(stockProfitIndex([7,6,4,3,1])) // [0,0]
console.log(stockProfitIndex([2,10,1, 3])) // [0,1]
