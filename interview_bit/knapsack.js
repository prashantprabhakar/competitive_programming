/**
 * URL: https://www.interviewbit.com/problems/0-1-knapsack/
 */

function knapsack(value, weight, capacity, method) {
  switch(method) {
    case 'rec': return _knapsack_rec(value, weight, capacity);
    case 'memo': return _knapsack_memo(value, weight, capacity);
    case 'dp': return _knapsack_dp(value, weight, capacity);
  }
}

function _knapsack_rec(value, weight, capacity, index=value.length-1) {
  if(capacity <= 0) return 0;
  if(index == 0) return 0;

  if(weight[index] > capacity) {
    return _knapsack_rec(value, weight, capacity, index-1);
  } else {
    return Math.max(
      value[index] + _knapsack_rec(value, weight, capacity-weight[index], index-1),
      _knapsack_rec(value, weight, capacity, index-1)
    )
  }
}

function _knapsack_memo(value, weight, capacity, index=value.length-1, memo={}) {
  if(capacity <= 0) return 0;
  if(index === 0) return 0;

  let memoKey = `${capacity}_${index}`
  if(memo[memoKey] !== undefined) return memo[memoKey];

  if(weight[index] > capacity) {
    memo[memoKey] = _knapsack_memo(value, weight, capacity, index-1, memo);
  } else {
    memo[memoKey] = Math.max(
      value[index] + _knapsack_memo(value, weight, capacity-weight[index], index-1, memo),
      _knapsack_memo(value, weight, capacity, index-1, memo)
    )
  }
  return memo[memoKey];
}

function _knapsack_dp(value, weight, capacity) {
  let arrSize = weight.length;
  if(capacity <= 0 || arrSize === 0) return 0;
  let dpMatrix = new Array(arrSize+1).fill(-1).map(() => new Array(capacity+1).fill(-1))
  
  for(let i=0; i<arrSize+1; i++) {
    dpMatrix[i][0] = 0;
  }
  for(let j=0; j<capacity+1; j++) {
    dpMatrix[0][j] = 0;
  }

  for(let i=1; i<arrSize+1; i++) {
    for(let j=1; j<capacity+1; j++) {

      if(weight[i-1] > j) {
        dpMatrix[i][j] = dpMatrix[i-1][j-1];
      } else {
        dpMatrix[i][j] = Math.max(
          value[i-1] + dpMatrix[i-1][j- weight[i-1]],
          dpMatrix[i][j] = dpMatrix[i-1][j-1]
        )
      }

    }
  }

  return dpMatrix[arrSize][capacity]

}


const  tests = [
  {
    input: [[60,100,120], [10,20,30], 50],
    expected: 220
  },
  {
      input: [[1,2,3], [4,5,1], 4],
      expected: 3
  }
]

tests.forEach(test => console.log({
  output: knapsack.apply(this, [...test.input, 'dp']),
  expected: test.expected
}))