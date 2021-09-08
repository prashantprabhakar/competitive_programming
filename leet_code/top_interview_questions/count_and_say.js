/**
 * URL: https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/886/
 *  Source: ['leetcode']
 */

/**
 * The count-and-say sequence is a sequence of digit strings defined by the recursive formula
 * countAndSay(1) = "1"
 * countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
 * 
 * To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
 */

 /**
  * input: 1, 
  * output: "1"
  * 
  * input: 4
  * output: "1211"
  */

function countAndSay(n) {
  let result = "1"
  for(let i=2; i<=n; i++) {
    result = say(result)
  }
  return result;

}


function say(num) {
  num = String(num);
  let prevDigit = undefined, count = 0, result = '';
  while(num > 0) {
    let firstDigit = num[0];
    if(prevDigit == undefined || prevDigit == firstDigit) {
      count++;
      prevDigit = firstDigit;
    } else {
      result += `${count}${prevDigit}`;
      prevDigit = firstDigit;
      count=1;
    }
    num = num.slice(1);
  }

  result += `${count}${prevDigit}`

  return result;

}

for(let i=1; i<30; i++) {
  console.log({
    input: i,
    output: countAndSay(i)
  })
}