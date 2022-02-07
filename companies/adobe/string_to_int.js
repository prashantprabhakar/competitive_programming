// Write a program to convert string to integer. I.e "123" should be converted to 123.

function stringToInt(str) {
  let res = 0;
  let n = str.length-1;

  for(let i=n; i>=0; i--) {
    let char = str[i];
    res += parseInt(char)*(10 ** (n-i))
  }
  console.log(res)

}

stringToInt("123")