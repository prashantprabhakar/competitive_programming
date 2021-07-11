/**
  Brute force approach
  Time complexity: O(2^n)
 */
function climbStairs(n) {
  // base case
  if(n<=0) return 0;
  if(n==1) return 1
  if(n==2) return 2;

  // I can now take either 1 or 2 step
  return climbStairs(n-1) + climbStairs(n-2)
}



let inputs = [3, 4,5,6, 7 ]
let outputs = inputs.map(i=> climbStairs(i))
console.log({outputs})