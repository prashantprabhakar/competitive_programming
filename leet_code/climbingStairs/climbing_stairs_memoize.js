
function climbStairs(n, memo={}) {
  if(n<=0) return 0
  if(n<=2) return n;
  if(memo[n]) return memo[n]
  let result = climbStairs(n-1) + climbStairs(n-2)
  memo[n] = result
  return result
}


let inputs = [3, 4,5,6, 7 ]
let outputs = inputs.map(i=> climbStairs(i))
console.log({inputs, outputs})