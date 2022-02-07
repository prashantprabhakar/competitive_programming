
/**
 *https://leetcode.com/problems/generate-parentheses/ 
 */

function generatePerenthesis(n) {
  let result = [];
  _generateParenthesis(n, result, '', 0, 0)
  console.log({len:result.length, result})
}


function _generateParenthesis(n, result, tempResult, open, closed) {
  if(open === n && closed === n) {
    result.push(tempResult)
    return;
  }

  if(open < n) {
    _generateParenthesis(n, result, tempResult+'(', open+1, closed);
  }

  if(closed < open) {
    _generateParenthesis(n, result, tempResult+')', open, closed+1);
  }
}

generatePerenthesis(3)