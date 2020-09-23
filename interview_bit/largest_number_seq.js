/**
 * source: interviewbit
 * URL: https://www.interviewbit.com/problems/largest-number/
 */

/**
 * Given a list of non negative integers, arrange them such that they form the largest number.
 * Given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 * Note: The result may be very large, so you need to return a string instead of an integer.
 */

// function largestNumber(arr) {
//     // Handle all zeroes
//     let zeroCount=0
//     arr = arr.map(a => {
//         if(a == 0) zeroCount++
//         return a.toString()
//     })
//     if(arr.length == zeroCount) return '0'
//     console.log(arr)
//     arr.sort((a, b) => {
//         // filter trailing zeros from a and b
//         let v1= a, v2=b
//         // logic used to compare by removing trailing zeros (3>30) 
//         while(v1.endsWith('0')) {
//             v1 = v1.slice(0, v1.length-1)
//         }
//         while(v2.endsWith('0')) {
//             v2 = v2.slice(0, v2.length-1)
//         }
        
        
//         if(v1 == v2) return a.length > b.length ? 1 : -1
//         return v1 > v2 ? -1: 1
//     })
//     return arr.join('')
// }

function largestNumber(arr) {
    // Handle all zeroes
    let zeroCount=0
    arr = arr.map(a => {
        if(a == 0) zeroCount++
        return a.toString()
    })
    if(arr.length == zeroCount) return '0'

    arr.sort((a, b) => compare(a,b) ? 1: -1)
    return arr.join('')
}


const compare = (a,b) =>  parseInt(a+b) > parseInt(b+a) ? false: true

// This does not work
function compare2(a, b) {
    let i=0
    while(a.length > i && b.length > i) {
        if(a[i] > b[i]) return false
        if(a[i] < b[i]) return true
        i++
    }

    // both are done
    if(a.length == i && b.length == i) return true
    // if b is done but a is remaining (like 31,3 | 314, 31)
    if(a.length > i) {
        return a[i] >= b[0] ? false: true
    }

    if(b.length > i) {
        return b[i] > a[0] ? true : false
    }

}



let inputs = [
    { ip: [31, 3, 34, 5, 9], op: '9534331' },
    { ip: [1,0,0,0,0] , op: '10000'},
    { ip: [12., 121], op: '12121'},
    {ip: [0,0,0,0], op: 0 },
    { ip: [334, 34], op: '34334'}, // 33434 34334
    { ip: [74, 6], op: '746'},
    {ip: [27, 271], op: '27271'},
    {
        ip: [ 782, 240, 409, 678, 940, 502, 113, 686, 6, 825, 366, 686, 877, 357, 261, 772, 798, 29, 337, 646, 868, 974, 675, 271, 791, 124, 363, 298, 470, 991, 709, 533, 872, 780, 735, 19, 930, 895, 799, 395, 905 ],
        op: '99197494093090589587787286882579979879178278077273570968668667867566465335024704093953663633573372982927126124019124113'
    },
    {
        ip: [ 170, 480, 735, 896, 634, 844, 1, 610, 446, 591, 935, 802, 383, 8, 443, 247, 124, 461, 317, 457, 48, 886, 420, 473, 973, 464, 203, 288, 785, 703, 935, 7, 987, 48, 692, 633, 597, 857, 139, 733, 692, 68, 434, 587, 489, 517, 305, 432, 577, 335, 586, 34, 659, 491, 310, 857, 256, 856, 257, 877, 209, 979, 653, 646, 2, 65, 858, 779, 372, 116, 404, 268, 364, 351, 866, 824, 947, 960, 91, 691, 492, 312, 609, 915, 579, 476, 248, 192 ],
        op: '9879799739609479359359191589688868778668588578578568448248027857797735733703692692691686596565364663463361060959759158758657957751749249148948484804764734644614574464434344324204043833723643513433531731231030528826825725624824722092031921701391241161'
    }
]

inputs.forEach(test => {
    let res = largestNumber(test.ip)
    console.log({status: test.op == res, expected: test.op, actualll: res, })
})


// 34 31 ? 34
// 34 3 ? 34
// 12 121 ? 12
// 12 124 ? 124
// 30 3 ? 3
// 31 3 ? 3
// 314 ? 31 ? 314
//console.log(compare('29', '298')) // 29289 or 29829
//console.log(compare('1', '116')) // 1116 or 1161
//console.log(compare('34', '334'))