/**
 * Equalize the Array
 * https://www.hackerrank.com/challenges/equality-in-a-array/problem
 */

function equalizeArray(arr) {
    arr = arr.split( ' ')
    let map = new Map()
    let max = 1
    for(let i=0; i<arr.length; i++){
        let key = arr[i]
        if(map.has(key)) {
            map.set(key, parseInt(map.get(key))+1)
            if(map.get(key) > max) max = map.get(key)
        }
        else map.set(key, 1)
    }
    let res = arr.length - max
    console.log(res)
   return res
    
}

//equalizeArray('3 3 2 1 3')
equalizeArray('1 2 3 1 2 3 3 3')
equalizeArray('3 3 3 3 1 1 1 1 2 1')
equalizeArray('0 0 0 0 0 0 0')
