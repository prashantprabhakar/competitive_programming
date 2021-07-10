/**
  Asked in amaon twice.
  Question:
    Given a 2-d array; matrix[i][j] represents if person i has recommended a book to person j.
    If person x has also recommended to j then i,j,x know each other and form a group.
    We need to count number of such groups.

    // leetcode ref: https://leetcode.com/discuss/interview-question/912928/amazon-oa-2020-gifting-groups-friend-circle-lc-doesnt-solve-this
 */

/**
  i/p: ["1100","1110","0110","0001"] -> 2 ([0,1,2]  and [3])
 */

/**
  ["1100", "1101", "0010", "0001"]
  row0 1 1 0 0
  row1 1 1 0 1
  row2 0 0 1 0
  row3 0 0 0 1 
  Ans: 2 because the groups are [0,1,3] [2]
 */

function countGroups(related) {
  let matrix = toArray(related)
  const len = matrix.length
  console.log(matrix)
  // let visisted = new Array(len).fill(new Array(len).fill(0))
  let visisted = get2DEmptyArr(len)
  console.log(visisted)
  let count = 0
  // watching for each user
  for(let i=0; i<len; i++) {
    //for(let j=0; j<len; j++) {
      visisted[i][i] = 1
      //console.log(visisted[1][0],i, j)
      // now they are related call dfs
      if(matrix[i][i]) {
        count++;
        dfs(matrix, i, visisted)
      }
    //}
  }
  console.log(count)
}

function dfs(matrix, user, visisted) {
  for(let j=0; j<matrix.length; j++) {
    if(visisted[user][j]) continue;
    visisted[user][j] = 1
    if(matrix[user][j]) {
      dfs(matrix, j, visisted)
    }
  }
  return
}


function get2DEmptyArr(n) {
  let result = []
  for(let i=0; i<n; i++) {
    let r = []
    for(let j=0; j<n; j++) {
      r.push(0)
    }
    result.push(r)
  }
  return result
    
}

function toArray(arr) {
  let result = []
  for(let i=0; i<arr.length; i++) {
    let str = arr[i]
    let r = []
    for(let j=0; j<str.length; j++) {
      r.push(Number(str[j]))
    }
    result.push(r)
  }
  return result;

}

//console.log(countGroups( ["1100","1110","0110","0001"]))
//console.log(countGroups(["1100", "1101", "0010", "0001"]))
countGroups(["1100", "1101", "0010", "0001"])