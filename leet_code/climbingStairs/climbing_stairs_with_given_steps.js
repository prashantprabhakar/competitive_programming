/**
 * This is variation of standard problem where instead of taking 1 or 2 steps; you can take steps provided as array
 * like: [1,3,5]
 */


function climbStairs(n, possibleSteps) {
  if(n == 0) return 0
  if(n==1) return 1
  let numberOfWays = [1, 1]
  numberOfWays = [ 1, 1]
  for(let i=2; i<=n ;i++) {
    let total = 0
    possibleSteps.forEach(step => {
        if(i - step > 0) total += numberOfWays[i-step]
    });
    numberOfWays[i] = total
  }
  return numberOfWays[n]
}


let inputs = [3,4,5,6, 7 ]
let outputs = inputs.map(i=> climbStairs(i, [1, 2, 3]))
console.log({inputs, outputs})