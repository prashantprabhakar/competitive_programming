
/**
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 */


function isSubsequence(str1, str2) {
  if(str1.length > str2.length) return false;
  if(str1.length == str2.length) return str1 === str2;

  let p1 = 0, p2 = 0;

  while(p1 < str1.length) {
    if(str1[p1] === str2[p2]) {
      p1++;
      p2++
    } else {
      p2++;
    }
  }
  return p1 == str1.length;

}

console.log(isSubsequence("abc", "ahbgdc"))
// console.log(isSubsequence("axc", "ahbaxc"))