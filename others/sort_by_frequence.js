/**
 * Interview: Fluxon
 * Leetcode: https://leetcode.com/problems/sort-characters-by-frequency/submissions/
 * Statement: Write a function that sorts an array of strings by frequency. 
 * Given an array [ “google.com”, “yahoo.com”, “google.com”, “yahoo.com”, “google.com”, “cnn.com”, “aol.com” ].
 * The function should return [ “google.com”, “yahoo.com”, “cnn.com”, “aol.com” ].
 */

function sortByFrequency(strings) {
    let str_frequency = new Map()

    strings.forEach(str => {
        if(str_frequency.has(str)) str_frequency.set(str, str_frequency.get(str)+1)
        else str_frequency.set(str, 1)
    })

    // let x = [...str_frequency.keys()].sort((k1, k2) => {
    //     if(str_frequency.get(k1) < str_frequency.get(k2)) return 1
    //     else return -1
    // })


    let x = Array.from(str_frequency.keys()).sort((k1, k2) => str_frequency.get(k2) - str_frequency.get(k1))

    console.log(x)
}

// Leetcode variation
function frequencySort(string) {
    let map = new Map()
    // O(n)
    for(let i=0; i<string.length; i++) {
        let char = string[i]
        if(map.has(char)) map.set(char, map.get(char)+1)
        else map.set(char, 1)
    }

    let keys = Array.from(map.keys())
    keys.sort((k1, k2) => map.get(k2) - map.get(k1))

    // O(n)
    let finalStr = ''
    for(let i=0; i<keys.length; i++) {
        let occ = map.get(keys[i])
        for(let j=0; j<occ; j++) {
            finalStr += keys[i]
        }
    }
    return finalStr

}




sortByFrequency( [ "google.com", "yahoo.com", "google.com", "yahoo.com", "google.com", "cnn.com", "aol.com", "yahoo.com", "yahoo.com", "yahoo.com" ])
frequencySort('hellooo')