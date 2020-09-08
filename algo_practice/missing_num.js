
function missingNum(arr) {
    let n = arr.length // since one no is repeated
    let expectedSum = n*(n+1)/2
    let actualSum = arr.reduce((i, sum) => i+sum, 0)
    let diff = actualSum - expectedSum
    // diff = double no- missing no
    console.log({expectedSum, actualSum, diff})
}

missingNum([1,2,3,5,5])