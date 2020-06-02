/**
    https://www.hackerrank.com/challenges/string-construction/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
 */

function stringConstruction(s) {

    let p = ''
    let cost = 0
    for(let i=0; i<s.length; i++) {
        let char = s[i]
        if(!p.includes(char)) {
            cost++
            p += char
        }
    }
    return cost

}