

Array.prototype.myReduce = function(callBack, accumulator) {
    let values = this

    for(let i=0; i<values.length; i++) {
        accumulator = accumulator ? callBack(accumulator, values[i], i, values) : values[i]
    }

    return accumulator

    // callback(accumulator, currentVal, index, array)
}


let arr = [1,2, 3]
console.log(arr.myReduce((a, b) => a * b), 4)
console.log(arr.reduce((a, b) => a*b, 4))