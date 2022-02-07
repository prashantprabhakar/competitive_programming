
function minimumPaintTime(arr, noOfPainters) {

  let i = 0, j= arr.length-1;
  let result = 0;
  function solve(arr, noOfPainters, i, j) {
    if(i>j) return 0;
    for(let k=i; k<j; k++) {
      let tempCost = arr[i] + Math.min(solve(arr, i, k), solve(k+1, j))
      result = Math.min(tempCost, result);
    }
    return result
  }
  solve(arr, 2, 0, arr.length)
  return result

}



console.log(minimumPaintTime([10,40,20,30,40,50], 2))