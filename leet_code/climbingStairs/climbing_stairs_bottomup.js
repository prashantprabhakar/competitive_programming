
// { inputs: [ 3, 4, 5, 6, 7 ], outputs: [ 3, 5, 8, 13, 21 ] }
/**
 * From above inputs it is clear that climbStairs[n] = climbStairs[n-1] + climbStairs[n-2]
 */

/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function climbStairs(n) {
  let nuberOfWays = [1, 1]
  if(n <=0) return 0;
  if(n == 1) return 1;

  for(i=2; i<=n; i++) {
    nuberOfWays[i] = nuberOfWays[i-1] + nuberOfWays[i-2]
  }
  return nuberOfWays[n]
}

/**
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function climbStairs2(n) {
  if(n <=0) return 0;
  if(n == 1) return 1;
  let last =1, secondLast = 1
  for(i=2; i<n; i++) {
    let lastCopy = last
    last = last + secondLast;
    secondLast = lastCopy
   
  }
  return last + secondLast
}


let inputs = [3, 4,5,6, 7 ]
let outputs = inputs.map(i=> climbStairs2(i))
console.log({inputs, outputs})