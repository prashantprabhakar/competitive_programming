/**
 * URL: https://www.geeksforgeeks.org/minimum-number-deletions-insertions-transform-one-string-another/
 */

/**
 * problem: Minimum number of deletions and insertions to transform one string into another
 */


function findNumberOfInsertOrDelete(str1, str2) {
  let lcsLength = lcs(str1, str2);
  console.log(lcsLength)
  let deletions = str1.length - lcsLength;
  let insertions = str2.length - lcsLength;
  return insertions + deletions;
}

function lcs(str1, str2) {
  let dpMatrix = new Array(str1.length+1).fill(0).map(() => (new Array(str2.length+1)).fill(0));

  for(let i=1; i<=str1.length; i++) {
    for(let j=1; j<=str2.length; j++) {
      if(str1[i-1] === str2[j-1]) {
        dpMatrix[i][j] = 1 + dpMatrix[i-1][j-1];
      } else {
        dpMatrix[i][j] = Math.max(
          dpMatrix[i-1][j],
          dpMatrix[i][j-1]
        )
      }
    }
  }
  return dpMatrix[str1.length][str2.length];
}

//console.log(findNumberOfInsertOrDelete('leetcode', 'etco'))
console.log(findNumberOfInsertOrDelete('sea', 'eat'))