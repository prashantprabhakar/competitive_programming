function calculatePrice(k, p, a,b,c,d) {
    let price = p* (Math.sin(a*k + b) + Math.cos(c*k+d))
    return price
}


const test = () => {
    let ar = []
    for(let i=1; i<=10; i++) {
        let p = calculatePrice(i, 42, 1, 23, 4, 8 )
        ar.push(p)
    }

    findMaxLoss(ar)
}

const findMaxLoss = (arr) => {
    console.log(arr)
    let buyRate = arr[0], maxLoss = 0

    for(let i=1; i<arr.length; i++) {
        if(arr[i] > buyRate) buyRate = arr[i]
        console.log(buyRate, arr[i], maxLoss)
        // loss if sell todat
        let loss = buyRate - arr[i]
        if(loss > maxLoss) maxLoss = loss
    }

    let filtered = maxLoss.toFixed(6)
    console.log(filtered)
}

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


test()