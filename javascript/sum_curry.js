
function getSum(n) {
    function getSumInternal(n, initialSum) {
        return function() {
            let args = Array.from(arguments)
            let sum = args.reduce((sum, a) => sum+a, initialSum)
            if(args.length === n) {
                return sum
            } else {
                return getSumInternal(n-arguments.length, sum)
            }
        }
    }

    return getSumInternal(n, 0)
}

let sum = new getSum(3)

console.log(sum(1,2,3))
console.log(sum(1)(2,3))
console.log(sum(1,2)(3))