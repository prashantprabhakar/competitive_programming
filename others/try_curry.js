/**
 * sum(1)(2)(3)(4)();
 */

// return a fn if arg is provided else return total sum
function sumCurry() {
    let totalSum = 0
    function internalSum() {
        if(arguments.length == 0) return totalSum
        else {
            totalSum += arguments[0]
            return internalSum
        }
    }
    return internalSum
   
}

console.log(sumCurry(1)(2)(3)())

////////////////////////////////////
function getSum(maxArgs) {
    // x should return a fn
   function x(n, existingSum=0) {

        return function() {
            let currentSum = Array.from(arguments).reduce((a,b) => a+b, existingSum)
            if(arguments.length < n) return x(n-arguments.length, currentSum)
            else return currentSum
        }

   }

   return x(maxArgs)
}


let sum =  getSum(3)

console.log(sum(1,2,3))
console.log(sum(1)(2,3))
console.log(sum(1,2)(3))