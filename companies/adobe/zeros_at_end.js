//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.


function zerosAtEnd(arr) {
  let i=0; j=0

  while(j<arr.length) {
    if(arr[i] == 0) {
      while(arr[j] === 0) j++
      if(j>=arr.length) break;
      // swap i and j
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++
      j++
    } else {
      i++;
      j++;
    }
  }
  console.log(arr)
}


zerosAtEnd([1,0,0,0, 3,4,0,5])
zerosAtEnd([1,0,0,0, 3,0,0,0])
zerosAtEnd([0,0,0,0,0,0,1])
      