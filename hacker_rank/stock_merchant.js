/**
 * https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 */


function sockMerchant(n, arr) {
    let map = new Map()
    for(let i=0; i<arr.length; i++) {
        let colour = arr[i]
        if(map.has(color)) {
            map.set(color, map.get(color)+1)
        } else {
            map.set(colour, 1)
        }
    }

    let pairs = 0
    for(let [color, count] of map.entries) {
        pairs += Matl.floor(count/2)
    }
    return pairs

}