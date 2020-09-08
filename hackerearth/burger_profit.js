

const calcProfit = (b, p, f, hc, cc) => {
    let bunsReamaining = b
    let totalCost = 0

    if(hc > cc) {
        // we'll maximise hamburgers
        let hamburders = bunsReamaining > 2*p ? p : Math.floor(bunsReamaining/2)
        totalCost += hamburders*hc
        if(bunsReamaining <=0) return totalCost

        // now we'll make chicken burgers from remaining bun
        let chickenBurgers = bunsReamaining > 2*f ?  f : Math.floor(bunsReamaining/2)
        totalCost = totalCost + (chickenBurgers * cc)
        return totalCost
    } else {
        // we'll maximize chicken burger
        let chickenBurgers = bunsReamaining > 2*f ? f : Math.floor(bunsReamaining/2)
        totalCost += chickenBurgers*cc
        bunsReamaining -= chickenBurgers*2
        
        if(bunsReamaining <=0) return totalCost
        // make hamburders from remaining
        let hburgers = bunsReamaining > 2*p ? p : Math.floor(bunsReamaining/2)
        totalCost += hburgers*hc
        return totalCost
    }

}

function bun(b, p, f, hc, cc) {
    let tc1=0, tc2=0
    // make hm first and then cburger
    


}




console.log(calcProfit(1, 2, 2, 10, 1))