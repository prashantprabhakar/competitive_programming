/**
 * https://www.hackerrank.com/challenges/halloween-sale/problem?h_r=next-challenge&h_v=zen
 */

 /**
  * p initial price
  * d reduce in price after each purchase
  * m min limit of price
  * s total money u have
  */
function howManyGames(p,d,m,s ) {
    let noOfGames = 0
    let price = p
    while(s >= price) {
        noOfGames++
        s = s - price
        price = Math.max(m, price-d)
    }
    return noOfGames
}

console.log(howManyGames(20, 3, 6, 80))