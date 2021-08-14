/**
 * Given an array of size n that has following specifications
 * 1. Each emelent in array is either police or thief
 * 2. Each policeman can catch only one thief
 * 3. A policeman can not catch a thief who is more than "k" units away from the policeman
 */

function countNoOfThieves(arr, k) {
  let policeIndex = [], thiefIndex = []

  for(let i=0; i<arr.length; i++) {
    if(arr[i] == 'p') policeIndex.push(i)
    else thiefIndex.push(i)
  }
  // police: [0,2], thief: [1,3,4,5]

  let count = 0;
  for(let i=0; i<policeIndex.length; i++) {


    for(let j=1; j<=k; j++) {
      // move left
      let index = policeIndex[i] - k- j
      if(index < 0) break;
      if(arr[index] == "t") {
        count++;
        arr[index] = "c"
        break;
      }
    }

    for(let j=1; j<=k; j++) {
      // move right
      let index = policeIndex[i] + j
      if(index > arr.length) break;
      if(arr[index] == "t") {
        count++;
        arr[index] = "c"
        break;
      }
    }

  }
  return count
}



const tests = [
  // {
  //   input: [ [['p', 't', 't', 'p', 't']], 2],
  //   expected: 3,
  // },
  {
    input: [ ['p', 't', 'p', 't', 't', 't'], 2],
    expected: 2,
  },
  {
    input: [['t', 't', 'p', 'p', 't', 'p'], 2],
    expected: 3,
  },
  {
    input: [['p', 't', 't', 'p', 't'], 1],
    expected: 2,
  }
]

tests.forEach(test => console.log({
  output: countNoOfThieves.apply(this, test.input),
  expected: test.expected
}))