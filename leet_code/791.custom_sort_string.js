/**
 * URL: https://leetcode.com/problems/custom-sort-string/
 * Source: ['leetcode']
 * difficulty: medium
 */

var customSortString = function(order, s) {
  let orderMap = {}
  order.split('').forEach((char, index) => orderMap[char] = index);
  
  let existing = [], nonExisting = [];
  s.split('').forEach(char  => orderMap.hasOwnProperty(char) ? existing.push(char) : nonExisting.push(char) );
  
  existing.sort((a, b) => orderMap[a] - orderMap[b] )+nonExisting.join('');
  return existing.join('')+nonExisting.join('')
  
};

