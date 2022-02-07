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

function countGroups(related) {
    // Write your code here 
    let count = 0;
    let length = related.length;
    related = toArray(related)
    for(let i=0;  i<length; i++) {
      if(related[i][i] == 1) {
        count++;
        dfs(related,i, length)
      }  
    }
    return count

}

function dfs(matrix, index, length) {
  if(matrix[index][index] == 0) {
    // not related
    return
  }
  for(let i=0; i<length; i++) {
    if(matrix[index][i] == 1) {
      // already covered node
      matrix[index][i] = 0;
      dfs(matrix,i, length);
    }
  }
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

console.log(countGroups( ["1100","1110","0110","0001"]))