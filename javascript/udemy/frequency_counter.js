// url: https://saxobank.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410598#notes

function sameFrequency(num1, num2){
  // good luck. Add any arguments you deem necessary.
  let frequency1 = {};
  let frequency2 = {};
  
  let num1Digits = 0, num2Digits = 0;
  while(num1 > 0) {
      let lastdigit = num1%10;
      num1Digits++;
      frequency1[lastdigit] = frequency1[lastdigit] ?  frequency1[lastdigit]+1 : 1;
      num1 = parseInt(num1/10);
  }
  
  while(num2 > 0) {
      let lastdigit = num2%10;
      num2Digits++;
      frequency2[lastdigit] = frequency2[lastdigit] ?  frequency2[lastdigit]+1 : 1;
      num2 = parseInt(num2/10);
  }
  
  if(num1Digits !== num2Digits) return false;
  
  for(let key in frequency1) {
      if(frequency2[key] !== frequency1[key]) return false;
  }
  
  return true;
  
}


console.log(sameFrequency(123, 321))