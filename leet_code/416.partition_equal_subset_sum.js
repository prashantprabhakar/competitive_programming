/**
 * url: https://leetcode.com/problems/partition-equal-subset-sum/
 * source: ['leetcode']
 * tags: ['DP']
 * help: ['https://www.youtube.com/watch?v=_gPcYovP7wc&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=7']
 */

/**
 * Given a non-empty array nums containing only positive integers, 
 * find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
 */

function canHaveEqualSumPartition(arr, method='dp') {

  if(arr.length <= 1) return false;

  let arrSum =  arr.reduce((acc, currentVal) => acc += currentVal, 0);
  // base condition
  if(arrSum %2 != 0) return false;

  switch(method) {
    case 'dp': return _canHaveGivenSumDp(arr, arrSum/2);
    case 'recursion': return _canHaveGivenSumRec(arr, arrSum/2);
    case 'memo': return _canHaveGivenSumMemo(arr, arrSum/2);
  }

}

// Recursive solution works but time limit exceeds for certain test cases... 
function _canHaveGivenSumRec(arr, targetSum, index = 0) {
  if(index==0)console.log(arr, targetSum)
  // base condition
  if(targetSum === 0) return true;
  if(index === arr.length) return false;

  //  choose current index
  if(arr[index] <= targetSum) {
    return (
      _canHaveGivenSumRec(arr, targetSum-arr[index], index+1) ||
      _canHaveGivenSumRec(arr, targetSum, index+1)
    );
  } else {
    return _canHaveGivenSumRec(arr, targetSum, index+1);
  }

}

function _canHaveGivenSumMemo(arr, targetSum, index=0, memo={}) {
  let memoKey = `${index}_${targetSum}`;

  if(memo[memoKey]) return memo[memoKey];
  
  if(targetSum === 0) return true;
  if(index === arr.length || targetSum < 0) return false;

  let foundResult = false;
  //  choose current index
  if(arr[index] <= targetSum) {
    foundResult = (
      _canHaveGivenSumMemo(arr, targetSum-arr[index], index+1) ||
      _canHaveGivenSumMemo(arr, targetSum, index+1)
    );
  } else {
    foundResult = _canHaveGivenSumMemo(arr, targetSum, index+1);
  }
  memo[memoKey] = foundResult;
  return foundResult;
}

function _canHaveGivenSumDp(arr, targetSum) {
  // i = arr[i] and j =  targetSum
  let dpMatix = new Array(arr.length+1).fill(-1).map(() => new Array(targetSum+1).fill(-1))
  
  for(let j=0; j<=targetSum; j++) {
    dpMatix[0][j] = false;
  }

  for(let i=0; i<=arr.length; i++) {
    dpMatix[i][0] = true;
  }

  for(let i=1; i<=arr.length; i++) {
    for(let j=1; j<=targetSum; j++) {
      if(arr[i-1] <= j) {
        dpMatix[i][j] = (
          dpMatix[i-1][ j- arr[i-1] ] ||
          dpMatix[i-1][j]
        )
      } else {
        dpMatix[i][j] = dpMatix[i-1][j];
      }

    }
  }
  return dpMatix[arr.length][targetSum]
}

/**
 * Passes all tests.. the idea here is to have a set to contain sums.. 
 * take first element; add it to set.
 * for next element; add it to add the elements in set to make a new sum (if you have chooses element)
 * else add the element only.
 */
function canHaveEqualSumPartition2(arr) {
  if(arr.length <= 1) return false;

  let arrSum =  arr.reduce((acc, currentVal) => acc += currentVal, 0);
  // base condition
  if(arrSum %2 != 0) return false;
  const targetSum = arrSum / 2;
  
  let set = new Set()
  set.add(0);

  for(let i=0; i<arr.length; i++) {
    let tempSet = new Set();
    for(let elem of set) {
      let newSum = elem + arr[i];
      if(newSum === targetSum || arr[i] === targetSum) {
        return true;
      }
      tempSet.add(newSum);
      tempSet.add(arr[i]);
    }
    set = new Set([...set, ...tempSet])
  }
  
  return false
}






const tests = [
  {
    output: canHaveEqualSumPartition2([1,5,11,5]),
    expectedOutput: true,
  },
  {
    output: canHaveEqualSumPartition2([1,2,3,5]),
    expectedOutput: false,
  },
  {
    output: canHaveEqualSumPartition2([1,2,5]),
    expectedOutput: false
  },
  {
    output: canHaveEqualSumPartition2([1,2,3,4,5,6,7]),
    expectedOutput: true
  }
  
]

tests.forEach(test => console.log(test))
