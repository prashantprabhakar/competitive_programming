/**
 * You are given a string S with repeated characters. 
 * The task is to rearange the chars in given string such that no 2 adjecent chars in string are same
 */

// @@PENDING

function rearrang(str) {

    let charCount = new Map()
    str= str.split('')

    str.forEach(char => charCount.has(char) ?  charCount.set(char, charCount.get(char)+1) : charCount.set(char, 1) );


    let chars = [], counts = []

    str.forEach(char => {
        if(chars.includes(char)) {
            let i = chars.indexOf(char)
            counts[i] = counts[i]+1
        } else {
            chars.push(char)
            counts[chars.length-1] = 1
        }
    })

    console.log(chars, counts)

    

    // rearrange count array
    // a: 3, b:2, c:1
    // now need to sort chars based on their count


}


rearrang('aacabb')

// s = 'aacabb', o/p: abacab or ababca or ababac