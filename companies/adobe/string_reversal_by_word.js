// String reversal word by word

function reversebyWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ')
}

console.log(reversebyWords("Hello my name is prashant"))