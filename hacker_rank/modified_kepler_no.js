/**
 * Modified Kaprekar Numbers
 * https://www.hackerrank.com/challenges/kaprekar-numbers/problem
 */

function isKaprekarNo(n) {
    if(n===1) return true
    let sq = n*n
    let no_len = n.toString().length
    let sq_len = sq.toString().length

    let l = parseInt(sq.toString().slice(0, sq_len-no_len))
    let r = parseInt(sq.toString().slice(sq_len-no_len))
    console.log({n,sq, no_len, sq_len, l, r})
    return (l+r == n)
}

function kaprekarNumbers(p, q) {
    let out = ''
    for(let i=p; i<=q; i++){
        if(isKaprekarNo(i)) out += `${i} `
    }
    if(out === '') console.log('INVALID RANGE')
    else console.log(out)

}

// kaprekarNumbers(100,300)
console.log(isKaprekarNo(99))
console.log(isKaprekarNo(297))